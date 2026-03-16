import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const DashboardHeader = () => {
  const { user, logoutUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/login');
  };

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
            <p className="text-sm font-semibold text-slate-900 dark:text-white leading-none">
              {user?.fullName || user?.username || 'User'}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              {user?.email || 'Member'}
            </p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/20 border-2 border-white dark:border-slate-800 overflow-hidden flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">person</span>
          </div>
        </Link>
        {/* Nút Logout */}
        <button
          onClick={handleLogout}
          title="Đăng xuất"
          className="p-2 text-slate-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">logout</span>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
