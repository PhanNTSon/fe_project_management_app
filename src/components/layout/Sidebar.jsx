import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col h-full">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary rounded-lg p-1.5 text-white flex items-center justify-center">
          <span className="material-symbols-outlined">layers</span>
        </div>
        <div>
          <h1 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">ReqMaster</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">Enterprise Edition</p>
        </div>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium">
          <span className="material-symbols-outlined text-[22px]">dashboard</span>
          <span className="text-sm">Dashboard</span>
        </Link>
        <Link to="/projects" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-[22px]">work</span>
          <span className="text-sm">Projects</span>
        </Link>
        <Link to="/requirements" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-[22px]">task_alt</span>
          <span className="text-sm">My Tasks</span>
        </Link>
        <Link to="/projects/members" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-[22px]">group</span>
          <span className="text-sm">Team Members</span>
        </Link>
        <div className="pt-4 pb-2 px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">System</div>
        <Link to="/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-[22px]">settings</span>
          <span className="text-sm">Settings</span>
        </Link>
        <Link to="/srs-editor" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined text-[22px]">help</span>
          <span className="text-sm">Documentation</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
          <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-tight">Storage usage</p>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-3/4"></div>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">75% of 10GB used</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
