import './DiagramEditorPage.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const DiagramEditorPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <aside className="w-[var(--sidebar-width)] sidebar-transition flex flex-col border-r border-slate-100 dark:border-slate-800/50 bg-chrome-light dark:bg-chrome-dark shrink-0 z-20 overflow-hidden" id="left-sidebar">
<div className="p-4 border-b border-slate-50 dark:border-slate-800/30">
<div className="flex items-center justify-between mb-3">
<h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Navigator</h3>
<button className="text-slate-400 hover:text-accent transition-colors">
<span className="material-symbols-outlined text-base">create_new_folder</span>
</button>
</div>
<div className="relative">
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-slate-300 text-base">search</span>
<input className="w-full h-7 bg-slate-50 dark:bg-slate-900/50 border-transparent focus:border-slate-200 dark:focus:border-slate-700 rounded text-[11px] pl-7 pr-2 placeholder:text-slate-400" placeholder="Search diagrams..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto py-2">
<div className="px-2 space-y-0.5">
<div className="flex items-center gap-2 px-2 py-1.5 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 rounded cursor-pointer border-l-2 border-accent">
<span className="material-symbols-outlined text-base opacity-60">schema</span>
<span className="text-[12px] font-medium truncate">System_Architecture</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/30 rounded cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-base opacity-40 group-hover:opacity-100">flowsheet</span>
<span className="text-[12px] truncate">User_Workflows</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/30 rounded cursor-pointer transition-colors group">
<span className="material-symbols-outlined text-base opacity-40 group-hover:opacity-100">database</span>
<span className="text-[12px] truncate">Database_Schema</span>
</div>
</div>
<div className="mt-8 px-4">
<h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Active Collaborators</h3>
<div className="space-y-3">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[9px] text-slate-600 dark:text-slate-300 font-bold">JD</div>
<span className="text-[11px] text-slate-500">John Doe</span>
<span className="w-1 h-1 rounded-full bg-green-500 ml-auto"></span>
</div>
<div className="flex items-center gap-2 opacity-50">
<div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[9px] text-slate-600 dark:text-slate-300 font-bold">SM</div>
<span className="text-[11px] text-slate-500">Sarah Meyer</span>
</div>
</div>
</div>
</div>
<div className="p-3 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
<span className="text-[9px] font-bold text-slate-400 uppercase">12.4 MB Used</span>
<div className="w-20 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="w-1/4 h-full bg-slate-400"></div>
</div>
</div>
</aside>
<section className="flex-1 flex flex-col bg-white dark:bg-[#1a1a1a] relative">
<div className="absolute top-4 left-0 z-40">
<Link className="flex items-center justify-center w-6 h-10 bg-chrome-light dark:bg-chrome-dark border border-l-0 border-slate-200 dark:border-slate-800 rounded-r shadow-sm text-slate-400 hover:text-accent transition-colors" to="#left-sidebar-close" id="left-sidebar-open" title="Toggle Explorer">
<span className="material-symbols-outlined text-lg">dock_to_left</span>
</Link>
</div>
<div className="absolute top-4 right-0 z-40">
<Link className="flex items-center justify-center w-6 h-10 bg-chrome-light dark:bg-chrome-dark border border-r-0 border-slate-200 dark:border-slate-800 rounded-l shadow-sm text-slate-400 hover:text-accent transition-colors" to="#right-sidebar-close" id="right-sidebar-open" title="Toggle Metadata">
<span className="material-symbols-outlined text-lg">dock_to_right</span>
</Link>
</div>
<div className="flex-1 relative">
<iframe className="w-full h-full border-none" src="https://embed.diagrams.net/?embed=1&amp;ui=min&amp;spin=1&amp;modified=unsavedChanges&amp;proto=json" title="Draw.io Editor"></iframe>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
<div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-full shadow-xl pointer-events-auto flex items-center gap-4">
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400"><span className="material-symbols-outlined text-lg">remove</span></button>
<span className="text-[11px] font-bold w-10 text-center">100%</span>
<button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400"><span className="material-symbols-outlined text-lg">add</span></button>
</div>
<div className="w-px h-4 bg-slate-200 dark:bg-slate-800"></div>
<button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400"><span className="material-symbols-outlined text-lg">fullscreen</span></button>
<button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400"><span className="material-symbols-outlined text-lg">center_focus_weak</span></button>
</div>
</div>
</div>
</section>
<aside className="w-72 sidebar-transition flex flex-col border-l border-slate-100 dark:border-slate-800/50 bg-chrome-light dark:bg-chrome-dark shrink-0 z-20 overflow-hidden" id="right-sidebar">
<div className="flex border-b border-slate-100 dark:border-slate-800/50">
<button className="flex-1 py-2.5 text-[10px] font-bold uppercase tracking-widest text-accent border-b border-accent">History</button>
<button className="flex-1 py-2.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">Props</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-8">
<section>
<div className="flex items-center justify-between mb-4">
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Version Control</h4>
<span className="material-symbols-outlined text-slate-300 text-sm">history</span>
</div>
<div className="space-y-5">
<div className="relative pl-4 border-l border-accent">
<div className="absolute -left-[3px] top-0 w-1.5 h-1.5 rounded-full bg-accent"></div>
<p className="text-[11px] font-bold text-slate-900 dark:text-slate-100">v2.4.1 (Current)</p>
<p className="text-[10px] text-slate-400 mt-0.5">Today, 2:45 PM â€¢ John Doe</p>
<p className="text-[10px] mt-1.5 text-slate-500 line-clamp-2 italic">"Optimized boundary logic for payment gateways"</p>
</div>
<div className="relative pl-4 border-l border-slate-200 dark:border-slate-800">
<div className="absolute -left-[3.5px] top-0 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
<p className="text-[11px] font-medium text-slate-500">v2.4.0</p>
<p className="text-[10px] text-slate-400 mt-0.5">Yesterday, 4:12 PM</p>
<button className="text-[9px] text-accent font-bold mt-1 uppercase tracking-tighter hover:underline">Restore</button>
</div>
</div>
<button className="w-full mt-6 py-1.5 text-[10px] font-bold text-slate-400 border border-slate-100 dark:border-slate-800 rounded hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors uppercase tracking-widest">Full History</button>
</section>
<section>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Diagram Metadata</h4>
<div className="space-y-4">
<div>
<label className="text-[9px] font-bold text-slate-400 uppercase mb-1.5 block">Description</label>
<textarea className="w-full text-[11px] bg-slate-50 dark:bg-slate-900/50 border-transparent rounded p-2 text-slate-600 dark:text-slate-400 focus:ring-0" placeholder="Summary..." rows="2"></textarea>
</div>
<div>
<label className="text-[9px] font-bold text-slate-400 uppercase mb-1.5 block">Tags</label>
<div className="flex flex-wrap gap-1">
<span className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-[9px] font-medium rounded text-slate-500 border border-transparent">Core</span>
<span className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-[9px] font-medium rounded text-slate-500 border border-transparent">API</span>
<button className="text-accent text-[10px] ml-1 hover:underline">Edit</button>
</div>
</div>
</div>
</section>
<section>
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Linked Sync</h4>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded bg-slate-50/50 dark:bg-slate-900/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-blue-400 text-base">description</span>
<span className="text-[11px] font-medium">Confluence</span>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
</div>
</div>
</section>
</div>
<div className="p-4 bg-chrome-light dark:bg-chrome-dark border-t border-slate-100 dark:border-slate-800/50">
<button className="w-full h-8 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-bold rounded uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-base">commit</span>
                Commit Version
            </button>
</div>
</aside>
      </div>
    </DashboardLayout>
  );
};

export default DiagramEditorPage;
