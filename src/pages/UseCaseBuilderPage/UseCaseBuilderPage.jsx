import './UseCaseBuilderPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const UseCaseBuilderPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Breadcrumbs */}
<nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
<Link className="hover:text-primary" to="/projects/detail">Project Dashboard</Link>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<Link className="hover:text-primary" to="/requirements">Requirements</Link>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-slate-900 dark:text-slate-100 font-semibold">New Use Case</span>
</nav>
{/* Header Titles */}
<div className="mb-10">
<h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 mb-2">Create New Use Case</h1>
<p className="text-lg text-slate-500 dark:text-slate-400">Formalize system interactions, user paths, and edge cases for your SRS documentation.</p>
</div>
<form className="space-y-12 pb-24">
{/* Basic Information Section */}
<section className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
<span className="material-symbols-outlined text-primary">info</span>
<h2 className="text-xl font-bold">General Information</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Use Case Title</label>
<input className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" placeholder="e.g., Authenticate User via SSO" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Primary Actor</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">person</span>
<input className="w-full p-3 pl-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" placeholder="e.g., Registered User" type="text"/>
</div>
</div>
<div className="md:col-span-2 flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Description</label>
<textarea className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none" placeholder="Briefly describe the goal of this use case..." rows="3"></textarea>
</div>
</div>
</section>
{/* Pre/Post Conditions */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<section className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-amber-500">lock_open</span>
<h2 className="text-xl font-bold">Preconditions</h2>
</div>
<div className="space-y-4">
<div className="flex items-center gap-2">
<input className="flex-1 p-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm italic" type="text" value="System is online and database is reachable"/>
<button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined text-[20px]">delete</span></button>
</div>
<button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
<span className="material-symbols-outlined text-[18px]">add</span> Add Precondition
                        </button>
</div>
</section>
<section className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-green-500">task_alt</span>
<h2 className="text-xl font-bold">Postconditions</h2>
</div>
<div className="space-y-4">
<div className="flex items-center gap-2">
<input className="flex-1 p-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm" placeholder="e.g., User session is created" type="text"/>
<button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined text-[20px]">delete</span></button>
</div>
<button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
<span className="material-symbols-outlined text-[18px]">add</span> Add Postcondition
                        </button>
</div>
</section>
</div>
{/* Main Flow (Stepped) */}
<section className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex items-center justify-between mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">route</span>
<h2 className="text-xl font-bold">Main Success Scenario</h2>
</div>
<span className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Standard Path</span>
</div>
<div className="space-y-6 relative before:absolute before:left-[17px] before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
{/* Step 1 */}
<div className="relative flex gap-6 group">
<div className="z-10 w-9 h-9 flex-none rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">1</div>
<div className="flex-1 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800 group-hover:border-primary/30 transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-primary uppercase">Actor Action</span>
<button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-all">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
<textarea className="w-full bg-transparent border-none p-0 focus:ring-0 text-slate-700 dark:text-slate-300 resize-none">User navigates to the login page and selects 'SSO Login'.</textarea>
</div>
</div>
{/* Step 2 */}
<div className="relative flex gap-6 group">
<div className="z-10 w-9 h-9 flex-none rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">2</div>
<div className="flex-1 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800 group-hover:border-primary/30 transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-primary uppercase">System Response</span>
<button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-all">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
<textarea className="w-full bg-transparent border-none p-0 focus:ring-0 text-slate-700 dark:text-slate-300 resize-none">System redirects user to the configured Identity Provider (IdP) portal.</textarea>
</div>
</div>
{/* Step 3 (Placeholder) */}
<div className="relative flex gap-6">
<div className="z-10 w-9 h-9 flex-none rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-300 flex items-center justify-center font-bold">3</div>
<button className="flex-1 border-2 border-dashed border-slate-200 dark:border-slate-800 p-4 rounded-lg text-slate-400 hover:text-primary hover:border-primary/50 transition-all text-left font-medium">
                            Click to add the next step...
                        </button>
</div>
</div>
</section>
{/* Alternative Flows */}
<section className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex items-center justify-between mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-amber-600">call_split</span>
<h2 className="text-xl font-bold">Alternative / Exception Flows</h2>
</div>
<button className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold hover:bg-primary/20 transition-all">
                        + New Flow
                    </button>
</div>
<div className="space-y-4">
<details className="group border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden" open>
<summary className="flex items-center justify-between p-4 cursor-pointer bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-slate-400 group-open:rotate-90 transition-transform">chevron_right</span>
<span className="font-bold text-slate-700 dark:text-slate-200">2a. User Cancels SSO Login</span>
</div>
<span className="material-symbols-outlined text-slate-400 hover:text-red-500">delete</span>
</summary>
<div className="p-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
<div className="bg-white dark:bg-slate-900 p-3 rounded border border-slate-100 dark:border-slate-800 text-sm italic text-slate-500">
                                Occurs at Step 2 if user clicks "Cancel" on IdP page.
                            </div>
<div className="pl-4 border-l-2 border-primary/20 space-y-3">
<div className="text-sm font-medium">1. System redirects back to original login portal.</div>
<div className="text-sm font-medium">2. System displays informative message regarding cancellation.</div>
</div>
<button className="text-primary text-xs font-bold uppercase tracking-wider hover:underline">+ Add sub-step</button>
</div>
</details>
<details className="group border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-slate-400 group-open:rotate-90 transition-transform">chevron_right</span>
<span className="font-bold text-slate-700 dark:text-slate-200">2b. Invalid SSO Credentials</span>
</div>
<span className="material-symbols-outlined text-slate-400 hover:text-red-500">delete</span>
</summary>
<div className="p-6 border-t border-slate-100 dark:border-slate-800">
<p className="text-sm text-slate-500">Flow content hidden. Click to expand.</p>
</div>
</details>
</div>
</section>
</form>
      </div>
    </DashboardLayout>
  );
};

export default UseCaseBuilderPage;
