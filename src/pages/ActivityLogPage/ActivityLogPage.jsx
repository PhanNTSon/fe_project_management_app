import './ActivityLogPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const ActivityLogPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-8">
{/* Sidebar Navigation */}
<aside className="w-full md:w-64 flex flex-col gap-6">
<div className="flex flex-col gap-1">
<p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Navigation</p>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-sm font-medium">Dashboard</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/projects">
<span className="material-symbols-outlined">assignment</span>
<span className="text-sm font-medium">Projects</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors" to="/activity">
<span className="material-symbols-outlined">list_alt</span>
<span className="text-sm font-bold">Activity</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/projects/settings">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm font-medium">Settings</span>
</Link>
</div>
<div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
<p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Status</p>
<p className="text-sm text-slate-600 dark:text-slate-300 mb-3">Project is 85% complete</p>
<div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[85%]"></div>
</div>
</div>
</aside>
{/* Timeline Feed Content */}
<div className="flex-1 flex flex-col gap-6">
<div className="flex border-b border-slate-200 dark:border-slate-800 gap-8 mb-2">
<button className="border-b-2 border-primary text-primary pb-3 text-sm font-bold">All Activity</button>
<button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-3 text-sm font-medium transition-colors">Team Updates</button>
<button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-3 text-sm font-medium transition-colors">File Changes</button>
</div>
{/* Today Section */}
<section className="relative">
<h3 className="text-slate-900 dark:text-slate-100 text-base font-bold mb-6 flex items-center gap-2">
                            Today
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
</h3>
<div className="space-y-0">
{/* Timeline Item 1 */}
<div className="grid grid-cols-[48px_1fr] group">
<div className="flex flex-col items-center">
<div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 border-4 border-white dark:border-background-dark shadow-sm">
<span className="material-symbols-outlined text-[20px]">person_add</span>
</div>
<div className="w-[2px] bg-slate-200 dark:bg-slate-800 grow"></div>
</div>
<div className="pb-8 pt-1 px-4">
<div className="flex justify-between items-start mb-1">
<p className="text-slate-900 dark:text-slate-100 font-semibold text-sm">New member joined the project team</p>
<span className="text-xs text-slate-400 whitespace-nowrap">2h ago</span>
</div>
<div className="flex items-center gap-2 mt-2">
<div className="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
<img className="h-full w-full object-cover" alt="Professional headshot of Sarah J." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGy6cw5xuVZGVURMunAqFBGMarU8bZufzMufVkrErmjxm3EX2EmSF1k6HHz_mKxGCWLPvAw7ii8slO8OmD8ZXOEoKGsvLtK2ViPNTPUlIEY3QWpyJThPK-g-c9TnK4dFZN2TqxKN5WGwe9zPF73e7q_3L9Xy438vlVZE3taUkPMwDxWA6eghBELcTcGgZgIHnduyuKI7hpy7v2xirffHAxUsjVk1l60NasKXDKTQUjmLi5iLmmslkGdq7GdZa2p-1HheOEhISXzQE"/>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">
<span className="font-medium text-slate-700 dark:text-slate-200">Sarah Jenkins</span> joined as Senior Designer
                                        </p>
</div>
</div>
</div>
{/* Timeline Item 2 */}
<div className="grid grid-cols-[48px_1fr] group">
<div className="flex flex-col items-center">
<div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 border-4 border-white dark:border-background-dark shadow-sm">
<span className="material-symbols-outlined text-[20px]">edit_note</span>
</div>
<div className="w-[2px] bg-slate-200 dark:bg-slate-800 grow"></div>
</div>
<div className="pb-8 pt-1 px-4">
<div className="flex justify-between items-start mb-1">
<p className="text-slate-900 dark:text-slate-100 font-semibold text-sm">Requirement updated: 'API Gateway Integration'</p>
<span className="text-xs text-slate-400 whitespace-nowrap">5h ago</span>
</div>
<div className="flex items-center gap-2 mt-2">
<div className="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
<img className="h-full w-full object-cover" alt="Professional headshot of Alex R." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjHvN1cii03goKEENXiqDcRaxkVk7h1kxhB6SHVnQltVZ0ZVIKtSrwAg_Qhd5e41MXXTNueugTbAW1Rd1fJ_7VMfGgnsb6NLE9Hbdm2F3BKaZRr7pxRPnrGuX1LnUia-mFF5NU-tw-Moe-rcmZMtSE8ScaTHQh-VKD70gmtHPYjEK3PYLf6gaaaiYIP7YjBtJnsUtmjqg50QTW0EUcPvIxl7itjLLOpJuvnh2J3nM-XVKZ-jfH_hPLSLvd8yUl9fiQPSwXS5BvtyE"/>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">
<span className="font-medium text-slate-700 dark:text-slate-200">Alex Rivera</span> changed status to <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-bold uppercase">In Review</span>
</p>
</div>
<div className="mt-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800 text-xs text-slate-500 italic">
                                        "Updated the endpoint security protocols to reflect the new OAuth2 flow..."
                                    </div>
