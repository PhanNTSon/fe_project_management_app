import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-8 z-10 shrink-0">
      <div className="flex items-center flex-1 max-w-md">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
          <input 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-500 transition-all focus:outline-none" 
            placeholder="Search requirements, projects..." 
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/notifications" className="p-2 text-slate-500 hover:bg-slate-100 dark:bg-slate-800 rounded-lg relative transition-colors">
          <span className="material-symbols-outlined text-[24px]">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </Link>
        <Link to="/comments" className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
          <span className="material-symbols-outlined text-[24px]">chat_bubble</span>
        </Link>
        <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1"></div>
        <Link to="/profile" className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900 dark:text-white leading-none">Alex Rivera</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Product Owner</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800 overflow-hidden">
            <img 
               className="h-full w-full object-cover" 
               alt="User profile avatar" 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ6yG_dzaPZUsK2WP4v-foZIG_28pFNjK9XMXFF0S0ubEYJd9zvPwIZR8PqiblLn785__NOHk_DaZx3GMGHKn8nfSk1L5unIwgO1iApzOZm6jexFWGIFbu4bz3QJFaz66Kw2F8q139h0JUHy85ynV0wb4QLXchZ9KjYnP2OP-RHN1r6bcNQ2naHjZpp-ThCSsYT9NA0PbpEICe0OXWJ0vnOT-6O-0cCxJ7z0LbcCLLzUsT-g6xr9xx3ib2Bge6NgGp2tGc2HPhlEo"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default DashboardHeader;
