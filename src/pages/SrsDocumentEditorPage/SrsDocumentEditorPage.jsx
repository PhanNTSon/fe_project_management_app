import './SrsDocumentEditorPage.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const SrsDocumentEditorPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 flex flex-row overflow-hidden">
        {/* Left Side: Input Builder */}
<div className="flex w-1/2 flex-col border-r border-slate-200 bg-slate-50/50">
<div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
<h3 className="font-semibold text-slate-700 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">edit_note</span>
                        SRS Content Builder
                    </h3>
<div className="text-xs text-slate-400">All changes autosaved</div>
</div>
<div className="flex-1 overflow-y-auto p-6 srs-scroll">
<div className="space-y-6 max-w-2xl mx-auto">
{/* Section 1: Introduction */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100">
<span className="text-sm font-bold text-slate-700 uppercase tracking-wider">1. Introduction</span>
<span className="material-symbols-outlined text-slate-400 cursor-pointer">expand_less</span>
</div>
<div className="p-5 space-y-4">
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Purpose</label>
<textarea className="w-full rounded-lg border-slate-200 text-sm focus:ring-primary focus:border-primary" placeholder="Describe the purpose of this document..." rows="2">This document outlines the functional and non-functional requirements for the version 2.0 overhaul of the mobile application platform.</textarea>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Document Scope</label>
<textarea className="w-full rounded-lg border-slate-200 text-sm focus:ring-primary focus:border-primary" placeholder="Define the boundaries of the project..." rows="2"></textarea>
</div>
</div>
</div>
{/* Section 2: Overall Description */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100">
<span className="text-sm font-bold text-slate-700 uppercase tracking-wider">2. Overall Description</span>
<span className="material-symbols-outlined text-slate-400 cursor-pointer">expand_more</span>
</div>
</div>
{/* Section 3: System Features */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100">
<span className="text-sm font-bold text-slate-700 uppercase tracking-wider">3. System Features</span>
<span className="material-symbols-outlined text-slate-400 cursor-pointer">expand_less</span>
</div>
<div className="p-5 space-y-4">
<div className="p-4 border border-blue-100 bg-blue-50/50 rounded-lg">
<div className="flex items-center justify-between mb-3">
<input className="bg-transparent border-none p-0 text-sm font-bold text-slate-800 focus:ring-0 w-full" type="text" value="User Authentication Service"/>
<span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-primary uppercase">High Priority</span>
</div>
<textarea className="w-full bg-white border-slate-200 rounded-lg text-sm mb-3" placeholder="Feature description..." rows="2">Enables users to sign up, log in, and manage their session securely via OAuth 2.0.</textarea>
<div className="flex gap-2">
<div className="flex-1">
<label className="block text-[10px] font-bold text-slate-400 uppercase">Primary Actor</label>
<select className="w-full text-xs rounded border-slate-200 py-1">
<option>End User</option>
<option>Admin</option>
<option>System</option>
</select>
</div>
<div className="flex-1">
<label className="block text-[10px] font-bold text-slate-400 uppercase">Status</label>
<select className="w-full text-xs rounded border-slate-200 py-1">
<option>Defined</option>
<option>In Progress</option>
<option>Reviewed</option>
</select>
</div>
</div>
</div>
<button className="w-full py-2 border-2 border-dashed border-slate-200 rounded-lg text-xs font-semibold text-slate-400 hover:border-primary hover:text-primary flex items-center justify-center gap-1 transition-colors">
<span className="material-symbols-outlined text-sm">add_circle</span>
                                    Add New Feature
                                </button>
</div>
</div>
{/* Section 4: Use Case Builder */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100">
<span className="text-sm font-bold text-slate-700 uppercase tracking-wider">4. Use Case Builder</span>
<span className="material-symbols-outlined text-slate-400 cursor-pointer">expand_less</span>
</div>
<div className="p-5 space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1">Use Case Name</label>
<input className="w-full rounded-lg border-slate-200 text-sm" type="text" value="Biometric Login"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1">ID</label>
<input className="w-full rounded-lg border-slate-200 text-sm" type="text" value="UC-001"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1">Pre-conditions</label>
<input className="w-full rounded-lg border-slate-200 text-sm" placeholder="e.g. User is registered" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1">Main Flow</label>
<textarea className="w-full rounded-lg border-slate-200 text-sm" placeholder="1. User opens app..." rows="3"></textarea>
</div>
</div>
</div>
{/* Section 5: Functional Requirements */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100">
<span className="text-sm font-bold text-slate-700 uppercase tracking-wider">5. Functional Requirements</span>
<span className="material-symbols-outlined text-slate-400 cursor-pointer">expand_more</span>
</div>
</div>
{/* Section 6: Non-Functional */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100">
<span className="text-sm font-bold text-slate-700 uppercase tracking-wider">6. Non-Functional Requirements</span>
<span className="material-symbols-outlined text-slate-400 cursor-pointer">expand_less</span>
</div>
<div className="p-5 space-y-4">
<div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
<div className="h-8 w-8 rounded bg-white flex items-center justify-center border border-slate-200 text-primary shadow-sm">
<span className="material-symbols-outlined text-lg">bolt</span>
</div>
<div className="flex-1">
<div className="text-xs font-bold text-slate-700">Performance</div>
<div className="text-[11px] text-slate-500">App must load home screen within 2s</div>
</div>
<span className="material-symbols-outlined text-slate-300 text-lg">edit</span>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
<div className="h-8 w-8 rounded bg-white flex items-center justify-center border border-slate-200 text-primary shadow-sm">
<span className="material-symbols-outlined text-lg">lock</span>
</div>
<div className="flex-1">
<div className="text-xs font-bold text-slate-700">Security</div>
<div className="text-[11px] text-slate-500">Data encryption at rest (AES-256)</div>
</div>
<span className="material-symbols-outlined text-slate-300 text-lg">edit</span>
</div>
</div>
</div>
{/* Section 7: Context Diagram (Draw.io) */}
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[600px] mb-4">
<div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100 shrink-0">
<span className="text-sm font-bold text-slate-700 uppercase tracking-wider">7. Context Diagram</span>
<span className="material-symbols-outlined text-slate-400 cursor-pointer">expand_less</span>
</div>
<div className="flex-1 relative bg-white p-1">
  <iframe className="w-full h-full border-none absolute inset-0" src="https://embed.diagrams.net/?embed=1&ui=min&spin=1&modified=unsavedChanges&proto=json" title="Draw.io Context Diagram Editor"></iframe>
</div>
</div>
</div>
</div>
</div>
{/* Right Side: Live Document Preview */}
<div className="flex w-1/2 flex-col bg-slate-100">
<div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
<h3 className="font-semibold text-slate-700 flex items-center gap-2">
<span className="material-symbols-outlined text-emerald-500">visibility</span>
                        Live Preview
                    </h3>
<div className="flex items-center gap-2 bg-slate-100 rounded-md p-1">
<button className="px-3 py-1 text-xs font-medium rounded bg-white shadow-sm text-slate-700">Page View</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-700">Outline</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-12 srs-scroll flex justify-center">
<div className="w-full max-w-[800px] bg-white shadow-xl rounded-sm p-16 min-h-[1100px] border border-slate-200 text-slate-800">
<div className="text-center mb-16 border-b border-slate-100 pb-12">
<h1 className="text-3xl font-extrabold text-slate-900 mb-2">Software Requirements Specification</h1>
<p className="text-lg text-slate-500 mb-8">Mobile App Redesign Project v2.0</p>
<div className="grid grid-cols-2 text-left text-xs gap-y-2 mt-4 max-w-sm mx-auto text-slate-500 font-medium">
<span>Date Created:</span> <span className="text-slate-900">Oct 24, 2023</span>
<span>Status:</span> <span className="text-primary">DRAFT</span>
<span>Authors:</span> <span className="text-slate-900">Product Engineering Team</span>
</div>
</div>
{/* 1.0 Introduction */}
<section className="mb-10">
<h2 className="text-xl font-bold text-slate-900 mb-4 flex items-baseline gap-2">
<span className="text-slate-400 font-medium">1.0</span> Introduction
                            </h2>
<div className="pl-8 space-y-6">
<div>
<h3 className="text-sm font-bold text-slate-700 mb-2">1.1 Purpose</h3>
<p className="text-sm leading-relaxed text-slate-600">This document outlines the functional and non-functional requirements for the version 2.0 overhaul of the mobile application platform. It serves as the single source of truth for the development team, designers, and stakeholders throughout the project lifecycle.</p>
</div>
<div>
<h3 className="text-sm font-bold text-slate-700 mb-2">1.2 Scope of Product</h3>
<p className="text-sm leading-relaxed text-slate-600 italic border-l-4 border-slate-100 pl-4 bg-slate-50 py-2">Section content pending input from content builder...</p>
</div>
</div>
</section>
{/* 2.0 System Features */}
<section className="mb-10">
<h2 className="text-xl font-bold text-slate-900 mb-4 flex items-baseline gap-2">
<span className="text-slate-400 font-medium">2.0</span> System Features
                            </h2>
<div className="pl-8">
<div className="mb-6">
<h3 className="text-sm font-bold text-slate-700 mb-2">2.1 User Authentication Service</h3>
<p className="text-sm leading-relaxed text-slate-600 mb-3">Enables users to sign up, log in, and manage their session securely via OAuth 2.0. Support for multiple identity providers including Google, Apple, and Email/Password.</p>
<table className="w-full text-xs text-left border-collapse border border-slate-200 mb-4">
<thead>
<tr className="bg-slate-50">
<th className="border border-slate-200 px-3 py-2">Requirement ID</th>
<th className="border border-slate-200 px-3 py-2">Description</th>
<th className="border border-slate-200 px-3 py-2">Priority</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border border-slate-200 px-3 py-2 font-mono text-primary">FR-AUTH-01</td>
<td className="border border-slate-200 px-3 py-2">The system shall validate password complexity.</td>
<td className="border border-slate-200 px-3 py-2">High</td>
</tr>
<tr>
<td className="border border-slate-200 px-3 py-2 font-mono text-primary">FR-AUTH-02</td>
<td className="border border-slate-200 px-3 py-2">The system shall support biometrics (FaceID/Fingerprint).</td>
<td className="border border-slate-200 px-3 py-2">Medium</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/* 3.0 System Architecture */}
<section className="mb-10">
<h2 className="text-xl font-bold text-slate-900 mb-4 flex items-baseline gap-2">
<span className="text-slate-400 font-medium">3.0</span> System Architecture
                            </h2>
<div className="pl-8">
<div className="w-full border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center">
<div className="w-full h-48 bg-white border border-slate-100 rounded-lg shadow-sm flex flex-col items-center justify-center gap-2 overflow-hidden relative">
<div className="absolute inset-0 opacity-10 flex flex-wrap gap-4 p-4 pointer-events-none">
<div className="h-10 w-24 bg-primary rounded-md"></div>
<div className="h-10 w-24 bg-primary rounded-md"></div>
<div className="h-10 w-24 bg-primary rounded-md"></div>
<div className="h-10 w-24 bg-primary rounded-md"></div>
</div>
<span className="material-symbols-outlined text-4xl text-slate-300">account_tree</span>
<span className="text-xs font-medium text-slate-400">Architecture Diagram Placeholder</span>
</div>
<p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">Figure 3.1: High-level System Topology</p>
</div>
</div>
</section>
{/* 4.0 Non-Functional */}
<section>
<h2 className="text-xl font-bold text-slate-900 mb-4 flex items-baseline gap-2">
<span className="text-slate-400 font-medium">4.0</span> Non-Functional Requirements
                            </h2>
<div className="pl-8 grid grid-cols-2 gap-4">
<div className="p-3 border border-slate-200 rounded-lg bg-slate-50">
<h4 className="text-xs font-bold text-slate-700 uppercase mb-1">Performance</h4>
<p className="text-[11px] text-slate-600">The mobile application shall have a cold start time of no more than 1.5 seconds on a modern smartphone device.</p>
</div>
<div className="p-3 border border-slate-200 rounded-lg bg-slate-50">
<h4 className="text-xs font-bold text-slate-700 uppercase mb-1">Scalability</h4>
<p className="text-[11px] text-slate-600">The backend architecture shall support up to 10,000 concurrent user sessions using horizontal autoscaling.</p>
</div>
</div>
</section>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default SrsDocumentEditorPage;
