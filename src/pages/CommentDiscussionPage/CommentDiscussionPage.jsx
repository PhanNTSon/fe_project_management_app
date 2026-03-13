import './CommentDiscussionPage.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const CommentDiscussionPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-900 px-12 py-16 custom-scrollbar">
<div className="max-w-3xl mx-auto space-y-8">
<h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Functional Requirements</h1>
<p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        The system shall provide a centralized repository for software requirement specifications. Users must be able to collaborate in real-time, leaving comments and tracking changes across different versions of the document.
                    </p>
<section className="space-y-4">
<h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">3.1 System Latency</h2>
<div className="relative group">
<div className="absolute -left-6 top-0 h-full w-1 bg-primary/20 group-hover:bg-primary transition-colors rounded-full"></div>
<p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-primary/5 p-2 rounded">
                                The platform must respond to user queries within 200ms for 95% of requests during peak operational hours. This includes database lookups and rendering of the collaborative editor interface.
                            </p>
<span className="absolute -right-8 top-1 material-symbols-outlined text-primary text-xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">add_comment</span>
</div>
</section>
<section className="space-y-4">
<h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">3.2 Security Protocols</h2>
<p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            All data transmissions must be encrypted using TLS 1.3. User authentication will be handled via OAuth 2.0 with support for multi-factor authentication (MFA).
                        </p>
</section>
</div>
</div>
<aside className="w-[400px] border-l border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark flex flex-col shrink-0 overflow-hidden">
<div className="flex items-center justify-between px-4 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-slate-500">chat_bubble</span>
<h3 className="font-bold text-slate-900 dark:text-white">Discussion</h3>
<span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs px-2 py-0.5 rounded-full font-bold">12</span>
</div>
<div className="flex gap-1">
<button className="p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
<span className="material-symbols-outlined text-xl">filter_list</span>
</button>
<button className="p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
<span className="material-symbols-outlined text-xl">settings</span>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">Section: 3.1 Latency</span>
<span className="text-xs text-slate-400">Active Thread</span>
</div>
<div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex gap-3 mb-3">
<img alt="Alex Rivera headshot" className="size-9 rounded-full shrink-0"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT7NxBMgavVKlBWy0VODE2L_DDrU3TciI1LB5DcUm2lVXxuYSStScaH4NQDKmxNGMjihxnOylHQKad0L33YEsnndsy5vv3zlbbUdLE-fpxGHE552jX-3RlF-n7Spno-N5W9Ae0onnpKHz1FUIWFuA5cvj5d0SrbZuVDyWLyGJy-oFPHhveTL2C2B8VNnKCTgRKlnSWu2Rmzmj9KlXqzlyMtmBCCRjSBzacXORs8IaNtJnbTxaR_9T42wzB_hEkJ3SOpSMfLXQI3XM"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="text-sm font-bold text-slate-900 dark:text-white truncate">Alex Rivera</p>
<p className="text-[10px] text-slate-400 shrink-0">2m ago</p>
</div>
<p className="text-sm text-slate-700 dark:text-slate-300 mt-1 leading-normal">
                                        Should we specify the latency requirements here? <span className="text-primary font-medium">@Sarah Chen</span> I think 200ms might be tight for the global CDN.
                                    </p>
</div>
</div>
<div className="ml-12 border-l-2 border-slate-100 dark:border-slate-800 pl-4 space-y-4">
<div className="flex gap-3">
<img alt="Sarah Chen headshot" className="size-8 rounded-full shrink-0"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY43cUhy7UsRkn4pwBGGgLch9uy4QkwU7DvrQpHem18SCMxzq3vPfJNPwg3Z_EbF9vk88z8UCefTZig1vBFJWHdrk4KxzkdlTIEZigceJFhtEiy_YVvWAaKwMP6zTlDYAvtahIbV-hBxW6Ixnue9sGFe5AZT1_RGQ4KQO77r97i07mSTKm8BxOGcNg9Mb3hrk3ZyF4ylMPvwwvek8qWGv64LcKEqWVMADzMoBryksty8XjYTCmFIUM77oT7sNUQJaMQKfi41rjMQY"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="text-xs font-bold text-slate-900 dark:text-white">Sarah Chen</p>
<p className="text-[10px] text-slate-400">Just now</p>
</div>
<p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                            Good point. Let's aim for 300ms for international nodes.
                                        </p>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
<div className="flex gap-3">
<button className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-primary">
<span className="material-symbols-outlined text-sm">reply</span> Reply
                                    </button>
<button className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-emerald-500">
<span className="material-symbols-outlined text-sm">check_circle</span> Resolve
                                    </button>
</div>
<div className="flex items-center gap-1 text-[11px] text-slate-400">
<span className="material-symbols-outlined text-sm">visibility</span> 3 viewers
                                </div>
</div>
</div>
</div>
<div className="space-y-3 opacity-60">
<div className="flex items-center justify-between">
<span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">Section: 3.2 Security</span>
<div className="flex items-center gap-1 text-emerald-500">
<span className="material-symbols-outlined text-xs">verified</span>
<span className="text-[10px] font-bold uppercase">Resolved</span>
</div>
</div>
<div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
<div className="flex gap-3">
<img alt="James Wilson headshot" className="size-9 rounded-full grayscale shrink-0"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD82fuNLvwaLMZak5IZtJbuFao4p9izPxWQCrdbKeczhu25P5EXrFuU_4ZdSjUdcjMdKYZHZCoHyjvLDUgRvwe1a1dx01lpo5YIcP3T54olNZBlWTMTFRk_YvJNr3b8cysKhTQMbu7ekWBF2SbGwIMoyoRvyeDfRbMqPlbSKc9P1zDeLk-Loh6CJYXaZANIQhN0tpRpl2s8tYbeR1zyU9dV2_0MuDZJpiVXruA0DOonDCPVnzeUYXD4HzGHHrb_oGUxP9C-duC_zHo"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<p className="text-sm font-bold text-slate-900 dark:text-white">James Wilson</p>
<p className="text-[10px] text-slate-400">4h ago</p>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1 line-through">
                                        Need to update the TLS version to 1.3.
                                    </p>
</div>
</div>
<button className="mt-3 text-[10px] font-bold text-primary hover:underline uppercase tracking-tighter">Reopen Thread</button>
</div>
</div>
</div>
<div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
<div className="relative flex flex-col gap-2 rounded-xl border border-slate-200 dark:border-slate-700 p-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
<textarea className="w-full border-0 bg-transparent p-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 resize-none" placeholder="Write a comment..." rows="2"></textarea>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1">
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
<span className="material-symbols-outlined text-xl">alternate_email</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
<span className="material-symbols-outlined text-xl">attach_file</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
<span className="material-symbols-outlined text-xl">mood</span>
</button>
<div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1"></div>
<select className="bg-transparent border-0 text-[11px] font-bold text-slate-500 py-0 focus:ring-0 cursor-pointer">
<option>Section 3.1</option>
<option>General</option>
<option>Draft</option>
</select>
</div>
<button className="bg-primary text-white p-1.5 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center">
<span className="material-symbols-outlined text-xl">send</span>
</button>
</div>
</div>
</div>
</aside>
      </div>
    </DashboardLayout>
  );
};

export default CommentDiscussionPage;
