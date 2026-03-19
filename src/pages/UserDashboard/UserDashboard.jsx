import './UserDashboard.css';
import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const UserDashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center h-full pt-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Xin chào người dùng!
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Chào mừng quay trở lại với ReqMaster.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;

