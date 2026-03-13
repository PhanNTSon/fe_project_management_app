import './ProjectDetailOverviewPage.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const ProjectDetailOverviewPage = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Top Navbar */}
<header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 flex items-center justify-between z-10">
<div className="flex items-center gap-4">
<div className="flex flex-col">
<div className="flex items-center gap-2 text-xs font-medium text-slate-400">
<span>Workspace</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span>Projects</span>
</div>
<h2 className="text-lg font-bold leading-tight">Mobile App Redesign</h2>
</div>
</div>
<div className="flex items-center gap-6">
<div className="relative w-72">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-1.5 rounded-lg border-none bg-slate-100 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Search tasks, docs..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
<span className="material-symbols-outlined">help</span>
</button>
</div>
<div className="h-8 w-[1px] bg-slate-200 dark:border-slate-800"></div>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold overflow-hidden">
<img className="w-full h-full object-cover" alt="User profile avatar icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoOWVe7Y3mQj8lmGNBHiIcZFTXAeKXR7XSTWkEywIthiUw0UJDJ96BElJoSwCbA_eAlIa-WhujsAm9Ypkr2JfdZljYSUjIyTx0RonAWNCOXoa33ESG3l6a9MJw0ZjjmEmruGrb-hHelWhMueggwJRlX1LP2PaIOR_HcLiissT4wJf-xXbNAhV_1iHAZJgWBid3eL02iJg0C63DkKyO1GO3L3339y8RMSh_Zllz_kMeXXpFl64QTzA31zObT3Ya2KDhfj9QLwzUXco"/>
</div>
</div>
</div>
</header>
{/* Workspace Area */}
<div className="flex-grow overflow-y-auto p-8">
<div className="max-w-6xl mx-auto space-y-8">
{/* Page Title & Actions */}
<div className="flex justify-between items-end">
<div className="space-y-1">
<h3 className="text-3xl font-black tracking-tight">Project Overview</h3>
<p className="text-slate-500 dark:text-slate-400">Real-time status and key performance indicators for the redesign phase.</p>
</div>
<div className="flex gap-3">
<button onClick={() => navigate('/projects/settings')} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold text-sm">
                            Edit Project
                        </button>
<button onClick={() => navigate('/export')} className="px-4 py-2 rounded-lg bg-primary text-white font-semibold text-sm">
                            Share Report
                        </button>
