import './NotificationsPage.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const NotificationsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8"><div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<header className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-5 gap-4">
<div className="flex items-center gap-3">
<div className="bg-primary/10 p-2 rounded-lg">
<span className="material-symbols-outlined text-primary text-2xl">notifications</span>
</div>
<div>
<h1 className="text-xl font-bold tracking-tight">Notifications</h1>
<p className="text-sm text-slate-500 dark:text-slate-400">Manage your latest activity and alerts</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-xl">settings</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-xl">done_all</span>
</button>
</div>
</header>
<div className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
<nav className="flex px-6 gap-8">
<Link className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-4 font-semibold text-sm" to="#">
                        All <span className="ml-1.5 bg-primary/10 px-2 py-0.5 rounded-full text-[10px]">12</span>
</Link>
<Link className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pb-3 pt-4 font-medium text-sm transition-colors" to="#">
                        Unread <span className="ml-1.5 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded-full text-[10px]">3</span>
</Link>
<Link className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pb-3 pt-4 font-medium text-sm transition-colors" to="#">
                        Archived
                    </Link>
</nav>
</div>
<div className="divide-y divide-slate-100 dark:divide-slate-800">
<div className="group flex flex-col md:flex-row gap-4 bg-white dark:bg-slate-900 px-6 py-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
<div className="flex items-start gap-4 flex-1">
<div className="relative shrink-0">
<div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-800 bg-cover bg-center border border-slate-200 dark:border-slate-700" alt="Professional portrait of a female project manager" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8j0sKxHJxxAuYl9Uytww4dk16qOPWq8knNV0IqehuJSKZQxK634xHrJ3k_K6Iga2GbgMEPdkycbUKL9MyS5Vvc4KifTP0qJ7t4JlS7q6jM1xOw2fIeZmknMlCyMxL3sqnnmwdFl60KCG7ErpAXQDYhu3pJg-3AtChvTVGuM9Elp3EkEXS_z6KOXpK0KZZfEaZHwJlto3X6j_4wsK7ky_N-psCsxNsc1KXjnKTMDg4CnW6HhusV2Xrqtmzfb_5svP4H-2wCkc88hs")`}}></div>
<div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-1 border-2 border-white dark:border-slate-900">
<span className="material-symbols-outlined text-[14px] block">group_add</span>
</div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<p className="text-slate-900 dark:text-slate-100 font-semibold text-sm md:text-base">You were invited to project</p>
<span className="h-2 w-2 rounded-full bg-primary"></span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">2 minutes ago</p>
<p className="text-slate-600 dark:text-slate-300 text-sm mt-2 font-medium">Sarah Jenkins <span className="font-normal text-slate-500">invited you to collaborate on</span> 'Q4 Strategy'</p>
</div>
</div>
<div className="flex items-center gap-3 ml-16 md:ml-0 shrink-0">
<button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
                            Accept
                        </button>
<button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            Decline
                        </button>
</div>
</div>
<div className="group flex flex-col md:flex-row gap-4 bg-white dark:bg-slate-900 px-6 py-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
<div className="flex items-start gap-4 flex-1">
<div className="shrink-0">
<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">description</span>
</div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<p className="text-slate-900 dark:text-slate-100 font-semibold text-sm md:text-base">Requirement updated</p>
<span className="h-2 w-2 rounded-full bg-primary"></span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">1 hour ago</p>
<p className="text-slate-600 dark:text-slate-300 text-sm mt-2">The specification for <span className="font-semibold text-slate-800 dark:text-slate-200">'User Auth Flow'</span> was updated by the Product Team.</p>
</div>
</div>
<div className="flex items-center gap-2 ml-16 md:ml-0 shrink-0">
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<div className="group flex flex-col md:flex-row gap-4 bg-white dark:bg-slate-900 px-6 py-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<div className="flex items-start gap-4 flex-1">
<div className="relative shrink-0">
<div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-800 bg-cover bg-center border border-slate-200 dark:border-slate-700" alt="Avatar of a designer with glasses" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJph6xeVEnJxbYEtvxTwtcHfajbuVL1R0UD0YEKIwu5zNRcAAUQBlxckERbS7hfTyhfTEgBtW-jcScyCIvvOthkw8fODNAf9fOt95v0AT8bw5K1udoLrH4Dp0bFKLrIbeOiS5SJIc4htXkQ0ArbuRKdncijAVnkb7nkLp358RhlM94vkXE_scqAETg6WXrV-XyLKR5etfxJtCm1hgEcNwZvfYIodnltOCt0qxwNCr9PJJxljJeBpqp5RyD4867WsT1Zk5o23xDrGQ")`}}></div>
<div className="absolute -bottom-1 -right-1 bg-slate-600 text-white rounded-full p-1 border-2 border-white dark:border-slate-900">
<span className="material-symbols-outlined text-[14px] block">chat_bubble</span>
</div>
</div>
<div className="flex flex-col">
<p className="text-slate-900 dark:text-slate-100 font-semibold text-sm md:text-base">Comment added</p>
<p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">3 hours ago</p>
<div className="mt-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
<p className="text-slate-700 dark:text-slate-300 text-sm italic">"Let's review the final designs tomorrow morning before the sprint planning starts."</p>
<p className="text-slate-500 dark:text-slate-400 text-[11px] mt-2 font-medium">â€” David Miller</p>
</div>
</div>
</div>
<div className="flex items-center gap-2 ml-16 md:ml-0 shrink-0 self-start md:self-center">
<button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            Reply
                        </button>
</div>
</div>
<div className="group flex flex-col md:flex-row gap-4 bg-white dark:bg-slate-900 px-6 py-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<div className="flex items-start gap-4 flex-1">
<div className="shrink-0">
<div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
<span className="material-symbols-outlined text-2xl">check_circle</span>
</div>
</div>
<div className="flex flex-col">
<p className="text-slate-900 dark:text-slate-100 font-semibold text-sm md:text-base">Task completed</p>
<p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Yesterday at 4:30 PM</p>
<p className="text-slate-600 dark:text-slate-300 text-sm mt-2">The task <span className="underline decoration-green-400/50">Update API Documentation</span> has been marked as complete.</p>
</div>
</div>
<div className="flex items-center gap-2 ml-16 md:ml-0 shrink-0">
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">archive</span>
</button>
</div>
</div>
</div>
<footer className="bg-slate-50 dark:bg-slate-900/80 px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex justify-center">
<button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                    Load older notifications
                    <span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</footer>
</div></div>
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;

