import './CompareVersionsPage.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { getChangeRequests, approveChangeRequest, rejectChangeRequest, approveChangeItem, rejectChangeItem } from '../../api/changeRequestService';
import { getUserRole, restoreVersion } from '../../api/projectService';

const parseValue = (valStr) => {
    if (!valStr) return 'N/A';
    try {
        const obj = JSON.parse(valStr);
        return obj.title || obj.ruleDescription || obj.description || obj.content || JSON.stringify(obj, null, 2);
    } catch(e) {
        return valStr;
    }
};

const CompareVersionsPage = () => {
    const { projectId } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const changeRequestId = searchParams.get('changeRequestId');

    const [isOwner, setIsOwner] = useState(false);
    const [changeRequest, setChangeRequest] = useState(null);
    const [status, setStatus] = useState('PENDING');
    const [loading, setLoading] = useState(true);
    
    const [busy, setBusy] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            if (!changeRequestId) return;
            try {
                setLoading(true);
                const roleData = await getUserRole(projectId);
                setIsOwner(roleData.roleName === 'OWNER');

                const requests = await getChangeRequests(projectId);
                const req = requests.find(r => r.changeRequestId === parseInt(changeRequestId, 10));
                
                if (req) {
                    setChangeRequest(req);
                    setStatus(req.status);
                }
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [projectId, changeRequestId]);

    const handleApproveRequest = async () => {
        if (!changeRequestId) return;
        try {
            setBusy(true);
            await approveChangeRequest(projectId, changeRequestId);
            setStatus('APPROVED');
            setChangeRequest(prev => ({
                ...prev,
                status: 'APPROVED',
                items: prev.items.map(i => i.status === 'PENDING' ? { ...i, status: 'APPROVED' } : i)
            }));
            alert('Entire change request approved!');
        } catch (error) {
            console.error("Failed to approve change request", error);
            alert('Failed to approve change request');
        } finally {
            setBusy(false);
        }
    };

    const handleRejectRequest = async () => {
        if (!changeRequestId) return;
        try {
            setBusy(true);
            await rejectChangeRequest(projectId, changeRequestId);
            setStatus('REJECTED');
            setChangeRequest(prev => ({
                ...prev,
                status: 'REJECTED',
                items: prev.items.map(i => i.status === 'PENDING' ? { ...i, status: 'REJECTED' } : i)
            }));
            alert('Entire change request rejected!');
        } catch (error) {
            console.error("Failed to reject change request", error);
            alert('Failed to reject change request');
        } finally {
            setBusy(false);
        }
    };

    const handleApproveItem = async (itemId) => {
        try {
            setBusy(true);
            const updatedReq = await approveChangeItem(projectId, changeRequestId, itemId);
            setChangeRequest(updatedReq);
            setStatus(updatedReq.status);
        } catch (error) {
            console.error("Failed to approve item", error);
            alert('Failed to approve change item');
        } finally {
            setBusy(false);
        }
    };

    const handleRejectItem = async (itemId) => {
        try {
            setBusy(true);
            const updatedReq = await rejectChangeItem(projectId, changeRequestId, itemId);
            setChangeRequest(updatedReq);
            setStatus(updatedReq.status);
        } catch (error) {
            console.error("Failed to reject item", error);
            alert('Failed to reject change item');
        } finally {
            setBusy(false);
        }
    };

    const handleRestore = async () => {
        if (!window.confirm("Are you sure you want to restore to this version?")) return;
        try {
            setBusy(true);
            await restoreVersion(projectId, "v1.2");
            alert('Version restored successfully!');
            navigate(`/projects/${projectId}/history`);
        } catch (error) {
            console.error("Failed to restore version", error);
            alert('Failed to restore document to previous version');
        } finally {
            setBusy(false);
        }
    };

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex-1 p-6 flex justify-center items-center">
                    <span className="material-symbols-outlined animate-spin text-primary text-4xl">progress_activity</span>
                </div>
            </DashboardLayout>
        );
    }

    if (!changeRequest) {
        return (
            <DashboardLayout>
                <div className="flex-1 p-6 flex flex-col justify-center items-center text-slate-500">
                    <span className="material-symbols-outlined text-4xl mb-2">warning</span>
                    <p>Change Request not found</p>
                    <button onClick={() => navigate(`/projects/${projectId}/history`)} className="mt-4 text-primary hover:underline">
                        Back to History
                    </button>
                </div>
            </DashboardLayout>
        );
    }

    const items = changeRequest.items || [];

    return (
        <DashboardLayout>
            <div className="flex-1 p-6 md:p-10 overflow-y-auto">
                {/* Header Actions */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Compare Versions</h1>
                    <div className="flex gap-3">
                        {isOwner && (
                            <button 
                                onClick={handleRestore}
                                disabled={busy}
                                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-bold transition-all disabled:opacity-50"
                            >
                                <span className="material-symbols-outlined text-sm">restore</span>
                                Restore Previous Version
                            </button>
                        )}
                        <button className="flex items-center gap-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-bold transition-all">
                            <span className="material-symbols-outlined text-sm">description</span>
                            Export Diff Report
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex overflow-hidden bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    {/* Left Side: Old Version */}
                    <div className="flex-1 overflow-y-auto border-r border-slate-200 dark:border-slate-800 p-8">
                        <div className="max-w-2xl mx-auto">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Original</span>
                                <h2 className="text-slate-400 font-medium text-sm">Current Base Database</h2>
                            </div>
                            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                {items.length === 0 && <p className="italic">No changes found.</p>}
                                {items.map((item, idx) => (
                                    <section key={`old-${idx}`} className={`p-4 rounded ${item.operation === 'DELETE' ? 'diff-removed' : item.operation === 'UPDATE' ? 'bg-slate-100 dark:bg-slate-900/50' : 'opacity-50'}`}>
                                        <h3 className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">{item.entityType} ({item.operation})</h3>
                                        <p>{item.operation === 'CREATE' ? '--- (Not present in original) ---' : parseValue(item.oldValue)}</p>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: New Version */}
                    <div className="flex-1 overflow-y-auto p-8 bg-white dark:bg-slate-900 relative">
                        {/* Status Overlay */}
                        {status !== 'PENDING' && (
                            <div className="absolute top-4 right-4 z-10">
                                <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                    {status === 'APPROVED' ? 'Approved' : 'Rejected'}
                                </span>
                            </div>
                        )}

                        <div className="max-w-2xl mx-auto pb-20">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Updated</span>
                                <h2 className="text-slate-800 dark:text-white font-medium text-sm">{changeRequest.title}</h2>
                            </div>
                            <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                                {items.length === 0 && <p className="italic">No changes found.</p>}
                                {items.map((item, idx) => (
                                    <div key={`new-${idx}`} className="relative group">
                                        <section className={`p-4 rounded border ${item.operation === 'CREATE' ? 'diff-added border-green-200 dark:border-green-900/30' : item.operation === 'UPDATE' ? 'diff-modified border-yellow-200 dark:border-yellow-900/30' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-50'}`}>
                                            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2 uppercase tracking-wide">{item.entityType} ({item.operation})</h3>
                                            <p>{item.operation === 'DELETE' ? '--- (Removed in new version) ---' : parseValue(item.newValue)}</p>
                                        </section>

                                        {/* PER-ITEM ACTIONS */}
                                        {isOwner && item.status === 'PENDING' && (
                                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 pl-4">
                                                <button 
                                                    onClick={() => handleApproveItem(item.changeItemId)}
                                                    disabled={busy}
                                                    title="Approve Item"
                                                    className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-700 hover:bg-emerald-600 hover:text-white flex items-center justify-center shadow-sm transition-all"
                                                >
                                                    <span className="material-symbols-outlined text-sm">check</span>
                                                </button>
                                                <button 
                                                    onClick={() => handleRejectItem(item.changeItemId)}
                                                    disabled={busy}
                                                    title="Reject Item"
                                                    className="h-10 w-10 rounded-full bg-red-100 text-red-700 hover:bg-red-500 hover:text-white flex items-center justify-center shadow-sm transition-all"
                                                >
                                                    <span className="material-symbols-outlined text-sm">close</span>
                                                </button>
                                            </div>
                                        )}
                                        {/* ITEM STATUS OVERLAY */}
                                        {item.status !== 'PENDING' && (
                                            <div className="absolute bottom-2 right-2 opacity-50 pointer-events-none">
                                                <span className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${item.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                                    <span className="material-symbols-outlined text-[12px]">
                                                        {item.status === 'APPROVED' ? 'done' : 'close'}
                                                    </span>
                                                    {item.status}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            
                            {/* ENTIRE REQUEST ACTIONS */}
                            {isOwner && status === 'PENDING' && (
                                <div className="mt-10 flex gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                                    <button 
                                        onClick={handleApproveRequest}
                                        disabled={busy}
                                        className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 border-none text-white px-6 py-3 rounded-lg font-bold shadow-md shadow-emerald-500/20 transition-all disabled:opacity-50"
                                    >
                                        <span className="material-symbols-outlined">done_all</span>
                                        Approve All Pending Changes
                                    </button>
                                    <button 
                                        onClick={handleRejectRequest}
                                        disabled={busy}
                                        className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 hover:border-red-500 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-500 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg font-bold transition-all disabled:opacity-50"
                                    >
                                        <span className="material-symbols-outlined text-red-500">block</span>
                                        Reject Entire Request
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CompareVersionsPage;
