import './UserProfileSettingsPage.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const UserProfileSettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
{/* Header Section */}
<header className="mb-10">
<h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Account Settings</h2>
<p className="text-slate-500 dark:text-slate-400 mt-2">Manage your public profile, account security, and notification preferences.</p>
</header>
<div className="flex flex-col gap-10">
{/* Section: Edit Profile */}
<section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div className="p-8">
<h3 className="text-lg font-bold mb-6">Personal Information</h3>
<div className="flex flex-col md:flex-row gap-8 mb-8">
<div className="flex flex-col items-center gap-4">
<div className="size-32 rounded-full ring-4 ring-primary/10 overflow-hidden bg-slate-100">
<img className="w-full h-full object-cover" alt="Close up portrait of a smiling male user" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0uNeDbMZruvZQEEsOrGmhkxmBx-DJDqibAbWa4xFnLxT2HQ4GA-89kztfHj3VSMhS25N_MAVz7vpFoyQl5bUNWUqlRjbhItrxbiYNJhYDYHHqJB3w9tgw37GdgCEZY8mPTyG_Wf9LYcJh3wAEnDIsGdgwO9KLJ55d28N-lWbHnoujl2qQeSlisXaDjyi9PoYPP0qzXx7Wwq3dDxSB1XPXhTm5SFz518lBXn4tKWLATG0gChG9XRv6WuFtikQiabtjZjzlGfxkgj4"/>
</div>
<button className="text-sm font-bold text-primary hover:underline">Change Photo</button>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:border-primary focus:ring-primary dark:bg-slate-800" type="text" value="Alex"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:border-primary focus:ring-primary dark:bg-slate-800" type="text" value="Johnson"/>
</div>
<div className="flex flex-col gap-2 md:col-span-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:border-primary focus:ring-primary dark:bg-slate-800" type="email" value="alex.j@example.com"/>
</div>
</div>
</div>
<div className="flex justify-end">
<button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all">Save Changes</button>
</div>
</div>
</section>
{/* Section: Security */}
<section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div className="p-8">
<h3 className="text-lg font-bold mb-6">Security</h3>
<div className="flex flex-col gap-6">
<div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
<div className="flex items-center gap-4">
<div className="size-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-500">
<span className="material-symbols-outlined">lock</span>
</div>
<div>
<p className="font-bold text-sm">Update Password</p>
<p className="text-xs text-slate-500">Last changed 3 months ago</p>
</div>
</div>
<button className="border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800">Update</button>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
<div className="flex items-center gap-4">
<div className="size-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-500">
<span className="material-symbols-outlined">verified_user</span>
</div>
<div>
<p className="font-bold text-sm">Two-Factor Authentication</p>
<p className="text-xs text-slate-500">Enabled - SMS Verification</p>
</div>
</div>
<div className="flex items-center">
<div className="relative inline-block w-12 mr-2 align-middle select-none">
<input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer right-0" id="toggle2fa" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer" htmlFor="toggle2fa"></label>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Section: Notifications */}
<section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div className="p-8">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-bold">Notification Preferences</h3>
<button className="text-primary text-sm font-bold">Restore Defaults</button>
</div>
<div className="space-y-6">
<div className="flex items-start justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
<div className="flex-1 pr-10">
<p className="font-bold text-sm mb-1">Email Notifications</p>
<p className="text-xs text-slate-500">Receive emails about your account activity and weekly summaries.</p>
</div>
<div className="flex items-center">
<div className="relative inline-block w-12 align-middle select-none">
<input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer right-0" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer"></label>
</div>
</div>
</div>
<div className="flex items-start justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
<div className="flex-1 pr-10">
<p className="font-bold text-sm mb-1">Browser Push Notifications</p>
<p className="text-xs text-slate-500">Get real-time updates directly in your browser even when you're away.</p>
</div>
<div className="flex items-center">
<div className="relative inline-block w-12 align-middle select-none">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-slate-300 appearance-none cursor-pointer left-0" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer"></label>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div className="flex-1 pr-10">
<p className="font-bold text-sm mb-1">Marketing &amp; Promotions</p>
<p className="text-xs text-slate-500">Stay informed about new features and occasional special offers.</p>
</div>
<div className="flex items-center">
<div className="relative inline-block w-12 align-middle select-none">
<input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer right-0" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer"></label>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Danger Zone */}
<section className="bg-red-50/50 dark:bg-red-950/10 rounded-2xl border border-red-100 dark:border-red-900/30 overflow-hidden mb-12">
<div className="p-8">
<div className="flex items-center gap-3 mb-4 text-red-600 dark:text-red-500">
<span className="material-symbols-outlined">warning</span>
<h3 className="text-lg font-bold">Danger Zone</h3>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Delete Account</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Permanently delete your account and all associated data. This action cannot be undone.</p>
</div>
<button className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-red-700 transition-all">Delete My Account</button>
</div>
</div>
</section>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default UserProfileSettingsPage;
