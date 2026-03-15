import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const TopNavBar = () => {
  const { user, authLoading } = useContext(AppContext);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-solid border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-4 text-primary">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">account_tree</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">ReqMaster</h2>
        </Link>
        <div className="hidden md:flex flex-1 justify-center gap-8">
          <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/features">Features</Link>
          <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/solutions">Solutions</Link>
          <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/pricing">Pricing</Link>
        </div>
        <div className="flex items-center gap-3">
          {!authLoading && (
            user ? (
              /* Đã login: hiện nút vào Dashboard */
              <Link
                to="/dashboard"
                className="flex items-center gap-2 min-w-[120px] cursor-pointer justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold transition-all hover:opacity-90 shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined text-[18px]">dashboard</span>
                <span>Dashboard</span>
              </Link>
            ) : (
              /* Chưa login: hiện Login + Get Started */
              <>
                <Link
                  to="/login"
                  className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold transition-all hover:bg-slate-200"
                >
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold transition-all hover:opacity-90 shadow-lg shadow-primary/20"
                >
                  <span>Get Started</span>
                </Link>
              </>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;
