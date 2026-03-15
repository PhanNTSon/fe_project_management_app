import './ChangeHistoryPage.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { getUserRole } from '../../api/projectService';
import {
    getChangeRequests,
    approveChangeRequest,
    rejectChangeRequest,
} from '../../api/changeRequestService';

// ─── Status Badge ─────────────────────────────────────────────────────────────
const StatusBadge = ({ status }) => {
    const map = {
        PENDING:  { bg: 'bg-amber-100 dark:bg-amber-900/30',  text: 'text-amber-700 dark:text-amber-400',  dot: 'bg-amber-500',  label: 'Pending'  },
        APPROVED: { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-400', dot: 'bg-emerald-500', label: 'Approved' },
        REJECTED: { bg: 'bg-red-100 dark:bg-red-900/30',     text: 'text-red-700 dark:text-red-400',      dot: 'bg-red-500',    label: 'Rejected' },
    };
    const cfg = map[status] ?? map.PENDING;
    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text}`}>
            <span className={`size-1.5 rounded-full ${cfg.dot}`} />
            {cfg.label}
        </span>
    );
};

// ─── Spinner ──────────────────────────────────────────────────────────────────
const Spinner = () => (
    <div className="flex items-center justify-center py-24 gap-3 text-slate-400">
        <span className="material-symbols-outlined animate-spin text-2xl">progress_activity</span>
        <span className="text-sm">Loading change requests…</span>
    </div>
);

// ─── Empty State ──────────────────────────────────────────────────────────────
const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl text-slate-400">history</span>
        </div>
        <div>
            <p className="font-semibold text-slate-700 dark:text-slate-200">No change requests yet</p>
            <p className="text-sm text-slate-500 mt-1">Change requests submitted by team members will appear here.</p>
        </div>
    </div>
);

// ─── Format date ─────────────────────────────────────────────────────────────
const fmt = (iso) => {
    if (!iso) return '—';
    try {
        return new Date(iso).toLocaleDateString('vi-VN', {
            year: 'numeric', month: 'short', day: 'numeric',
        });
    } catch { return iso; }
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ChangeHistoryPage = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const [changes, setChanges]   = useState([]);
    const [role, setRole]         = useState(null);
    const [loading, setLoading]   = useState(true);
    const [error, setError]       = useState(null);
    const [actionLoading, setActionLoading] = useState({}); // { [changeId]: 'approve' | 'reject' }

    const isOwner = role === 'OWNER';

    // ── Fetch ────────────────────────────────────────────────────────────────
    const fetchData = useCallback(async () => {
        if (!projectId) return;
        setLoading(true);
        setError(null);
        try {
            const [roleDto, requestList] = await Promise.all([
                getUserRole(projectId),
                getChangeRequests(projectId),
            ]);
            setRole(roleDto.roleName);
            setChanges(Array.isArray(requestList) ? requestList : []);
        } catch (err) {
            console.error('[ChangeHistoryPage] fetch error:', err);
            setError('Không thể tải danh sách change requests. Vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    }, [projectId]);

    useEffect(() => { fetchData(); }, [fetchData]);

    // ── Actions ──────────────────────────────────────────────────────────────
    const handleApprove = async (changeId) => {
        setActionLoading(prev => ({ ...prev, [changeId]: 'approve' }));
        try {
            await approveChangeRequest(projectId, changeId);
            setChanges(prev =>
                prev.map(c => c.changeRequestId === changeId ? { ...c, status: 'APPROVED' } : c)
            );
        } catch (err) {
            console.error('[ChangeHistoryPage] approve error:', err);
            alert('Approval failed. Please try again.');
        } finally {
            setActionLoading(prev => { const n = { ...prev }; delete n[changeId]; return n; });
        }
    };

    const handleReject = async (changeId) => {
        setActionLoading(prev => ({ ...prev, [changeId]: 'reject' }));
        try {
            await rejectChangeRequest(projectId, changeId);
            setChanges(prev =>
                prev.map(c => c.changeRequestId === changeId ? { ...c, status: 'REJECTED' } : c)
            );
        } catch (err) {
            console.error('[ChangeHistoryPage] reject error:', err);
            alert('Rejection failed. Please try again.');
        } finally {
            setActionLoading(prev => { const n = { ...prev }; delete n[changeId]; return n; });
        }
    };

    // ── Stats ────────────────────────────────────────────────────────────────
    const stats = {
        total:    changes.length,
        pending:  changes.filter(c => c.status === 'PENDING').length,
        approved: changes.filter(c => c.status === 'APPROVED').length,
        rejected: changes.filter(c => c.status === 'REJECTED').length,
    };

    // ── Render ───────────────────────────────────────────────────────────────
    return (
        <DashboardLayout>
            <div className="flex-1 p-6 md:p-10 overflow-y-auto">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 mb-6 text-sm overflow-x-auto whitespace-nowrap pb-1">
                    <Link className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1" to="/dashboard">
                        <span className="material-symbols-outlined text-[18px]">home</span>
                        Workspace
                    </Link>
                    <span className="text-slate-300 dark:text-slate-600 material-symbols-outlined text-[16px]">chevron_right</span>
                    <Link className="text-slate-500 hover:text-primary transition-colors" to="/projects">Projects</Link>
                    <span className="text-slate-300 dark:text-slate-600 material-symbols-outlined text-[16px]">chevron_right</span>
                    <Link
                        className="text-slate-500 hover:text-primary transition-colors"
                        to={`/projects/${projectId}`}
                    >
                        Project Overview
                    </Link>
                    <span className="text-slate-300 dark:text-slate-600 material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="text-slate-900 dark:text-white font-semibold">Change History</span>
                </nav>

                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <h1 className="text-slate-900 dark:text-white text-3xl font-extrabold leading-tight tracking-tight">
                                Change History
                            </h1>
                            {role && (
                                <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                    {role}
                                </span>
                            )}
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-base">
                            {isOwner
                                ? 'Review and manage change requests submitted by your team.'
                                : 'Track all change requests submitted for this project.'}
                        </p>
                    </div>
                    <button
                        onClick={() => navigate(`/projects/${projectId}`)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Back to Overview
                    </button>
                </div>

                {/* Stats */}
                {!loading && !error && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Total',    value: stats.total,    color: 'bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300', icon: 'list_alt' },
                            { label: 'Pending',  value: stats.pending,  color: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600',  icon: 'pending' },
                            { label: 'Approved', value: stats.approved, color: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600', icon: 'check_circle' },
                            { label: 'Rejected', value: stats.rejected, color: 'bg-red-50 dark:bg-red-900/20 text-red-600', icon: 'cancel' },
                        ].map(stat => (
                            <div key={stat.label} className={`${stat.color} rounded-xl p-4 border border-black/5 dark:border-white/5`}>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="material-symbols-outlined text-[18px]">{stat.icon}</span>
                                    <p className="text-xs font-semibold uppercase tracking-wider opacity-70">{stat.label}</p>
                                </div>
                                <p className="text-3xl font-black">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Owner permissions notice */}
                {isOwner && !loading && !error && stats.pending > 0 && (
                    <div className="mb-6 flex items-center gap-3 px-4 py-3 bg-primary/5 dark:bg-primary/10 border border-primary/15 rounded-xl text-sm text-primary font-medium">
                        <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                        As Project Owner, you can approve or reject pending change requests.
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="flex flex-col items-center gap-4 py-24 text-center">
                        <span className="material-symbols-outlined text-4xl text-red-400">error</span>
                        <p className="text-slate-500">{error}</p>
                        <button
                            onClick={fetchData}
                            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Change Request Table */}
                {!error && (
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        {loading ? (
                            <Spinner />
                        ) : changes.length === 0 ? (
                            <EmptyState />
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                            <th className="p-4 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">Title</th>
                                            <th className="p-4 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider hidden md:table-cell">Description</th>
                                            <th className="p-4 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">Author</th>
                                            <th className="p-4 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">Date</th>
                                            <th className="p-4 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">Status</th>
                                            <th className="p-4 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider text-right">Actions</th>

                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {changes.map(change => {
                                            const id = change.changeRequestId;
                                            const isPending  = change.status === 'PENDING';
                                            const isApproving = actionLoading[id] === 'approve';
                                            const isRejecting = actionLoading[id] === 'reject';
                                            const busy = !!actionLoading[id];

                                            return (
                                                <tr
                                                    key={id}
                                                    className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                                                >
                                                    {/* Title */}
                                                    <td className="p-4 font-semibold text-slate-900 dark:text-white text-sm max-w-[180px]">
                                                        <span className="line-clamp-2">{change.title || `CR-${id}`}</span>
                                                    </td>

                                                    {/* Description */}
                                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs hidden md:table-cell">
                                                        <span className="line-clamp-2">{change.description || '—'}</span>
                                                    </td>

                                                    {/* Author */}
                                                    <td className="p-4">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-7 h-7 rounded-full bg-primary/15 dark:bg-primary/25 flex items-center justify-center shrink-0">
                                                                <span className="material-symbols-outlined text-primary text-[15px]">person</span>
                                                            </div>
                                                            <span className="text-sm text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">
                                                                {change.requesterName || 'Unknown'}
                                                            </span>
                                                        </div>
                                                    </td>

                                                    {/* Date */}
                                                    <td className="p-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                                        {fmt(change.createdAt)}
                                                    </td>

                                                    {/* Status */}
                                                    <td className="p-4">
                                                        <StatusBadge status={change.status} />
                                                    </td>

                                                    {/* Actions (Owner/Member) */}
                                                    <td className="p-4 text-right">
                                                        <div className="flex items-center justify-end gap-2">
                                                            {/* Compare Button (Always visible) */}
                                                            <button
                                                                onClick={() => navigate(`/projects/${projectId}/compare?changeRequestId=${id}`)}
                                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                                                                title="Compare changes"
                                                            >
                                                                <span className="material-symbols-outlined text-[14px]">difference</span>
                                                                Compare
                                                            </button>

                                                            {isOwner && isPending && (
                                                                <>
                                                                    <button
                                                                        onClick={() => handleApprove(id)}
                                                                        disabled={busy}
                                                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                                                    >
                                                                        {isApproving ? (
                                                                            <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>
                                                                        ) : (
                                                                            <span className="material-symbols-outlined text-[14px]">check_circle</span>
                                                                        )}
                                                                        Approve
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleReject(id)}
                                                                        disabled={busy}
                                                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500 text-white text-xs font-bold hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                                                    >
                                                                        {isRejecting ? (
                                                                            <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>
                                                                        ) : (
                                                                            <span className="material-symbols-outlined text-[14px]">cancel</span>
                                                                        )}
                                                                        Reject
                                                                    </button>
                                                                </>
                                                            )}
                                                            
                                                            {isOwner && !isPending && (
                                                                <span className="text-xs text-slate-400 italic px-2">
                                                                    {change.status === 'APPROVED' ? 'Approved' : 'Rejected'}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default ChangeHistoryPage;
