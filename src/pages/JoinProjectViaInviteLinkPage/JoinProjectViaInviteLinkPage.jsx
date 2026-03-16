import './JoinProjectViaInviteLinkPage.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const JoinProjectViaInviteLinkPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-xl w-full flex flex-col gap-8">
{/* SECTION 1: Initial Invitation View (Main Task) */}
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-8">
<div className="flex flex-col items-center text-center mb-8">
<div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 shadow-inner">
<span className="material-symbols-outlined !text-4xl">inventory_2</span>
</div>
<h1 className="text-2xl font-bold text-slate-900 dark:text-white">Join Project</h1>
<p className="text-slate-500 dark:text-slate-400 mt-1">You've been invited to collaborate on a new initiative.</p>
</div>
<div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-100 dark:border-slate-700 mb-6">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">auto_awesome</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<h3 className="font-bold text-slate-900 dark:text-white">Smart SRS Generator</h3>
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">Editor</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Owned by <span className="font-medium text-slate-900 dark:text-slate-200">John Doe</span></p>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                                    A platform for automated Software Requirement Specification generation and real-time team collaboration.
                                </p>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="Team member small avatar 1" className="h-7 w-7 rounded-full border-2 border-white dark:border-slate-800"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5i0QuNgf3NSef7p8p8zdtRp7uB3X2WvjSenYojAoPRn-3RXaKk6EbQW-KCqVcMALL0TlLXR0GceUf5mECMNea0gzBWvBuD5jGy2KXGvWsorAnOdsYYgdXJrja2YTKNfi-sbT9TV9PUniSSQ36yx_E5ZpZCygZpIj6x_EuW61Rt8ALB35bvpwT9P-0i0fiOCcQODR6DbCE5TN6fvKWPglT0aVbpqgQVDfbReUlv5gndFFfwZ6DRimefU-VlGJDTQxQIMiKhupOC64"/>
<img alt="Team member small avatar 2" className="h-7 w-7 rounded-full border-2 border-white dark:border-slate-800"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyIUa795tBgOfcv0IOKk2vmmsPnDqGEiktDf0HMd_HbVGUZHVw0HUNQIROV___fVzmn3XrUEgjvRn0XewxA9hwKswBY3XrOtm1-CzUh_o7WNWCxLJlKmcjCaw9VfEoEpU7nh9ol8fSjN1YTjl08bTru-7xgMEGgWG7FHMT9jLL0qdLZUTZ6-wq3IW9pp1AXo8inSckFxJxks5EWKEmlwqp3c3rpidU4bWixCzmRpXKk3iko6WD4RZfPlKnzJCpKJLgPPxo8pEM_bM"/>
<img alt="Team member small avatar 3" className="h-7 w-7 rounded-full border-2 border-white dark:border-slate-800"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS8Nzmdy3Wlsjt6P8C65pb2pyAzBaQZ-qcTCPzFE51PNsHjkrE9m8cgsvtyxJA-_Com4NpvM2D0XmYMLB3XqcZ7qgHWg53Jewtc4DB5o0h0snoiTUrKnYYoTz7Gzh8lg0UNqnXHCi6UYNOrMVRGBamPxPXC9Pb_qhMOVH7cH3417R0z6vjWaO7L7m7GYU3-zY-rmSpz2gMoydMX3GQRG8jjoYDVLSfiI0ONZsPKbD2hIw7cKhJjtp7EBgbo4SW2-uKY2KCs3B-FRQ"/>
<div className="h-7 w-7 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold">+9</div>
</div>
<span className="text-xs text-slate-400 font-medium">12 active members</span>
</div>
</div>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Optional Message to Leader</label>
<textarea className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary text-sm p-3" placeholder="Tell John why you're joining..." rows="3"></textarea>
</div>
<div className="flex flex-col sm:flex-row gap-3 pt-2">
<button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined">person_add</span>
                                Request to Join Project
                            </button>
<button className="px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                Cancel
                            </button>
</div>
</div>
</div>
</div>
{/* SECTION 2: Success / Pending State */}
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden opacity-60 grayscale-[0.5]">
<div className="p-6 flex items-center gap-5">
<div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">hourglass_empty</span>
</div>
<div className="flex-1">
<h4 className="font-bold text-slate-900 dark:text-white">Request Pending Approval</h4>
<p className="text-sm text-slate-500 dark:text-slate-400">Your request to join 'Smart SRS Generator' was sent to John Doe.</p>
</div>
<button className="text-sm font-bold text-slate-400 cursor-not-allowed">Cancel Request</button>
</div>
</div>
{/* SECTION 3: Already Member State */}
<div className="bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4 text-center sm:text-left">
<div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">check_circle</span>
</div>
<div>
<h4 className="font-bold text-slate-900 dark:text-white">You are already a member</h4>
<p className="text-sm text-slate-500 dark:text-slate-400">Redirecting to project dashboard...</p>
</div>
</div>
<button className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                        Go to Project
                    </button>
</div>
</div>
{/* SECTION 4: Link Expired Error State */}
<div className="bg-rose-50 dark:bg-rose-950/20 rounded-xl shadow-sm border border-rose-200 dark:border-rose-900/50 overflow-hidden mb-12">
<div className="p-8 text-center">
<div className="inline-flex h-16 w-16 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 items-center justify-center mb-4">
<span className="material-symbols-outlined !text-3xl">link_off</span>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Invitation Link Expired</h3>
<p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto mb-6">
                        This invitation link is no longer valid or has reached its maximum usage limit. Please contact the project owner for a new invite.
                    </p>
<div className="flex justify-center gap-4">
<button className="px-6 py-2 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold rounded-lg">Return Home</button>
<button className="px-6 py-2 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold rounded-lg">Contact Support</button>
</div>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default JoinProjectViaInviteLinkPage;
