import './FileManagerPage.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const FileManagerPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Header */}
<header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-8">
<div className="flex-1 max-w-xl">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Search for files, folders..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-[1px] bg-slate-200 dark:border-slate-800 mx-2"></div>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<p className="text-xs font-bold">Alex Rivera</p>
<p className="text-[10px] text-slate-500 uppercase tracking-tight">Admin</p>
</div>
<img alt="Close up portrait of a male professional" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARc5nTtc5guE_IIYzePducCWfcvXtceg9fgUbjYRPISW8ufVRY8AzY4XbXe7zhArMfba1vglGRmaN_-ogytgBPpzlhFYUddELu3Vcjp2K9d3h6so0E61etm-pRrPQYnnQypMeEfJ5tfG6pfdJo4y6i5pWbwnVfhqE96dQqsIM8RpPkFVh8UmlGAmhlkQiJOMRu4c6-QxS1AXvXtR1UEm4C4tnZsKis3pdJ2-SD4wYPA9aSTRpUlszvyi-y2I_3sliaRHiHIy8d-dg"/>
</div>
</div>
</header>
{/* Workspace Content */}
<div className="flex-1 overflow-y-auto p-8">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl font-bold text-slate-900 dark:text-white">All Files</h2>
<p className="text-slate-500 text-sm">Manage and organize your project documents</p>
</div>
<div className="flex items-center gap-3">
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-1 flex">
<button className="p-1.5 bg-slate-100 dark:bg-slate-800 text-primary rounded-md">
<span className="material-symbols-outlined block text-[20px]">format_list_bulleted</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md">
<span className="material-symbols-outlined block text-[20px]">grid_view</span>
</button>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">add</span>
<span>Upload File</span>
</button>
</div>
</div>
{/* Filters */}
<div className="flex flex-wrap gap-2 mb-6">
<button className="px-4 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-medium hover:border-primary transition-colors">Type: All</button>
<button className="px-4 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-medium hover:border-primary transition-colors">Date: Last 30 Days</button>
<button className="px-4 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-medium hover:border-primary transition-colors">Size: Any</button>
</div>
{/* File Table */}
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
<tr>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
<div className="flex items-center gap-2">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox"/>
                                            Name
                                        </div>
