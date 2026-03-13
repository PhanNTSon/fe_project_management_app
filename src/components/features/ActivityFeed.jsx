import React from 'react';

const ActivityItem = ({ icon, iconColorClass, iconBgColorClass, userName, action, targetName, time }) => {
  return (
    <div className="relative pl-8 before:content-[''] before:absolute before:left-[11px] before:top-8 before:bottom-[-20px] before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800 last:before:hidden">
      <div className={`absolute left-0 top-0 h-6 w-6 rounded-full flex items-center justify-center z-10 ${iconColorClass} ${iconBgColorClass}`}>
        <span className="material-symbols-outlined text-[14px] font-bold">{icon}</span>
      </div>
      <div>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          <span className="font-bold text-slate-900 dark:text-white">{userName}</span>{' '}
          {action}{' '}
          <span className="text-primary font-medium italic">{targetName}</span>
        </p>
        <p className="text-[11px] text-slate-400 mt-1">{time}</p>
      </div>
    </div>
  );
};

const ActivityFeed = ({ activities = [] }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col shadow-sm h-full">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Recent Activity</h3>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <ActivityItem 
            key={index}
            icon={activity.icon}
            iconColorClass={activity.iconColorClass}
            iconBgColorClass={activity.iconBgColorClass}
            userName={activity.userName}
            action={activity.action}
            targetName={activity.targetName}
            time={activity.time}
          />
        ))}
      </div>
      <button className="mt-8 py-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors border-t border-slate-100 dark:border-slate-800 w-full text-center">
        View Full Audit Log
      </button>
    </div>
  );
};

export default ActivityFeed;
