import './ChangeHistoryPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const ChangeHistoryPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Breadcrumbs */}
<nav className="flex items-center gap-2 mb-6 text-sm overflow-x-auto whitespace-nowrap pb-2">
<Link className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1" to="/dashboard">
<span className="material-symbols-outlined text-[18px]">home</span>
                    Workspace
                </Link>
<span className="text-slate-400"><span className="material-symbols-outlined text-[16px]">chevron_right</span></span>
<Link className="text-slate-500 hover:text-primary transition-colors" to="/projects">Projects</Link>
<span className="text-slate-400"><span className="material-symbols-outlined text-[16px]">chevron_right</span></span>
<Link className="text-slate-500 hover:text-primary transition-colors" to="/projects/detail">Mobile App Redesign</Link>
<span className="text-slate-400"><span className="material-symbols-outlined text-[16px]">chevron_right</span></span>
<span className="text-slate-900 dark:text-white font-semibold">SRS History</span>
</nav>
{/* Page Title & Actions */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<div className="flex flex-col gap-1">
<h1 className="text-slate-900 dark:text-white text-3xl font-extrabold leading-tight tracking-tight">Change History</h1>
<p className="text-slate-500 dark:text-slate-400 text-base">Track and manage version control for the Software Requirements Specification.</p>
</div>
<div className="flex items-center gap-3">
<button onClick={() => window.location.href='/compare'} className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
<span className="material-symbols-outlined text-[20px]">difference</span>
                        Compare Versions
                    </button>
<button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
<span className="material-symbols-outlined text-[20px]">add</span>
                        New Version
                    </button>
</div>
</div>
{/* Tab Navigation */}
<div className="mb-6">
<div className="flex border-b border-slate-200 dark:border-slate-800 gap-8">
<button className="flex items-center gap-2 border-b-2 border-primary text-primary pb-3 pt-4 font-bold text-sm">
<span className="material-symbols-outlined text-[20px]">list_alt</span>
                        All Versions
                    </button>
<button className="flex items-center gap-2 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-3 pt-4 font-bold text-sm transition-all">
<span className="material-symbols-outlined text-[20px]">archive</span>
                        Archived
                    </button>
</div>
</div>
{/* Version Table Container */}
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
<th className="p-4 w-12 text-center">
<input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
</th>
<th className="p-4 text-slate-700 dark:text-slate-200 text-sm font-semibold uppercase tracking-wider">Version</th>
<th className="p-4 text-slate-700 dark:text-slate-200 text-sm font-semibold uppercase tracking-wider">Edited By</th>
<th className="p-4 text-slate-700 dark:text-slate-200 text-sm font-semibold uppercase tracking-wider">Date</th>
<th className="p-4 text-slate-700 dark:text-slate-200 text-sm font-semibold uppercase tracking-wider">Change Summary</th>
<th className="p-4 text-slate-700 dark:text-slate-200 text-sm font-semibold uppercase tracking-wider">Status</th>
<th className="p-4 text-slate-700 dark:text-slate-200 text-sm font-semibold uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
{/* Version Row 1 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="p-4 text-center">
<input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">v2.1</span>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-200 bg-cover bg-center" alt="Portrait of a male developer" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4oF3ZuEg4e715O5dhWRxlvHyDemqTfRzyD6rCIl8Vo-pjPOu-DDi05Wty2zZxgJQY4wLAojZ0odfSnm7ACPD5_12k0KKjlvMz5botDQOsVlwIHKlGVICfbH3M_qO3lu_xtaEzUaRtJAd80MD0WgTKcgm2ywQhheXd7ktMwuYE-hVEmDUvnt89WFDR6STZVnXSjgXbLqfKMT7sGgNSDEUzhG4Vngr2vwkuYondmkRukbgupgCH-FUPNiE_JkGWtojluK-YF2xrxQM")`}}></div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 dark:text-white">Alex Morgan</span>
<span className="text-xs text-slate-500">Sr. Product Manager</span>
</div>
</div>
</td>
<td className="p-4 text-sm text-slate-500 dark:text-slate-400">Oct 12, 2023</td>
<td className="p-4 text-sm text-slate-600 dark:text-slate-300 max-w-xs truncate">Updated API security protocols and data encryption standards.</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
<span className="size-1.5 rounded-full bg-emerald-500"></span>
                                        Active
                                    </span>
</td>
<td className="p-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="text-primary hover:text-primary/80 font-bold text-sm px-2 py-1">View Detail</button>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Version Row 2 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="p-4 text-center">
<input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">v2.0</span>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-200 bg-cover bg-center" alt="Portrait of a female designer" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_k0iQQmKa61CtHhfgkACkYdAixTttFAyHg_DbMJ5rMhwMtFzox7DhSa3Nlazmxx2bRRdf788ypaftHgnHzuJ_559i7--uwix7tkXFmP30zBq3dBMRr8XSTyoqGSiZu5850w8hWLKWxpzGl5skXnRfF5O57XyWbSAsCXvjv2-jb3wJ-lyZhbtN5ElFGdhKsyBnEHkZCJjQtLSp6YAEF3A0Pw3RepVQzIh5jf8v9J2MwjcsBxvL7Ma6y7NgP6HX_bC-zGCJIENKPZw")`}}></div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 dark:text-white">Sarah Jenkins</span>
<span className="text-xs text-slate-500">Lead UI/UX</span>
</div>
</div>
</td>
<td className="p-4 text-sm text-slate-500 dark:text-slate-400">Sep 28, 2023</td>
<td className="p-4 text-sm text-slate-600 dark:text-slate-300 max-w-xs truncate">Initial draft for mobile redesign including navigation flows.</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
<span className="size-1.5 rounded-full bg-slate-400"></span>
                                        Archived
                                    </span>
</td>
<td className="p-4 text-right">
<div className="flex items-center justify-end gap-3">
<button className="text-primary hover:text-primary/80 font-bold text-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">restore</span>
                                            Restore
                                        </button>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Version Row 3 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="p-4 text-center">
<input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">v1.9</span>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-200 bg-cover bg-center" alt="Portrait of a male developer" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLae7sNc6G42XQaux3zIBXGdjJdgw1YnXLTZaDJrxoSAmfArS0hy10NuzfVZ5a-0OduwUUVfklOeH0iBLpWGW4jp662ZAuXJkgXMxgYTxTJzEJe6gteEfH0mBYPXqcFB8Dr_p52GpSVfy3EYFGGPGhyUir6B4EAkpJCfK7KwWqACJB7o_L3GpKdc79ARwRyPH_GvcaKPohlOzn3Hoth1VoGq2bC6fImQadOwVxtNn1TM0_HapYmCtHfd1LjcJomrtA8LyrDJpnLpM")`}}></div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 dark:text-white">David Chen</span>
<span className="text-xs text-slate-500">Security Analyst</span>
</div>
</div>
</td>
<td className="p-4 text-sm text-slate-500 dark:text-slate-400">Sep 15, 2023</td>
<td className="p-4 text-sm text-slate-600 dark:text-slate-300 max-w-xs truncate">Added user authentication flow and multi-factor logic.</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
<span className="size-1.5 rounded-full bg-slate-400"></span>
                                        Archived
                                    </span>
</td>
<td className="p-4 text-right">
<div className="flex items-center justify-end gap-3">
<button className="text-primary hover:text-primary/80 font-bold text-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">restore</span>
                                            Restore
                                        </button>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Version Row 4 */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="p-4 text-center">
<input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">v1.8</span>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-200 bg-cover bg-center" alt="Portrait of a female team lead" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuWlePhrkvMS95Yb_GZ8YpcPAPrxHGeT68rAcgbVwmY3kD30MbAi1IOOv2c5-PBYk4dHyRihj4j26U1FdnCnpLAxS9FXeRXgQjVEUbzNZ25O5LcJdY2SmFKQbRHIW1Ivnf2cYDPKKyN_eA5yySUnxLF3Us9ngGvp4z75K-26-bq3IqT6F8Ie0_6pw9bVnQN9IV7hEtx0daDty5fB0OWlNBoUAyvfKNuTX6tOV5lD1P3_i7tblYmG6wkqX0GPLBIOq7LKSKpLH2tzs")`}}></div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 dark:text-white">Elena Rodriguez</span>
<span className="text-xs text-slate-500">CTO</span>
</div>
</div>
</td>
<td className="p-4 text-sm text-slate-500 dark:text-slate-400">Sep 01, 2023</td>
<td className="p-4 text-sm text-slate-600 dark:text-slate-300 max-w-xs truncate">Refined UI component specs for the dashboard layout.</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
<span className="size-1.5 rounded-full bg-slate-400"></span>
                                        Archived
                                    </span>
</td>
<td className="p-4 text-right">
<div className="flex items-center justify-end gap-3">
<button className="text-primary hover:text-primary/80 font-bold text-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">restore</span>
                                            Restore
                                        </button>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination Footer */}
<div className="px-6 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
<p className="text-sm text-slate-500 dark:text-slate-400">Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to <span className="font-medium text-slate-900 dark:text-white">4</span> of <span className="font-medium text-slate-900 dark:text-white">12</span> versions</p>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 transition-all" disabled>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Footer Stats / Summary (Optional extra) */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-xl border border-primary/10">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-primary">history</span>
<h3 className="font-bold text-sm text-primary">Last Edit</h3>
</div>
<p className="text-xl font-bold text-slate-900 dark:text-white">2 days ago</p>
<p className="text-xs text-slate-500 mt-1">By Alex Morgan (v2.1)</p>
</div>
<div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-xl border border-primary/10">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-primary">layers</span>
<h3 className="font-bold text-sm text-primary">Total Versions</h3>
</div>
<p className="text-xl font-bold text-slate-900 dark:text-white">12 Versions</p>
<p className="text-xs text-slate-500 mt-1">Since Jan 2023</p>
</div>
<div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-xl border border-primary/10">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-primary">group</span>
<h3 className="font-bold text-sm text-primary">Contributors</h3>
</div>
<p className="text-xl font-bold text-slate-900 dark:text-white">5 Authors</p>
<p className="text-xs text-slate-500 mt-1">Cross-functional team</p>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default ChangeHistoryPage;
