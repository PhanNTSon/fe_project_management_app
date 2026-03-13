import './ReviewApprovalPage.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const ReviewApprovalPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Left Panel: Document View */}
<section className="flex-1 overflow-y-auto bg-white dark:bg-slate-900 shadow-sm border-r border-slate-200 dark:border-slate-800">
<div className="max-w-4xl mx-auto p-8 lg:p-12">
<div className="mb-8">
<div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
<span>Project: Apollo Cloud</span>
<span className="text-slate-300">/</span>
<span>v1.2.4-Draft</span>
</div>
<h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Core Infrastructure Requirements</h1>
<div className="h-1 w-20 bg-primary rounded-full"></div>
</div>
{/* Requirement Section 1 */}
<div className="group relative p-6 mb-6 border border-transparent hover:border-primary/20 hover:bg-primary/[0.02] rounded-xl transition-all">
<div className="flex items-start justify-between mb-4">
<span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-mono px-2 py-1 rounded">REQ-INF-001</span>
<button className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-primary text-sm font-medium transition-opacity">
<span className="material-symbols-outlined text-sm">add_comment</span>
                                Comment
                            </button>
</div>
<h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">Multi-Region Redundancy</h3>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            The system must maintain active-active deployment across at least three geographic regions. Data synchronization between regions must occur with a latency of less than 200ms to ensure high availability and disaster recovery compliance.
                        </p>
<div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded-r-lg">
<p className="text-sm text-amber-800 dark:text-amber-300 italic">"Ensure that US-East, EU-West, and AP-Southeast are prioritized for initial launch."</p>
</div>
</div>
{/* Requirement Section 2 */}
<div className="group relative p-6 mb-6 border border-transparent hover:border-primary/20 hover:bg-primary/[0.02] rounded-xl transition-all bg-slate-50/50 dark:bg-slate-800/30">
<div className="flex items-start justify-between mb-4">
<span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-mono px-2 py-1 rounded">REQ-INF-002</span>
<button className="flex items-center gap-1 text-primary text-sm font-medium">
<span className="material-symbols-outlined text-sm">comment</span>
                                2 Comments
                            </button>
</div>
<h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">Auto-scaling Policy</h3>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Auto-scaling groups must trigger additional instance provisioning when average CPU utilization across the cluster exceeds 70% for a sustained period of 5 minutes. Down-scaling should occur when utilization drops below 30% for 15 minutes.
                        </p>
{/* Threaded Comments */}
<div className="space-y-4 ml-4 border-l-2 border-slate-200 dark:border-slate-700 pl-6">
<div className="flex gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200 shrink-0">
<img className="h-full w-full object-cover rounded-full" alt="Avatar of senior engineer commenting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvsevrOG8QRo90b8HedGQbzuE_FHgeCdJcXaFT4UqJiKVwfBvLIk_ITsK7kiKlvYaTrfvoI0cS1vs7njzM_VAMOBIfM7zF-8ldBt8W00V22QH2XygS83xjQJM8t8btU4hsvQjjhFlcTiLjYmMycqE8GlqQRmJKkLKnAVRwokgL454z_b3NDxR5xicvqdSZvReeeBBeNC9Jw0XmW_RRkPvBwUreElAme3UYHCX7VGmNKf3kGi0FNyvPl_g-cELWGIGPtQ_PuXPflr4"/>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-bold">Marcus Chen</span>
<span className="text-xs text-slate-500">2 hours ago</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400">70% might be too tight for the database cluster. Should we consider 80% to avoid flip-flopping?</p>
<button className="text-xs text-primary font-bold mt-2 hover:underline">Reply</button>
</div>
</div>
<div className="flex gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200 shrink-0">
<img className="h-full w-full object-cover rounded-full" alt="Avatar of lead developer replying" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDLzKagfKJlaNXzI2jIgoghTrhA1r3e1TEpRrr3hBe10YF_xoMG_e93Z-Iao5GC4HJ4E8S5BkcWrOQhR0zHJC973Ov4QvmZiY-wPSgG9Ri0D3mZ8mWU5QFIz_2KncYuYuR9VNlkdJz_u-Mwf488nXChvn1VHqSjFDb_1JlhfiXQzkVEry_7PcP2T08vTScXD3z5bWjgVz2kH3IfzSgkZQ5WQTEm3rONfuNGaO-lZKrGJjBxQ1AdRhX02G8kT1pW0TV4aZdUwNLjDk"/>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-bold">Sarah Jenkins</span>
<span className="text-xs text-slate-500">45 mins ago</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400">Agreed. I'll update the thresholds for the DB specifically while keeping compute at 70%.</p>
<button className="text-xs text-primary font-bold mt-2 hover:underline">Reply</button>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Right Panel: Sidebar Review Controls */}
<aside className="w-80 lg:w-96 bg-slate-50 dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col overflow-y-auto">
<div className="p-6 border-b border-slate-200 dark:border-slate-800">
<h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Review Panel</h2>
<div className="space-y-6">
{/* Section Status */}
<div>
<label className="block text-xs font-semibold text-slate-400 uppercase mb-3">Current Status</label>
<div className="flex items-center gap-2 px-3 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-lg">
<span className="material-symbols-outlined text-lg">pending</span>
<span className="text-sm font-bold">Awaiting Approval</span>
</div>
</div>
{/* Author & Details */}
<div className="space-y-4">
<div>
<label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Author</label>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
<img className="h-full w-full object-cover" alt="Primary author profile photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_m8yjfMSZAeyVBDx5PpKdDaZmDFsgWfSKX1Zz88TAXmdZgtz59QIbUu1IEHgTbp9r-jBrEdtGyKsFnHAZ1RXZxCg8zOXLupdU3gxRXL4O300-hzf4qHCCubWRTew914J5cztDPqzMQ9EELM3VoWJs7boAX2E3rbyaYyTQrWqyHMdsMLfHxjDsH4PEUbEeehshXNXtzxRz3xi8iqsto9dAn0H1Q1BtG2PYtK4wvikQfUVUY7ZWbTAOn22_q6edhiaxqlZOxCH1c64"/>
</div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">David Miller</p>
<p className="text-xs text-slate-500">Lead Systems Architect</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-2">
<div>
<label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Submitted</label>
<p className="text-sm font-medium text-slate-700 dark:text-slate-300">Oct 24, 2023</p>
</div>
<div>
<label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Deadline</label>
<p className="text-sm font-medium text-slate-700 dark:text-slate-300">Oct 30, 2023</p>
</div>
</div>
</div>
{/* Progress Bar */}
<div>
<div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
<span>Section Completion</span>
<span>65%</span>
</div>
<div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{width: '65%'}}></div>
</div>
</div>
</div>
</div>
{/* Review Controls */}
<div className="p-6 space-y-3 mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
<button className="w-full flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-emerald-500/20">
<span className="material-symbols-outlined">check_circle</span>
                        Approve Document
                    </button>
<button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined">edit_note</span>
                        Request Changes
                    </button>
<button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border-2 border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 font-bold py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
<span className="material-symbols-outlined">cancel</span>
                        Reject Version
                    </button>
<p className="text-center text-[10px] text-slate-400 font-medium uppercase mt-4">
                        Current Version: 1.2.4-RevA
                    </p>
</div>
</aside>
      </div>
    </DashboardLayout>
  );
};

export default ReviewApprovalPage;
