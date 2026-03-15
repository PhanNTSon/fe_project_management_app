import './ProjectMembersPage.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import {
    getProjectMembers,
    getProjectInvitations,
    getUserRole,
    createInvitation,
    removeProjectMember,
    updateProjectMemberRole
} from '../../api/projectService';
import { parseApiError, logApiError } from '../../api/apiErrorUtils';

const ProjectMembersPage = () => {
    const navigate = useNavigate();
    const { projectId } = useParams();

    const [role, setRole] = useState(null);
    const [members, setMembers] = useState([]);
    const [invitations, setInvitations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Modal state
    const [showInviteModal, setShowInviteModal] = useState(false);
    const [inviteEmail, setInviteEmail] = useState('');
    const [inviteSubmitting, setInviteSubmitting] = useState(false);
    const [inviteError, setInviteError] = useState(null);

    // Edit Role State
    const [editingMemberId, setEditingMemberId] = useState(null);
    const [editingRole, setEditingRole] = useState('');

    const isOwner = role === 'OWNER';
    
    // Constants
    const ROLES = ['OWNER', 'MAINTAINER', 'VIEWER', 'EDITOR'];

    useEffect(() => {
        if (!projectId) return;

        const fetchData = async () => {
            try {
                setLoading(true);
                const roleDto = await getUserRole(projectId);
                setRole(roleDto.roleName);

                const membersData = await getProjectMembers(projectId);
                setMembers(membersData);

                if (roleDto.roleName === 'OWNER') {
                    const invitesData = await getProjectInvitations(projectId);
                    setInvitations(invitesData);
                }
            } catch (err) {
                logApiError(err, 'ProjectMembersPage.fetchData');
                setError(parseApiError(err, 'Failed to load member data.'));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [projectId]);

    const handleInvite = async (e) => {
        e.preventDefault();
        setInviteError(null);
        if (!inviteEmail) {
            setInviteError('Email is required');
            return;
        }

        try {
            setInviteSubmitting(true);
            const newInvite = await createInvitation(projectId, inviteEmail);
            setInvitations([...invitations, newInvite]);
            setInviteEmail('');
            setShowInviteModal(false);
        } catch (err) {
            logApiError(err, 'ProjectMembersPage.handleInvite');
            setInviteError(parseApiError(err, 'Failed to send invitation.'));
        } finally {
            setInviteSubmitting(false);
        }
    };

    const handleRemoveMember = async (userId) => {
        if (!window.confirm("Are you sure you want to remove this member?")) return;
        try {
            await removeProjectMember(projectId, userId);
            setMembers(members.filter(m => m.userId !== userId));
        } catch (err) {
            logApiError(err, 'ProjectMembersPage.handleRemoveMember');
            setError(parseApiError(err, 'Failed to remove member.'));
        }
    };

    const handleUpdateRole = async (userId) => {
        if (!editingRole) {
            setEditingMemberId(null);
            return;
        }
        try {
            await updateProjectMemberRole(projectId, userId, editingRole);
            setMembers(members.map(m => m.userId === userId ? { ...m, roleName: editingRole } : m));
            setEditingMemberId(null);
            setEditingRole('');
        } catch (err) {
            logApiError(err, 'ProjectMembersPage.handleUpdateRole');
            setError(parseApiError(err, 'Failed to update member role.'));
        }
    };

    return (
        <DashboardLayout>
            <div className="flex-1 p-6 md:p-10 overflow-y-auto">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
                            <Link to={`/projects/${projectId}`} className="hover:text-primary">Project Overview</Link>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span>Members</span>
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Team Management</h1>
                        <p className="text-slate-600 dark:text-slate-400 mt-2 text-lg">Manage your team members and control access permissions across your project.</p>
                    </div>
                    {isOwner && (
                        <div className="flex items-center gap-3">
                            <button 
                                onClick={() => setShowInviteModal(true)} 
                                className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                            >
                                <span className="material-symbols-outlined text-[18px]">person_add</span>
                                Invite Member
                            </button>
                        </div>
                    )}
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-200">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="flex items-center gap-2 text-slate-400 text-sm py-8">
                        <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                        <span>Loading team data…</span>
                    </div>
                ) : (
                    <>
                        {/* Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Members</span>
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg text-[20px]">group</span>
                                </div>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">{members.length}</p>
                            </div>

                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">My Role</span>
                                    <span className="material-symbols-outlined text-emerald-600 bg-emerald-100 p-1.5 rounded-lg text-[20px]">shield_person</span>
                                </div>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">{role}</p>
                            </div>

                            {isOwner && (
                                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm border-l-4 border-l-amber-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Invites History</span>
                                        <span className="material-symbols-outlined text-amber-600 bg-amber-100 dark:bg-amber-900/30 p-1.5 rounded-lg text-[20px]">history</span>
                                    </div>
                                    <p className="text-3xl font-bold text-slate-900 dark:text-white">{invitations.length}</p>
                                </div>
                            )}
                        </div>

                        {/* Members List */}
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined">groups</span>
                                Members List
                            </h3>
                            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-50 dark:bg-slate-800/50">
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">User</th>
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email Address</th>
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Role</th>
                                                {isOwner && <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                            {members.length === 0 ? (
                                                <tr>
                                                    <td colSpan="3" className="px-6 py-4 text-center text-slate-500 text-sm italic">
                                                        No members found.
                                                    </td>
                                                </tr>
                                            ) : (
                                                members.map(m => (
                                                    <tr key={m.userId}>
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-3">
                                                                <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-bold text-slate-600 dark:text-slate-300">
                                                                    {(m.username || '?').charAt(0).toUpperCase()}
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">{m.username}</p>
                                                                    {m.fullName && <p className="text-xs text-slate-500">{m.fullName}</p>}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{m.email}</td>
                                                        <td className="px-6 py-4">
                                                            {isOwner && editingMemberId === m.userId ? (
                                                                <div className="flex items-center gap-2">
                                                                    <select
                                                                        className="px-2 py-1 border border-slate-300 rounded text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                                                                        value={editingRole}
                                                                        onChange={(e) => setEditingRole(e.target.value)}
                                                                    >
                                                                        <option value="" disabled>Select Role</option>
                                                                        {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                                                                    </select>
                                                                    <button 
                                                                        onClick={() => handleUpdateRole(m.userId)}
                                                                        className="text-primary hover:text-primary/80 transition-colors"
                                                                        title="Save Role"
                                                                    >
                                                                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                                                    </button>
                                                                    <button 
                                                                        onClick={() => { setEditingMemberId(null); setEditingRole(''); }}
                                                                        className="text-slate-400 hover:text-slate-600 transition-colors"
                                                                        title="Cancel"
                                                                    >
                                                                        <span className="material-symbols-outlined text-[18px]">cancel</span>
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase">
                                                                    {m.roleName}
                                                                </span>
                                                            )}
                                                        </td>
                                                        {isOwner && (
                                                            <td className="px-6 py-4 text-right">
                                                                {m.roleName !== 'OWNER' && (
                                                                    <div className="flex items-center justify-end gap-2">
                                                                        {editingMemberId !== m.userId && (
                                                                            <button 
                                                                                onClick={() => { setEditingMemberId(m.userId); setEditingRole(m.roleName); }}
                                                                                className="p-1.5 text-slate-400 hover:text-primary transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                                                                                title="Edit Role"
                                                                            >
                                                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                                                            </button>
                                                                        )}
                                                                        <button 
                                                                            onClick={() => handleRemoveMember(m.userId)}
                                                                            className="p-1.5 text-slate-400 hover:text-red-500 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                                                                            title="Remove Member"
                                                                        >
                                                                            <span className="material-symbols-outlined text-[18px]">person_remove</span>
                                                                        </button>
                                                                    </div>
                                                                )}
                                                            </td>
                                                        )}
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Invitations History (Owner Only) */}
                        {isOwner && (
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-amber-600">history</span>
                                    Invitations History
                                </h3>
                                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email</th>
                                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-slate-200">Date Sent</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                                {invitations.length === 0 ? (
                                                    <tr>
                                                        <td colSpan="3" className="px-6 py-4 text-center text-slate-500 text-sm italic">
                                                            No invitations found.
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    invitations.map(inv => (
                                                        <tr key={inv.invitationId}>
                                                            <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                                                                {inv.email}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide
                                                                    ${inv.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 
                                                                      inv.status === 'Accepted' ? 'bg-emerald-100 text-emerald-700' : 
                                                                      'bg-red-100 text-red-700'}`}
                                                                >
                                                                    {inv.status}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-slate-500">
                                                                {new Date(inv.sentAt).toLocaleDateString()}
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Invite Modal */}
            {showInviteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
                        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <h3 className="font-bold text-lg text-slate-800 dark:text-white">Invite New Member</h3>
                            <button onClick={() => setShowInviteModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form onSubmit={handleInvite} className="p-6">
                            {inviteError && (
                                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-xs font-semibold">
                                    {inviteError}
                                </div>
                            )}
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={inviteEmail}
                                    onChange={e => setInviteEmail(e.target.value)}
                                    placeholder="colleague@example.com"
                                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    required
                                    autoFocus
                                />
                            </div>
                            <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                                <button
                                    type="button"
                                    onClick={() => setShowInviteModal(false)}
                                    className="flex-1 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={inviteSubmitting}
                                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {inviteSubmitting ? (
                                        <>
                                            <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                                            Sending...
                                        </>
                                    ) : 'Send Invite'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
};

export default ProjectMembersPage;
