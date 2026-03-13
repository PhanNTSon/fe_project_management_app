import './ProjectMembersPage.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const ProjectMembersPage = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
<div className="max-w-2xl">
<h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Team Management</h1>
<p className="text-slate-600 dark:text-slate-400 mt-2 text-lg">Manage your team members, assign roles, and control access permissions across your workspace.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">link</span>
                    Copy Invite Link
                </button>
<button onClick={() => navigate('/invite')} className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-[18px]">person_add</span>
                    Invite Member
                </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Members</span>
<span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg text-[20px]">group</span>
</div>
<p className="text-3xl font-bold text-slate-900 dark:text-white">24</p>
<p className="text-xs text-green-600 mt-2 font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
                    +2 this month
                </p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm border-l-4 border-l-amber-500">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Requests</span>
<span className="material-symbols-outlined text-amber-600 bg-amber-100 dark:bg-amber-900/30 p-1.5 rounded-lg text-[20px]">person_pin_circle</span>
</div>
<p className="text-3xl font-bold text-slate-900 dark:text-white">3</p>
<p className="text-xs text-amber-600 mt-2 font-medium">Requires approval</p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Roles</span>
<span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg text-[20px]">shield_person</span>
</div>
<p className="text-3xl font-bold text-slate-900 dark:text-white">3</p>
<p className="text-xs text-slate-500 mt-2">Leader, Editor, Viewer</p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Invites</span>
<span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg text-[20px]">mail</span>
</div>
<p className="text-3xl font-bold text-slate-900 dark:text-white">5</p>
<p className="text-xs text-slate-500 mt-2">Expiring in 48 hours</p>
</div>
</div>
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
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Member</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email Address</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Role</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 dark:divide-slate-800">
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 bg-cover bg-center" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgjyo0SCXBTMU96SlvpDDfGipEbzTFTZ1frP2fhhBszxnEyHv48sh0tgS8FUCyPJCNZxaTEBmyhU_62TaB3M75X2D2nLwqg58yGfqBf7gG-FI0fxkhQs6L5bxWeXRpfKw5yT21mAv2v1dOFkPCjc0ByiARf3_EyoEF2ZyV75OVQPHgBciBG8WZz87oP8siPnbNCQspesAFKDBLHyBD4ypzEPTcxaI2_i8iaHo6j79-wOHlug28cSmN90wCKV-e26pFQDRk3ceGUAY")`}}></div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Alex Rivera</p>
<p className="text-xs text-slate-500">Joined June 2023</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">alex@company.com</td>
<td className="px-6 py-4">
<select className="bg-slate-100 dark:bg-slate-800 border-none text-xs font-semibold rounded-lg focus:ring-primary py-1.5 pl-3 pr-8 text-slate-900 dark:text-white">
<option defaultSelected>Leader</option>
<option>Editor</option>
<option>Viewer</option>
</select>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase tracking-wide">
<span className="size-1.5 rounded-full bg-green-600"></span>
                                    Active
                                </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-red-500 transition-colors">
<span className="material-symbols-outlined">delete</span>
</button>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 bg-cover bg-center" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUbNUg5AOtBF_tbqIevTr5bHNVZfwpGEbfsvHxn2LanJigK_Lt1PC1BWHVvKH93bgUI1Np_fjNORMaTJJ2pX0lOHH6mOEs4rgDjgjqs4jTohPmF6WV8SfeXp3JjwQ8-HvCPcLkvQrvkel2UVZHfTHATdwecnJ4bxjq5Na456dRI6tj0_hzfi04sUDRxTYK5M8F-mS8yMZH-LZKH0gzW6NPbutT_0aU1lZbyBTjLEBOeULozSX7vkwytdY7DebtBpKKdhFKxxruASw")`}}></div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Sarah Johnson</p>
<p className="text-xs text-slate-500">Joined Aug 2023</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">sarah.j@company.com</td>
<td className="px-6 py-4">
<select className="bg-slate-100 dark:bg-slate-800 border-none text-xs font-semibold rounded-lg focus:ring-primary py-1.5 pl-3 pr-8 text-slate-900 dark:text-white">
<option>Leader</option>
<option defaultSelected>Editor</option>
<option>Viewer</option>
</select>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase tracking-wide">
<span className="size-1.5 rounded-full bg-green-600"></span>
                                    Active
                                </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-red-500 transition-colors">