</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Size</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Version</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Uploaded By</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
{/* Row 1 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox"/>
<div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-500">
<span className="material-symbols-outlined">description</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Quarterly_Report_Q3.pdf</p>
<p className="text-xs text-slate-400">Modified 2h ago</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">2.4 MB</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">v3.2</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Portrait of a female professional with long hair" className="w-7 h-7 rounded-full"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX_3H5mdj_YU2qhbyzGaxRAWmUh0D_N_xaGWcvhu5JswP7kH2yoWU7o1rC0flh-4vpDexl4BDY4knKFZLNR_rheCkDAiMkCa_uBua1M6vC1Ge4gcVAfbXj4jFzuYhS0o2J_MFTlOfZgk8d6O5-EC8GPia4UfcKsU8pYMbctDcwid6yQlKsd1ctXK0uTk8knPvMhrnoX9VSqYg63jqO_J-q0A3vWkZpTLicoZO5NT7yOiMuphzVWW5AH2ArOZuBxao7vdO9NPa421Q"/>
<span className="text-xs font-medium text-slate-600 dark:text-slate-300">Sarah J.</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Download">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
<button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="History">
<span className="material-symbols-outlined text-[20px]">history</span>
</button>
<button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors" title="Delete">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox"/>
<div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center text-orange-500">
<span className="material-symbols-outlined">video_file</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Product_Launch_Video.mp4</p>
<p className="text-xs text-slate-400">Modified yesterday</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">125.8 MB</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">v1.0</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Portrait of a smiling professional man" className="w-7 h-7 rounded-full"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxCe8XRNPuFPmKKR8VNjl17vM51OmSwVCETVhUsh6jgCA2izWJaFl7gx3bq36du0-BTvl1vRYb74Nx7KOO7mC85a-x6flfHYS8kja1fkOYotmeXAmUFRTN7WTTUre3OL_hFN74wgUjadGh78N85OU2hBKRzw5tvLEImSEq_SK5QowWpA1z8Vaq5-D0fg9GzEkUhTW5l-A8f3gKDZOgpNnESARLMOD31Ol010rfwFBXZhQNxalqG-zCeNrPK1jgj5PKLqZx98I3Msk"/>
<span className="text-xs font-medium text-slate-600 dark:text-slate-300">James W.</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Download">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
<button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="History">
<span className="material-symbols-outlined text-[20px]">history</span>
</button>
<button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors" title="Delete">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox"/>
<div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-500">
<span className="material-symbols-outlined">brush</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Brand_Guidelines_2024.fig</p>
<p className="text-xs text-slate-400">Modified 3 days ago</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">12.1 MB</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">v2.5</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Portrait of a young female office professional" className="w-7 h-7 rounded-full"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW4Oq7SMektwObuXPLkTBbDMcBLaqYRCM0sHvDdjJukpQ1SUdq9XCAdUMWPPKnYTbyyXyjqXJQ7yJrDrDvCwaI94Nxglo8lOj9LS8h-nPKL17GmUHmEWRdoumMqpO0maa2b7Nn6jotN9f0-GQZbNOYpWQdGAQvJ6PwiZAtpeO7yJ_DVOZBdtT2RawIgncRQYtfMdmXd2aWqHM1v_rrM0dzXuusVgwPbsAOduXz5dwj4aBn8-dp3ORfk9fSf0oRQTAe7U3cNlNSPc4"/>
<span className="text-xs font-medium text-slate-600 dark:text-slate-300">Mila K.</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Download">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
<button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="History">
<span className="material-symbols-outlined text-[20px]">history</span>
</button>
<button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors" title="Delete">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox"/>
<div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center text-green-500">
<span className="material-symbols-outlined">table_view</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Annual_Budget_Plan.xlsx</p>
<p className="text-xs text-slate-400">Modified Oct 12, 2023</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">850 KB</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-wider">v4.1</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<img alt="Close up portrait of a male professional" className="w-7 h-7 rounded-full"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdaAM22rVQNO9cTx_NAcCdlRdnoTK5i9nhTV6ZZrIHnris2W33BWzHT0Uox8_8EEUck0BBlEuEHbfx4xt6E-CJoHNX6XYAd4pzVPG7oPGkStZQYHDSTCXtd7_HuI6jZ2oD6_AN9KH0jf4V_IQcMgmyFaBeDoMcqoQgZps8HzPDOdArP7CJS-nAUpc10bWima1M9Iilwfaf2KJQ8rUUajajOHJiZB-qf7kZFvp3i4oG-4Qe3k2_TrM8Q0GwECUBp3cwOBxUquip0Hw"/>
<span className="text-xs font-medium text-slate-600 dark:text-slate-300">Alex R.</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Download">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
<button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="History">
<span className="material-symbols-outlined text-[20px]">history</span>
</button>
<button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors" title="Delete">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Recent Folders (Grid View Example) */}
<div className="mt-12">
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Access Folders</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-primary text-[32px]">folder</span>
<button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<p className="font-bold text-sm">Project Phoenix</p>
<p className="text-xs text-slate-500">24 files â€¢ 1.2 GB</p>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-primary text-[32px]">folder</span>
<button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<p className="font-bold text-sm">Marketing Assets</p>
<p className="text-xs text-slate-500">142 files â€¢ 3.5 GB</p>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-primary text-[32px]">folder</span>
<button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<p className="font-bold text-sm">Client Invoices</p>
<p className="text-xs text-slate-500">89 files â€¢ 450 MB</p>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-primary text-[32px]">folder</span>
<button className="text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<p className="font-bold text-sm">Legal Templates</p>
<p className="text-xs text-slate-500">12 files â€¢ 15 MB</p>
</div>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default FileManagerPage;