</div>
</div>
{/* Timeline Item 3 */}
<div className="grid grid-cols-[48px_1fr] group">
<div className="flex flex-col items-center">
<div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 border-4 border-white dark:border-background-dark shadow-sm">
<span className="material-symbols-outlined text-[20px]">description</span>
</div>
<div className="w-[2px] bg-slate-200 dark:bg-slate-800 grow"></div>
</div>
<div className="pb-8 pt-1 px-4">
<div className="flex justify-between items-start mb-1">
<p className="text-slate-900 dark:text-slate-100 font-semibold text-sm">Document edited: 'Project Proposal V2'</p>
<span className="text-xs text-slate-400 whitespace-nowrap">8h ago</span>
</div>
<div className="flex items-center gap-2 mt-2">
<div className="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
<img className="h-full w-full object-cover" alt="Professional headshot of Maria K." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDgjR1tgr3j2YO2mLwe6XKWqXwuMtMCFsEdTBdWk1AcGRUcgagIUeoqd6bS4buTFCmolfOj7WA1CU6TaIoW-Lf3-ZkaFYWZvXO4en-9VGRYlkJFbMS3_CMqpkDFO1_DP1PA7f6nboSPG88CMMno8gR9IphLARwGLspBgQDOWt0jxQwBEvCnLtG4P562XVAfq2CpqikO9w3iWPlsTUHmHfb1ewXqUeQFD1d5D3iy1A2g-n7598I9FL94yz5PJt9zmc28m5ovvZh5e0"/>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">
<span className="font-medium text-slate-700 dark:text-slate-200">Maria Kovacs</span> added 4 comments and 2 pages
                                        </p>
</div>
</div>
</div>
</div>
</section>
{/* Yesterday Section */}
<section className="relative">
<h3 className="text-slate-900 dark:text-slate-100 text-base font-bold mb-6 flex items-center gap-2">
                            Yesterday
                        </h3>
<div className="space-y-0">
{/* Timeline Item 4 */}
<div className="grid grid-cols-[48px_1fr] group">
<div className="flex flex-col items-center">
<div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 border-4 border-white dark:border-background-dark shadow-sm">
<span className="material-symbols-outlined text-[20px]">schema</span>
</div>
<div className="w-[2px] bg-slate-200 dark:bg-slate-800 grow"></div>
</div>
<div className="pb-8 pt-1 px-4">
<div className="flex justify-between items-start mb-1">
<p className="text-slate-900 dark:text-slate-100 font-semibold text-sm">Diagram added: 'System Architecture v1.0'</p>
<span className="text-xs text-slate-400 whitespace-nowrap">Yesterday</span>
</div>
<div className="flex items-center gap-2 mt-2 mb-4">
<div className="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
<img className="h-full w-full object-cover" alt="Professional headshot of John D." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ5v2yNNvTpMoG_u-PL9KCiVAsLJXYOtWT324_KTgcUJ3JBrePXTP1276FyCFg5mG9r2aQWeV9VHzT3f1QJj2JRmlshHvV4o-cm3ydkuP_ppP4H63KSwkAHj-W8fcyWDfVuowvrs1-zzyBOvtqVUpI21tnK2apiZeuLzyyvnREVEj_rdaF_TCfzgUp_7Pf3ZScUzs5AkcDkjUaTRRSs9urTbhKNC1tx0mNOpmxPX5mCZDWRGmeQV5MdSWQZ-t7hkZR4-z-akRt1CY"/>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400">
<span className="font-medium text-slate-700 dark:text-slate-200">John Davis</span> uploaded a new asset
                                        </p>
</div>
<div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 group-hover:shadow-md transition-shadow">
<div className="aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
<div className="w-full h-full bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center p-4">
<div className="w-full h-full border-2 border-dashed border-primary/20 rounded-lg flex flex-col items-center justify-center">
<span className="material-symbols-outlined text-primary/40 text-4xl mb-2">account_tree</span>
<span className="text-xs font-semibold text-primary/60">Architecture_Diagram.svg</span>
</div>
</div>
</div>
<div className="p-3 bg-white dark:bg-slate-900 flex justify-between items-center">
<span className="text-xs font-medium text-slate-500">2.4 MB â€¢ SVG Vector Diagram</span>
<button className="text-primary hover:underline text-xs font-bold">Download</button>
</div>
</div>
</div>
</div>
{/* Timeline Item 5 (End) */}
<div className="grid grid-cols-[48px_1fr] group">
<div className="flex flex-col items-center">
<div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 border-4 border-white dark:border-background-dark shadow-sm">
<span className="material-symbols-outlined text-[20px]">task_alt</span>
</div>
</div>
<div className="pt-1 px-4">
<div className="flex justify-between items-start mb-1">
<p className="text-slate-900 dark:text-slate-100 font-semibold text-sm">Milestone reached: 'Discovery Phase'</p>
<span className="text-xs text-slate-400 whitespace-nowrap">Yesterday</span>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Project phase successfully completed and approved by stakeholder.</p>
</div>
</div>
</div>
</section>
<div className="flex justify-center pt-10">
<button className="px-6 py-2 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            Load older activity
                        </button>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default ActivityLogPage;
