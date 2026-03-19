import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col h-full">
      <div className="p-6 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-primary rounded-lg p-1.5 text-white flex items-center justify-center group-hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined">layers</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">ReqMaster</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Enterprise Edition</p>
          </div>
        </Link>
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
      </nav>
    </aside>
  );
};

export default Sidebar;