</div>
</div>
{/* Stats Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
<p className="text-sm font-medium text-slate-500">Completion</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-bold">68%</span>
<span className="text-emerald-500 text-sm font-semibold">+5%</span>
</div>
<div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-2">
<div className="bg-primary h-full w-[68%]"></div>
</div>
</div>
<div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
<p className="text-sm font-medium text-slate-500">Tasks Open</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-bold">24</span>
<span className="text-amber-500 text-sm font-semibold">-2%</span>
</div>
<p className="text-xs text-slate-400">4 urgent priorities</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
<p className="text-sm font-medium text-slate-500">Team Velocity</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-bold">42 pts</span>
<span className="text-emerald-500 text-sm font-semibold">+12%</span>
</div>
<p className="text-xs text-slate-400">Above sprint average</p>
</div>
<div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
<p className="text-sm font-medium text-slate-500">Days Remaining</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-bold">12</span>
<span className="text-slate-400 text-sm font-semibold">0%</span>
</div>
<p className="text-xs text-slate-400">Due Nov 30, 2023</p>
</div>
</div>
{/* Main Content Split */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Project Summary & Activity */}
<div className="lg:col-span-2 space-y-6">
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
<h4 className="font-bold text-lg mb-4">Project Summary</h4>
<div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
<p>This project aims to revitalize the mobile experience for our core consumer base. We are focusing on improving onboarding conversion by 25% and implementing the new brand guidelines (v2.4.0).</p>
<div className="grid grid-cols-2 gap-4 mt-4">
<div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
<p className="text-slate-900 dark:text-slate-100 font-medium">In Development</p>
</div>
<div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Lead Designer</p>
<p className="text-slate-900 dark:text-slate-100 font-medium">Alex Rivera</p>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
<h4 className="font-bold text-lg">Active Tasks</h4>
<Link className="text-sm font-semibold text-primary" to="#">View all</Link>
</div>
<div className="divide-y divide-slate-100 dark:divide-slate-800">
<div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">palette</span>
</div>
<div>
<p className="text-sm font-semibold">Refine color palette for Dark Mode</p>
<p className="text-xs text-slate-400">Design System â€¢ Due tomorrow</p>
</div>
</div>
<div className="flex -space-x-2">
<img className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900" alt="Team member profile picture small" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASjvebGVZJ2051YWRQs4CCRfl0sYcexQzyGO9E_yeWZCRA8t2qxz-bWOUjy8ZewSX5JfrycpVaI6YUfsIVAuyDlVlp_9zoYwE_Dp523dlRr47JhK8Cl7o0ep4vSCpy6BSuFPiQaD90vIS5M_gIMwlpyW-oEB9LC-uErj397rLqETsTiS0bCVuuFCO1qz4Y2jZQjEHPsqjLkqY53DJInF7DzVjGKoI2d0gAzoxe1QIbm8M4txoOMHovPU1QffqiG2NP3-PXiEXEhcs"/>
<img className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900" alt="Team member profile picture small" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtF3Y_h34tjA3fgzUb_Wz0vLHeBdjqF-arspkdPIfBZb9VDb6LHaM1DEu6BpX_u9CiNntKb5q6Lo1uoSlevoXXB67DskmwFXzbLiKW0HyVWgv6ST5XGtG5KrQNvANchmuRMl23O6kBJB-blXt00PhfOgjqwHJ0xY4hzHiY_Tmk_6cgvfZLxWnM0zBiIb9M6fuSyf6FZKTDNFJ2bksC7jgb3gGJbx3xtRRaJEd_PgkZz4Xr4SeDsGl_oN8LTKhfHXInVDUCADVzCpk"/>
</div>
</div>
<div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">code</span>
</div>
<div>
<p className="text-sm font-semibold">Implement biometric authentication flow</p>
<p className="text-xs text-slate-400">Engineering â€¢ Due in 3 days</p>
</div>
</div>
<div className="flex -space-x-2">
<img className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900" alt="Team member profile picture small" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfrE1HruHs7gAxlT5xiAOXBZw66YkkrmSvZ6PBnNO1EIR27H382GHNGAJp-67NDPnEmgEVJwL7rIbIewV2aIIQIvl0D89_HWWuBlRY__3milx4xu0MPR7vdztfnDlU92XcdLtREchU40rYn8RGk9poPVZIHfpNsdMl44hRdnQjGb9V6fNII3S4Rr0ka03vmo32E7wg2h_yxLkpYFFVI3sNQm3rTTB4TqdX74uI9m7kuvrv_w7DwUVTozMKyYRNbTK38rDiqdhtsiI"/>
</div>
</div>
<div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">rule</span>
</div>
<div>
<p className="text-sm font-semibold">QA testing for version 2.4.0-beta</p>
<p className="text-xs text-slate-400">Testing â€¢ Due in 5 days</p>
</div>
</div>
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] border-2 border-white dark:border-slate-900">+3</div>
</div>
</div>
</div>
</div>
</div>
{/* Side Widgets */}
<div className="space-y-6">
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
<h4 className="font-bold text-lg mb-4">Team Status</h4>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full" alt="Team member avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6OfAgnTK7FQte5nRgnZfFFgG31vW8fACollu3trnIVri1DQUidHR91Z66GKat9CvtNrZhiDmDv0oIAT_Lif51tYGimhJX2WPD02VuyzSvPHH5v97KRuqFbaoY9lLTXds6xbIO6eu_EQfjx2DAvg8_iB-HDCjE73OONMltSF3MwyIH0Q6TZchjztU68wOh_otnPt4f_isqNAPrCKGH6EmIN_iA9e03WTwvJWnpbaIrcHRT6BYYvi2FuBA1zecl0f6Rx_91rFJMBmc"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
</div>
<div>
<p className="text-sm font-semibold">Sarah Jenkins</p>
<p className="text-xs text-slate-500">Active now</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full" alt="Team member avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRMeCk3WwYQ-v_djN1k7LIylo8W28uIC8tKjCcVz3M1gQJ8l8Zqee8FyB4hE772Um3ci7Rri-_3WfNYkhEXybINnZI8kHTdjOfO1KsTETaCaCE_gAU7JgN40vxarcabcp7RR8gwO0-yMUP-EfEMhS53JItYAU-MKb-rUAdeUM0kQYLUtdOYJ7uf0I-r3t2d8rkYQucAmiHbMl90ndkMJmi1-TQLRwk82CJbCzM0RaLHHAvCfwWCmpYT5RPosenIhYKn0aaVTFfbAo"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
</div>
<div>
<p className="text-sm font-semibold">Mike Chen</p>
<p className="text-xs text-slate-500">Active now</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full opacity-50" alt="Team member avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIyrTlCOi9uEbaZGjpldLQzSzgOZkMa9MAvc4EYu5FccDi0BXq6Bx0zbpjfbwPgmFSTi0N09JrjepQX2KolrPy92VboTqPVV46-Y-2uJcXqhqF61AtEt94wTge8dJg4OucT4VC9u8PyTeKWlaLj_K8RmJCvDKKJzCebIIh_vHcAfg5E0GSS8kMQKCRYvbJH_3pEA7Lh2TEtveoox-mm1fmCMGSHt8uGPRlxJuLbuSYxl3zMi-_lKJXlYhS3umTOmu-B3l9nEmYZ4Q"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-300 border-2 border-white dark:border-slate-900 rounded-full"></div>
</div>
<div>
<p className="text-sm font-semibold">Jessica Alba</p>
<p className="text-xs text-slate-500">Away - 2h ago</p>
</div>
</div>
</div>
<button onClick={() => navigate('/invite')} className="w-full mt-6 py-2 border border-slate-100 dark:border-slate-800 rounded-lg text-sm font-semibold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                Invite Members
                            </button>
</div>
<div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-6 text-white space-y-4">
<div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined">rocket_launch</span>
</div>
<div>
<h4 className="font-bold">Next Milestone</h4>
<p className="text-sm text-blue-100">Beta Launch (Phase 2)</p>
</div>
<div className="space-y-1">
<div className="flex justify-between text-xs font-semibold">
<span>Progress</span>
<span>84%</span>
</div>
<div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
<div className="bg-white h-full w-[84%]"></div>
</div>
</div>
<p className="text-xs text-blue-100 italic">"On track for scheduled release"</p>
</div>
</div>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectDetailOverviewPage;
