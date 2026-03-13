import './PaymentHistoryPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const PaymentHistoryPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="layout-content-container flex flex-col max-w-[1024px] flex-1 gap-8">
<div className="flex flex-col md:flex-row md:items-start gap-8">
<aside className="w-full md:w-64 flex flex-col gap-1">
<div className="flex items-center gap-3 px-4 py-3 mb-4">
<div className="bg-primary/10 rounded-full p-0.5">
<div className="size-10 rounded-full bg-cover bg-center" alt="User profile avatar placeholder" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnchLOiHVNpGLtAiFnl3K1HRHq_AknsiKdEaapM4o5z1rxYrOSBvuKyv8FPLlx0tzGoNnO0W4znFL0AAvhFWGEWsySK05w3nPYU6lynALha3DwgU_b8rPDqYx5Flp2yibEWKaHlDZgY5qF_khHjEzMwYqPhSU4vfWVhJuFaX5jNHIKJGpB_N5WCx_m0xH4CrjFp4WUEb3bw1N7wc2leNEZYfv1jxfxo3J_TwvtlrBAB1dwOkJN9VfYJ3N3Nh1pgTNTO0ijIsJzjuQ")`}}></div>
</div>
<div className="flex flex-col">
<span className="text-slate-900 dark:text-slate-100 text-sm font-semibold">Alex Rivers</span>
<span className="text-slate-500 dark:text-slate-400 text-xs">alex@example.com</span>
</div>
</div>
<nav className="flex flex-col gap-1">
<Link className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group" to="/dashboard">
<span className="material-symbols-outlined text-[22px] group-hover:text-primary">dashboard</span>
<span className="text-sm font-medium">Dashboard</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group" to="/dashboard">
<span className="material-symbols-outlined text-[22px] group-hover:text-primary">insights</span>
<span className="text-sm font-medium">Usage</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors" to="/payment-history">
<span className="material-symbols-outlined text-[22px]" style="font-variation-settings: 'FILL' 1">receipt_long</span>
<span className="text-sm font-semibold">Billing</span>
</Link>
<Link className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group" to="/profile">
<span className="material-symbols-outlined text-[22px] group-hover:text-primary">settings</span>
<span className="text-sm font-medium">Settings</span>
</Link>
</nav>
</aside>
<div className="flex-1 flex flex-col gap-6">
<div className="flex flex-col gap-2">
<h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">Billing History</h1>
<p className="text-slate-500 dark:text-slate-400 text-sm">Manage your subscription invoices and track your payment history.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-xl">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Current Plan</p>
<p className="text-lg font-bold text-slate-900 dark:text-slate-100">Pro Monthly</p>
<Link to="/pricing" className="text-sm text-primary mt-2 flex items-center gap-1 font-medium">Manage Plan <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-xl">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Next Billing Date</p>
<p className="text-lg font-bold text-slate-900 dark:text-slate-100">Nov 01, 2023</p>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Auto-renew is on</p>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-xl">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Total Spent</p>
<p className="text-lg font-bold text-slate-900 dark:text-slate-100">$116.00</p>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Since July 2023</p>
</div>
</div>
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50">
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">Invoice ID</th>
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">Plan</th>
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">Amount</th>
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">Date</th>
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">Status</th>
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 dark:divide-slate-800">
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">#INV-004</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Pro Monthly</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">$29.00</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 01, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                    Paid
                                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-3">
<button className="text-slate-400 hover:text-primary transition-colors" title="Download Invoice">
<span className="material-symbols-outlined text-xl">download</span>
</button>
<button className="text-primary text-sm font-semibold hover:underline">View Detail</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">#INV-003</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Pro Monthly</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">$29.00</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Sep 01, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                    Paid
                                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-3">
<button className="text-slate-400 hover:text-primary transition-colors" title="Download Invoice">
<span className="material-symbols-outlined text-xl">download</span>
</button>
<button className="text-primary text-sm font-semibold hover:underline">View Detail</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">#INV-002</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Pro Monthly</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">$29.00</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Aug 01, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                                                    Pending
                                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-3">
<button className="text-slate-400 hover:text-primary transition-colors" title="Download Invoice">
<span className="material-symbols-outlined text-xl">download</span>
</button>
<button className="text-primary text-sm font-semibold hover:underline">View Detail</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100">#INV-001</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Free Trial</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">$0.00</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Jul 01, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                    Paid
                                                </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-3">
<button className="text-slate-400 hover:text-primary transition-colors" title="Download Invoice">
<span className="material-symbols-outlined text-xl">download</span>
</button>
<button className="text-primary text-sm font-semibold hover:underline">View Detail</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
<p className="text-sm text-slate-500 dark:text-slate-400">Showing 1-4 of 4 results</p>
<div className="flex gap-2">
<button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 text-slate-500 cursor-not-allowed">Previous</button>
<button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800">Next</button>
</div>
</div>
</div>
<div className="mt-4 flex flex-col gap-4">
<h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Payment Methods</h3>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="bg-slate-100 dark:bg-slate-800 p-2 rounded text-slate-600 dark:text-slate-300">
<span className="material-symbols-outlined">credit_card</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Visa ending in 4242</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Expiry 12/24 â€¢ Default</p>
</div>
</div>
<button className="text-sm font-medium text-primary hover:underline">Edit</button>
</div>
</div>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default PaymentHistoryPage;
