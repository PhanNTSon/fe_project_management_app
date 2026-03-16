import './InviteMembersPage.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const InviteMembersPage = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const inviteLink = "https://nexus.srs/join/px7-992-abc";
  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
<div>
<h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Invite Members</h1>
<p className="text-slate-500 dark:text-slate-400 mt-1">Bring your team together to collaborate on SRS documentation and project tasks.</p>
</div>
        <button onClick={() => navigate('/projects/members')} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
<span className="material-symbols-outlined text-lg">arrow_back</span>
                        Back to Members
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<section className="md:col-span-7 space-y-6">
{/* Invite via Email Card */}
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-6 border-b border-slate-100 dark:border-slate-800">
<h3 className="text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">mail</span>
                                    Invite via Email
                                </h3>
<p className="text-sm text-slate-500 mt-1">Enter email addresses of colleagues you want to invite.</p>
</div>
<div className="p-6 space-y-4">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Addresses</label>
<textarea className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary min-h-[100px] text-sm p-3" placeholder="e.g. alice@company.com, bob@design.com"></textarea>
<p className="text-[11px] text-slate-400">Separate multiple emails with commas.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Default Role</label>
<select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary text-sm py-2">
<option>Viewer</option>
<option defaultSelected>Editor</option>
<option>Leader</option>
</select>
</div>
<div className="flex items-end">
<button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all shadow-md shadow-primary/20">
                                            Send Invites
                                        </button>
</div>
</div>
</div>
</div>
{/* Pending Invitations Table */}
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
<h3 className="text-lg font-bold">Pending Invitations</h3>
<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">3 Active</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-medium">
<tr>
<th className="px-6 py-3">Member</th>
<th className="px-6 py-3">Role</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
<tr>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="font-medium text-slate-900 dark:text-white">sarah.j@company.com</span>
<span className="text-[11px] text-slate-400">Invited by Alex â€¢ 2h ago</span>
</div>
</td>
<td className="px-6 py-4">
<span className="text-slate-600 dark:text-slate-300">Editor</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                                    Pending
                                                </span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-primary hover:underline font-semibold">Resend</button>
<button className="text-slate-400 hover:text-red-500">
<span className="material-symbols-outlined text-lg align-middle">cancel</span>
</button>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="font-medium text-slate-900 dark:text-white">mike.ross@legal.co</span>
<span className="text-[11px] text-slate-400">Invited by Alex â€¢ Yesterday</span>
</div>
</td>
<td className="px-6 py-4">
<span className="text-slate-600 dark:text-slate-300">Viewer</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                                    Expired
                                                </span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="text-primary hover:underline font-semibold">Resend</button>
<button className="text-slate-400 hover:text-red-500">
<span className="material-symbols-outlined text-lg align-middle">cancel</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<aside className="md:col-span-5 space-y-6">
{/* Shareable Link Card */}
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-6 border-b border-slate-100 dark:border-slate-800">
<h3 className="text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">link</span>
                                    Invite via Link
                                </h3>
<p className="text-sm text-slate-500 mt-1">Anyone with this link can join the workspace.</p>
</div>
<div className="p-6 space-y-5">
<div className="relative">
<input className="w-full rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-sm font-mono p-3 pr-20 text-slate-600 dark:text-slate-300" readOnly type="text" value="https://nexus.srs/join/px7-992-abc"/>
          <button onClick={handleCopy} className="absolute right-2 top-1.5 bg-white dark:bg-slate-700 hover:bg-slate-100 border border-slate-200 dark:border-slate-600 px-3 py-1.5 rounded-md text-xs font-bold text-primary transition-colors">
            {copied ? 'Copied!' : 'Copy'}
          </button>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Access Role</label>
<select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm py-2">
<option>Viewer</option>
<option>Editor</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Expires In</label>
<select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-sm py-2">
<option>Never</option>
<option>7 Days</option>
<option>24 Hours</option>
</select>
</div>
</div>
<div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
<div className="flex gap-3">
<span className="material-symbols-outlined text-primary">info</span>
<p className="text-xs text-primary/80 leading-relaxed">
                                            Links are high-risk. We recommend setting an expiration date for public shareable links.
                                        </p>
</div>
</div>
<button className="w-full border-2 border-dashed border-slate-200 dark:border-slate-700 py-3 rounded-lg text-sm font-semibold text-slate-400 hover:text-primary hover:border-primary/50 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-lg">refresh</span>
                                    Regenerate New Link
                                </button>
</div>
</div>
{/* Info Card */}
<div className="bg-gradient-to-br from-primary to-blue-700 rounded-xl p-6 text-white shadow-lg">
<h4 className="font-bold text-lg mb-2">Workspace Limits</h4>
<p className="text-blue-100 text-sm mb-4 leading-relaxed">
                                You are currently on the Pro Plan. You have used 8 of your 25 member seats.
                            </p>
<div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-6">
<div className="bg-white h-full" style={{width: '32%'}}></div>
</div>
        <button onClick={() => navigate('/pricing')} className="w-full bg-white text-primary font-bold py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                                Upgrade Plan
                            </button>
</div>
</aside>
</div>
      </div>
    </DashboardLayout>
  );
};

export default InviteMembersPage;