<span className="material-symbols-outlined">delete</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
<p className="text-xs text-slate-500">Showing 2 of 24 members</p>
<div className="flex gap-2">
<button className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold rounded-lg disabled:opacity-50">Previous</button>
<button className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold rounded-lg">Next</button>
</div>
</div>
</div>
</div>
<div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
<h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-amber-600">person_pin_circle</span>
                    Pending Join Requests
                    <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-0.5 rounded-full text-sm font-bold">3</span>
</h3>
<div className="flex items-center gap-3">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
<input className="pl-9 pr-4 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-primary w-full md:w-48" placeholder="Search requests..." type="text"/>
</div>
<select className="text-sm border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-lg py-1.5 focus:ring-primary">
<option>All Status</option>
<option>Pending</option>
<option>Approved</option>
<option>Rejected</option>
</select>
</div>
</div>
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">User</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Requested Role</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                                Request Date
                                <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 dark:divide-slate-800">
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 bg-cover bg-center" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwf6TaR8sEaL-1KYN8r5CR8KwPFhOOqio8ZWtr9oictP78CW8sS8tIVi6rS2M8ruv8zDnIlqZnBu_JjdTtr_v69iSrH9LjqxGNrYuvDws4Xc9WxoQoqTGlD8FcFaiWTmIcaHPIQbp1aTplqJFBJnwdr3Cxv00wEoD-dvERAkFuZATpfTxfZlg3dwWKrsBCb2SLL_DtAeHQYmRfrD9WFh08bO57sAh1mWLGVgjwrlBLdLaeQkGCujwTKtjaQQyomrPUB0nXEblD3jM")`}}></div>
<p className="text-sm font-bold text-slate-900 dark:text-white">James Wilson</p>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">j.wilson@outlook.com</td>
<td className="px-6 py-4 text-sm font-medium">Editor</td>
<td className="px-6 py-4 text-sm text-slate-500">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 uppercase tracking-wide">
                                    Pending
                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-bold transition-shadow shadow-sm" onclick="document.getElementById('approve-modal').classList.remove('hidden')">
<span className="material-symbols-outlined text-[14px]">check</span> Approve
                                    </button>
<button className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 border border-red-200 dark:border-red-800/50 rounded-lg text-xs font-bold transition-colors" onclick="document.getElementById('reject-modal').classList.remove('hidden')">
<span className="material-symbols-outlined text-[14px]">close</span> Reject
                                    </button>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 bg-cover bg-center" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlBXgDNpzvmK1ayAtvyr5sqrQVR0AxH7Ymi04FTwiCO4_5mAAxd7hv2z3JcWa_vpUljaNvt75hDFNHaed7leJ9ruQtzuSh1ZIQMDlBvnv9eck0xIdGVbgenaTWdrglFNAWKERvjjjhpaDTSLiz0Prg0yVPV7fkWCTshmi1UrkMNVYhTmdLpfae1R-Cq7e1TKcYChZRpnwuEsZq49OdVVPQu2DXf73UvL44vOpSKwW8d-7m8Mj6E1FzphZXS0_iAHjXEl7EI3zYLBw")`}}></div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Elena Rodriguez</p>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">elena.r@agency.com</td>
<td className="px-6 py-4 text-sm font-medium">Viewer</td>
<td className="px-6 py-4 text-sm text-slate-500">Oct 23, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 uppercase tracking-wide">
                                    Pending
                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-bold transition-shadow shadow-sm">
<span className="material-symbols-outlined text-[14px]">check</span> Approve
                                    </button>
<button className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 border border-red-200 dark:border-red-800/50 rounded-lg text-xs font-bold transition-colors">
<span className="material-symbols-outlined text-[14px]">close</span> Reject
                                    </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectMembersPage;
