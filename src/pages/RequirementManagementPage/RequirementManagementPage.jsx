import './RequirementManagementPage.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const RequirementManagementPage = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Content Header */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
<div>
<h2 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight">Requirement Management</h2>
<p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage, prioritize and track lifecycle of product requirements.</p>
</div>
<div className="flex gap-3 w-full sm:w-auto">
        <button onClick={() => navigate('/export')} className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-lg">file_download</span>
                            Export
                        </button>
        <button onClick={() => navigate('/srs-editor')} className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-lg">add_circle</span>
                            Add Requirement
                        </button>
</div>
</div>
{/* Filters/Tabs */}
<div className="flex flex-col gap-6">
<div className="flex border-b border-slate-200 dark:border-slate-800 w-full overflow-x-auto">
<Link className="border-b-2 border-primary text-primary px-4 pb-3 pt-2 text-sm font-bold whitespace-nowrap" to="#">All Requirements (42)</Link>
<Link className="border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 px-4 pb-3 pt-2 text-sm font-semibold transition-colors whitespace-nowrap" to="#">My Assignments</Link>
<Link className="border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 px-4 pb-3 pt-2 text-sm font-semibold transition-colors whitespace-nowrap" to="#">Pending Review</Link>
<Link className="border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 px-4 pb-3 pt-2 text-sm font-semibold transition-colors whitespace-nowrap" to="#">Archived</Link>
</div>
{/* Main Table */}
<div className="@container">
<div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50">
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-24">ID</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Requirement Name</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-32 text-center">Priority</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-32">Use Case</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-40 text-center">Status</th>
<th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-24 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
{/* Row 1 */}
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
<td className="px-6 py-4 text-sm font-bold text-primary">REQ-1024</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Implement Multi-factor Authentication (MFA)</span>
<span className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-xs">User must be prompted for TOTP on every login from new device...</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">High</span>
</td>
<td className="px-6 py-4">
<Link className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1 hover:text-primary" to="#">
<span className="material-symbols-outlined text-sm">link</span> UC-081
                                            </Link>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
<span className="size-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                                                Approved
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-bold text-primary">REQ-1025</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 dark:text-slate-100">API Gateway Rate Limiting</span>
<span className="text-xs text-slate-500 dark:text-slate-400">Throttle requests to 1000/min per API key...</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Medium</span>
</td>
<td className="px-6 py-4">
<Link className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1 hover:text-primary" to="#">
<span className="material-symbols-outlined text-sm">link</span> UC-112
                                            </Link>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
<span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
                                                In Review
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-bold text-primary">REQ-1026</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 dark:text-slate-100">CSV Export for Audit Logs</span>
<span className="text-xs text-slate-500 dark:text-slate-400">Admins should be able to download activity in CSV format...</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-400">Low</span>
</td>
<td className="px-6 py-4">
<Link className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1 hover:text-primary" to="#">
<span className="material-symbols-outlined text-sm">link</span> UC-045
                                            </Link>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-500 border border-slate-200 dark:border-slate-700">
<span className="size-1.5 rounded-full bg-slate-400"></span>
                                                Draft
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-bold text-primary">REQ-1027</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Real-time Dashboard Updates</span>
<span className="text-xs text-slate-500 dark:text-slate-400">Use WebSockets for instant notification of requirement changes...</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">High</span>
</td>
<td className="px-6 py-4">
<Link className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1 hover:text-primary" to="#">
<span className="material-symbols-outlined text-sm">link</span> UC-201
                                            </Link>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
<span className="size-1.5 rounded-full bg-amber-600 dark:bg-amber-400"></span>
                                                Changes Requested
                                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
<span className="material-symbols-outlined text-xl">edit</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="mt-6 flex items-center justify-between">
<p className="text-sm text-slate-500 dark:text-slate-400">Showing <span className="font-bold text-slate-900 dark:text-slate-100">1 to 4</span> of 42 results</p>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary disabled:opacity-50" disabled>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="size-10 rounded-lg bg-primary text-white text-sm font-bold shadow-md shadow-primary/20">1</button>
<button className="size-10 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
<button className="size-10 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">3</button>
<button className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default RequirementManagementPage;
