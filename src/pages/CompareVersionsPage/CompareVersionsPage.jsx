import './CompareVersionsPage.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const CompareVersionsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Sidebar: Changes Summary */}
<aside className="w-80 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto hidden xl:block p-6">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Changes Summary</h3>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-900/30">
<p className="text-2xl font-bold text-green-600">12</p>
<p className="text-xs text-green-700 dark:text-green-400">Additions</p>
</div>
<div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/30">
<p className="text-2xl font-bold text-red-600">4</p>
<p className="text-xs text-red-700 dark:text-red-400">Removals</p>
</div>
<div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-100 dark:border-yellow-900/30 col-span-2">
<p className="text-2xl font-bold text-yellow-600">8</p>
<p className="text-xs text-yellow-700 dark:text-yellow-400">Modified Sections</p>
</div>
</div>
<div className="space-y-6">
<div>
<h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">person</span>
                        Author
                    </h4>
<div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
<div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">JD</div>
<div>
<p className="text-sm font-medium">Jane Doe</p>
<p className="text-xs text-slate-500">Sr. Systems Analyst</p>
</div>
</div>
</div>
<div>
<h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-sm">list_alt</span>
                        Affected Sections
                    </h4>
<ul className="space-y-2">
<li className="text-xs p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded flex justify-between cursor-pointer">
<span>1.2 System Scope</span>
<span className="text-yellow-500 font-bold">Mod</span>
</li>
<li className="text-xs p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded flex justify-between cursor-pointer">
<span>2.4 API Protocols</span>
<span className="text-green-500 font-bold">Add</span>
</li>
<li className="text-xs p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded flex justify-between cursor-pointer">
<span>3.1 Performance</span>
<span className="text-red-500 font-bold">Rem</span>
</li>
</ul>
</div>
<div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
<button className="w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary py-2.5 rounded-lg text-sm font-bold transition-all">
<span className="material-symbols-outlined text-sm">restore</span>
                        Restore v1.2
                    </button>
<button className="w-full flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 py-2.5 rounded-lg text-sm font-bold transition-all">
<span className="material-symbols-outlined text-sm">description</span>
                        Export Diff Report
                    </button>
</div>
</div>
</aside>
{/* Split Diff Viewer */}
<div className="flex-1 flex overflow-hidden bg-slate-50 dark:bg-slate-950">
{/* Left Side: Old Version */}
<div className="flex-1 overflow-y-auto border-r border-slate-200 dark:border-slate-800 p-8">
<div className="max-w-2xl mx-auto">
<div className="flex items-center gap-2 mb-6">
<span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">v1.2</span>
<h2 className="text-slate-400 font-medium">Original Content</h2>
</div>
<div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
<section>
<h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">1.2 System Scope</h3>
<p>The system shall provide a centralized dashboard for monitoring real-time sensor data from all connected nodes. The initial release will support up to 1,000 concurrent connections via WebSocket.</p>
</section>
<section className="p-4 diff-removed rounded">
<h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">2.1 Legacy Authentication</h3>
<p>All users must authenticate using the deprecated LDAP protocol version 2. This method is required for backward compatibility with the legacy ERP system installed in 2018.</p>
</section>
<section>
<h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">3.1 Performance Requirements</h3>
<p>The system must respond to API queries within <span className="bg-red-200 dark:bg-red-900/40 px-1 rounded line-through">500ms</span> under normal operating conditions.</p>
</section>
<section>
<h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">4.0 Compliance</h3>
<p>Compliance with GDPR is mandatory for all user-facing data storage modules.</p>
</section>
</div>
</div>
</div>
{/* Right Side: New Version */}
<div className="flex-1 overflow-y-auto p-8 bg-white dark:bg-slate-900">
<div className="max-w-2xl mx-auto">
<div className="flex items-center gap-2 mb-6">
<span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">v1.3</span>
<h2 className="text-slate-800 dark:text-white font-medium">Updated Content</h2>
</div>
<div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
<section className="p-4 diff-modified rounded">
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">1.2 System Scope</h3>
<p>The system shall provide a centralized dashboard for monitoring real-time sensor data from all connected nodes. <span className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">The system will now scale to support 10,000 concurrent connections</span> using a distributed message broker.</p>
</section>
<section className="p-4 diff-added rounded">
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">2.1 Modern Security Layer</h3>
<p>All authentication shall be handled via OAuth 2.0 and OpenID Connect. LDAP support has been completely phased out in favor of the Corporate SSO provider.</p>
</section>
<section>
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">3.1 Performance Requirements</h3>
<p>The system must respond to API queries within <span className="bg-green-100 dark:bg-green-900/40 px-1 rounded font-medium">200ms</span> under normal operating conditions.</p>
</section>
<section>
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">4.0 Compliance</h3>
<p>Compliance with GDPR is mandatory. <span className="bg-green-100 dark:bg-green-900/30 px-1 rounded">Additionally, SOC2 Type II compliance must be maintained for all cloud infrastructure.</span></p>
</section>
</div>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default CompareVersionsPage;
