import './ProjectSettingsPage.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const ProjectSettingsPage = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <aside className="w-full shrink-0 md:w-64 lg:w-72">
<nav className="flex flex-col gap-1">
<Link className="flex items-center gap-3 rounded-lg bg-primary/10 px-4 py-3 text-primary transition-all" to="#">
<span className="material-symbols-outlined">info</span>
<span className="font-semibold text-sm">General</span>
</Link>
<Link className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" to="#">
<span className="material-symbols-outlined">group</span>
<span className="font-medium text-sm">Members &amp; Permissions</span>
</Link>
<Link className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" to="#">
<span className="material-symbols-outlined">extension</span>
<span className="font-medium text-sm">Integrations</span>
</Link>
<Link className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" to="#">
<span className="material-symbols-outlined">shield</span>
<span className="font-medium text-sm">Security</span>
</Link>
<Link className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" to="#">
<span className="material-symbols-outlined">notifications_active</span>
<span className="font-medium text-sm">Notifications</span>
</Link>
<div className="my-4 h-[1px] w-full bg-slate-200 dark:bg-slate-800"></div>
<Link className="flex items-center gap-3 rounded-lg px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all" to="#">
<span className="material-symbols-outlined">delete_forever</span>
<span className="font-medium text-sm">Danger Zone</span>
</Link>
</nav>
<div className="mt-8 rounded-xl bg-primary p-6 text-white shadow-lg shadow-primary/20">
<h4 className="text-sm font-bold uppercase tracking-wider opacity-80">Support Plan</h4>
<p className="mt-2 text-xl font-black">Enterprise</p>
<p className="mt-1 text-xs opacity-70 leading-relaxed">Your organization is currently on the Enterprise tier with 24/7 dedicated support.</p>
<button onClick={() => navigate('/checkout')} className="mt-4 w-full rounded-lg bg-white py-2 text-sm font-bold text-primary hover:bg-slate-50 transition-colors">Manage Subscription</button>
</div>
</aside>
<div className="flex-1 space-y-6">
<section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
<div className="mb-6">
<h3 className="text-xl font-bold">Project Details</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Update your project identity and description.</p>
</div>
<div className="space-y-4">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="space-y-2">
<label className="text-sm font-semibold">Project Name</label>
<input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Enter project name" type="text" value="Quantum Leap AI"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold">Project Identifier</label>
<div className="relative">
<input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-sm text-slate-500 outline-none" readOnly type="text" value="quantum-leap-01"/>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 text-sm">lock</span>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold">Description</label>
<textarea className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tell us what this project is about..." rows="3">Next generation neural processing unit for predictive logistics and supply chain optimization.</textarea>
</div>
<div className="flex justify-end pt-4">
<button className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-all">Save Changes</button>
</div>
</div>
</section>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
<section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
<div className="mb-4 flex items-center justify-between">
<h3 className="font-bold">Project Status</h3>
<span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400">Active</span>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Archive this project to stop all active processes while keeping data.</p>
<select className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20">
<option defaultSelected>Active</option>
<option>Maintenance</option>
<option>Archived</option>
</select>
</section>
<section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
<h3 className="font-bold mb-4">Visibility</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Control who can discover and access this project dashboard.</p>
<div className="flex items-center gap-4">
<label className="relative inline-flex cursor-pointer items-center">
<input defaultChecked className="peer sr-only" type="checkbox" defaultValue=""/>
<div className="peer h-6 w-11 rounded-full bg-slate-200 dark:bg-slate-700 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
<span className="ml-3 text-sm font-medium">Private Project</span>
</label>
</div>
</section>
</div>
<section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
<h3 className="text-xl font-bold mb-6">Project Ownership</h3>
<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-4">
<div className="h-16 w-16 overflow-hidden rounded-xl border-2 border-slate-100 dark:border-slate-800 shadow-sm">
<div className="h-full w-full bg-slate-200 bg-cover bg-center" alt="Owner profile portrait photo" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuALFr1tCMRSQseFLKAYQViOyHm3dduCKg1RNTO3KWsk5ce9Rmaip9FvDTSTYnzPCUYGXLyMKS1Su9RoGdqvtOX6cKumUpHAm-qYiXjrSBev79KA4aq8H1wgvnd-w4sTLd4jB69_4MtaJ622sKrcFquELSZrsUxX16UTeXibuA_CwTwb6gG-68UUutaIXLFJTLjwfbGBm9GUCWvKvCpPMXn0x64x5gXNOJh5JodYylL3MVI_rxjgaIMY-BpOHuVCU65bEgrA6TlrjP8")`}}></div>
</div>
<div>
<h4 className="font-bold">Sarah Harrington</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-tight">sarah.h@acme.corp</p>
<div className="mt-1 flex items-center gap-2">
<span className="material-symbols-outlined text-[14px] text-primary">verified</span>
<span className="text-[12px] font-semibold text-primary uppercase tracking-wider">Project Owner</span>
</div>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Transfer</button>
<button onClick={() => navigate('/profile')} className="flex-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">View Profile</button>
</div>
</div>
</section>
<section className="rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10 p-6">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600">
<span className="material-symbols-outlined">warning</span>
</div>
<div className="flex-1">
<h3 className="text-lg font-bold text-red-900 dark:text-red-400">Danger Zone</h3>
<p className="mt-1 text-sm text-red-700 dark:text-red-500/80">Deleting a project is permanent. All datasets, models, and analytics associated with this project will be deleted immediately.</p>
<button className="mt-6 rounded-lg bg-red-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-red-600/20 hover:bg-red-700 transition-all">Delete this project</button>
</div>
</div>
</section>
</div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectSettingsPage;
