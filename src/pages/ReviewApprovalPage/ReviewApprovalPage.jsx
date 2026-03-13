import './ReviewApprovalPage.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { getChangeRequests, approveChangeRequest, rejectChangeRequest } from '../../api/changeRequestService';

const statusBadge = (status) => {
    const variants = {
        PENDING:  'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        APPROVED: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        REJECTED: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    };
    const icons = { PENDING: 'pending', APPROVED: 'check_circle', REJECTED: 'cancel' };
    const cls = variants[status] ?? 'bg-slate-100 text-slate-600';
    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border border-transparent ${cls}`}>
            <span className="material-symbols-outlined text-sm">{icons[status] ?? 'help'}</span>
            {status ?? 'UNKNOWN'}
        </span>
    );
};

const ReviewApprovalPage = () => {
    const { projectId } = useParams();
    const [changeRequests, setChangeRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [actionLoading, setActionLoading] = useState(null); // 'approve' | 'reject'

    const fetchRequests = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getChangeRequests(projectId);
            setChangeRequests(data);
            if (data.length > 0) setSelectedId(data[0].changeRequestId);
        } catch (err) {
            setError('Failed to load change requests.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (projectId) fetchRequests();
    }, [projectId]);

    const selected = changeRequests.find(r => r.changeRequestId === selectedId);

    const handleApprove = async () => {
        if (!selected) return;
        try {
            setActionLoading('approve');
            await approveChangeRequest(projectId, selected.changeRequestId);
            await fetchRequests();
        } catch (err) {
            alert('Failed to approve change request.');
            console.error(err);
        } finally {
            setActionLoading(null);
        }
    };

    const handleReject = async () => {
        if (!selected) return;
        try {
            setActionLoading('reject');
            await rejectChangeRequest(projectId, selected.changeRequestId);
            await fetchRequests();
        } catch (err) {
            alert('Failed to reject change request.');
            console.error(err);
        } finally {
            setActionLoading(null);
        }
    };

    const formatDate = (dt) => {
        if (!dt) return '—';
        return new Date(dt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    return (
        <DashboardLayout>
            <div className="flex-1 overflow-y-auto p-6 md:p-10">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                    <Link to="/projects" className="hover:text-primary">Projects</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <Link to={`/projects/${projectId}`} className="hover:text-primary">Project</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="text-slate-900 dark:text-slate-100 font-semibold">Review &amp; Approval</span>
                </nav>
                <h1 className="text-3xl font-black tracking-tight mb-6">Review &amp; Approval</h1>

                {/* Loading */}
                {loading && (
                    <div className="flex items-center justify-center py-24">
                        <div className="flex items-center gap-3 text-slate-500">
                            <span className="material-symbols-outlined animate-spin">progress_activity</span>
                            <span>Loading change requests…</span>
                        </div>
                    </div>
                )}

                {/* Error */}
                {!loading && error && (
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
                        <span className="material-symbols-outlined">error</span>
                        {error}
                        <button onClick={fetchRequests} className="ml-auto underline font-semibold">Retry</button>
                    </div>
                )}

                {/* Empty */}
                {!loading && !error && changeRequests.length === 0 && (
                    <div className="flex flex-col items-center gap-4 py-24 text-center">
                        <span className="material-symbols-outlined text-5xl text-slate-300">rate_review</span>
                        <p className="text-slate-500 text-lg">No change requests for this project yet.</p>
                    </div>
                )}

                {/* Main layout: list + detail */}
                {!loading && !error && changeRequests.length > 0 && (
                    <div className="flex gap-6">
                        {/* Left: list */}
                        <aside className="w-80 flex-none space-y-3">
                            {changeRequests.map(req => (
                                <button
                                    key={req.changeRequestId}
                                    onClick={() => setSelectedId(req.changeRequestId)}
                                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                                        selectedId === req.changeRequestId
                                            ? 'border-primary bg-primary/5'
                                            : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/40'
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <span className="font-bold text-sm text-slate-900 dark:text-slate-100 leading-snug">{req.title}</span>
                                        {statusBadge(req.status)}
                                    </div>
                                    <p className="text-xs text-slate-500">{req.requesterName ?? 'Unknown'} · {formatDate(req.createdAt)}</p>
                                    {req.items?.length > 0 && (
                                        <p className="text-xs text-slate-400 mt-1">{req.items.length} change{req.items.length !== 1 ? 's' : ''}</p>
                                    )}
                                </button>
                            ))}
                        </aside>

                        {/* Right: detail */}
                        {selected && (
                            <div className="flex-1 flex flex-col gap-6">
                                {/* Header */}
                                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">{selected.title}</h2>
                                            <div className="flex items-center gap-3 mt-2 text-sm text-slate-500">
                                                <span>By <strong className="text-slate-700 dark:text-slate-300">{selected.requesterName}</strong></span>
                                                <span>·</span>
                                                <span>Submitted {formatDate(selected.createdAt)}</span>
                                                <span>·</span>
                                                {statusBadge(selected.status)}
                                            </div>
                                        </div>
                                    </div>
                                    {selected.description && (
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{selected.description}</p>
                                    )}
                                </div>

                                {/* Change Items */}
                                {selected.items?.length > 0 && (
                                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                                        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                                            <h3 className="font-bold text-slate-900 dark:text-slate-100">
                                                Change Items ({selected.items.length})
                                            </h3>
                                        </div>
                                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                            {selected.items.map(item => (
                                                <div key={item.changeItemId} className="p-6 space-y-3">
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
                                                            {item.entityType}#{item.entityId}
                                                        </span>
                                                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                                                            item.operation === 'CREATE' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                            item.operation === 'DELETE' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                                            'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                                        }`}>
                                                            {item.operation}
                                                        </span>
                                                        {item.fieldName && (
                                                            <span className="text-xs text-slate-500">Field: <code className="font-mono">{item.fieldName}</code></span>
                                                        )}
                                                    </div>
                                                    {(item.oldValue || item.newValue) && (
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                            {item.oldValue && (
                                                                <div className="p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg">
                                                                    <p className="text-xs font-bold text-red-500 uppercase mb-1">Old Value</p>
                                                                    <p className="text-sm text-slate-700 dark:text-slate-300 font-mono break-all">{item.oldValue}</p>
                                                                </div>
                                                            )}
                                                            {item.newValue && (
                                                                <div className="p-3 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 rounded-lg">
                                                                    <p className="text-xs font-bold text-green-500 uppercase mb-1">New Value</p>
                                                                    <p className="text-sm text-slate-700 dark:text-slate-300 font-mono break-all">{item.newValue}</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Actions (only for PENDING) */}
                                {selected.status === 'PENDING' && (
                                    <div className="flex gap-3">
                                        <button
                                            onClick={handleApprove}
                                            disabled={!!actionLoading}
                                            className="flex-1 flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-emerald-500/20 disabled:opacity-60"
                                        >
                                            {actionLoading === 'approve'
                                                ? <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                                : <span className="material-symbols-outlined">check_circle</span>
                                            }
                                            {actionLoading === 'approve' ? 'Approving…' : 'Approve'}
                                        </button>
                                        <button
                                            onClick={handleReject}
                                            disabled={!!actionLoading}
                                            className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border-2 border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 font-bold py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-60"
                                        >
                                            {actionLoading === 'reject'
                                                ? <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                                : <span className="material-symbols-outlined">cancel</span>
                                            }
                                            {actionLoading === 'reject' ? 'Rejecting…' : 'Reject'}
                                        </button>
                                    </div>
                                )}

                                {selected.status !== 'PENDING' && (
                                    <div className="flex items-center gap-2 text-sm text-slate-500 italic">
                                        <span className="material-symbols-outlined text-lg">info</span>
                                        This change request has already been {selected.status?.toLowerCase()}.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default ReviewApprovalPage;
