import './NotificationsPage.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { getUserInvitations, respondToInvitation } from '../../api/projectService';
import { toast } from 'react-toastify';

const NotificationsPage = () => {
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInvitations = async () => {
    try {
      setLoading(true);
      const data = await getUserInvitations();
      // Only show pending invitations
      setInvitations(data.filter(inv => inv.status === 'Pending'));
    } catch (err) {
      console.error('Failed to load invitations:', err);
      toast.error('Failed to load notifications');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvitations();
  }, []);

  const handleResponse = async (invitationId, accept) => {
    try {
      await respondToInvitation(invitationId, accept);
      toast.success(accept ? 'Invitation accepted successfully' : 'Invitation declined');
      fetchInvitations();
    } catch (err) {
      console.error('Failed to respond to invitation:', err);
      toast.error(err.response?.data?.message || 'Failed to process request');
    }
  };
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8"><div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<header className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-5 gap-4">
<div className="flex items-center gap-3">
<div className="bg-primary/10 p-2 rounded-lg">
<span className="material-symbols-outlined text-primary text-2xl">notifications</span>
</div>
<div>
<h1 className="text-xl font-bold tracking-tight">Notifications</h1>
<p className="text-sm text-slate-500 dark:text-slate-400">Manage your latest activity and alerts</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-xl">settings</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-xl">done_all</span>
</button>
</div>
</header>
<div className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
<nav className="flex px-6 gap-8">
<Link className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-4 font-semibold text-sm" to="#">
                        Project Invitations <span className="ml-1.5 bg-primary/10 px-2 py-0.5 rounded-full text-[10px]">{invitations.length}</span>
</Link>
</nav>
</div>
<div className="divide-y divide-slate-100 dark:divide-slate-800">
  {loading ? (
      <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
  ) : invitations.length === 0 ? (
      <div className="px-6 py-10 text-center flex flex-col items-center gap-3">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full">
              <span className="material-symbols-outlined text-4xl text-slate-400">notifications_off</span>
          </div>
          <p className="text-slate-500 font-medium">You have no pending invitations.</p>
      </div>
  ) : (
      invitations.map(inv => (
          <div key={inv.invitationId} className="group flex flex-col md:flex-row gap-4 bg-white dark:bg-slate-900 px-6 py-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
              <div className="flex items-start gap-4 flex-1">
                  <div className="shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">group_add</span>
                      </div>
                  </div>
                  <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                          <p className="text-slate-900 dark:text-slate-100 font-semibold text-sm md:text-base">Project Invitation</p>
                          <span className="h-2 w-2 rounded-full bg-primary"></span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                          {new Date(inv.sentAt).toLocaleString()}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 font-medium">
                          You were invited to collaborate on <span className="font-semibold text-slate-800 dark:text-slate-200">'{inv.projectName}'</span>
                      </p>
                  </div>
              </div>
              <div className="flex items-center gap-3 ml-14 md:ml-0 shrink-0 mt-2 md:mt-0">
                  <button 
                      onClick={() => handleResponse(inv.invitationId, true)}
                      className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
                      Accept
                  </button>
                  <button 
                      onClick={() => handleResponse(inv.invitationId, false)}
                      className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                      Decline
                  </button>
              </div>
          </div>
      ))
  )}
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;

