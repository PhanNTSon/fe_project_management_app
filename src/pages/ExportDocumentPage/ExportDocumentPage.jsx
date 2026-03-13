import './ExportDocumentPage.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const ExportDocumentPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="mb-8">
<h2 className="text-3xl font-bold">Export Document</h2>
<p className="text-slate-500 dark:text-slate-400 mt-1">Configure your final Software Requirements Specification document.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Left Column: Settings */}
<div className="lg:col-span-8 space-y-8">
{/* Section 1: Format Selection */}
<section>
<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">grid_view</span>
                            Select Export Format
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/* PDF Card */}
<label className="relative flex flex-col p-5 bg-white dark:bg-slate-900 border-2 border-primary rounded-xl cursor-pointer ring-2 ring-primary/10">
<input defaultChecked className="sr-only" name="format" type="radio"/>
<div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
</div>
<span className="font-bold text-lg">PDF Document</span>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">High fidelity, non-editable format perfect for distribution.</p>
<div className="absolute top-4 right-4 text-primary">
<span className="material-symbols-outlined">check_circle</span>
</div>
</label>
{/* DOCX Card */}
<label className="relative flex flex-col p-5 bg-white dark:bg-slate-900 border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-700 rounded-xl cursor-pointer transition-all">
<input className="sr-only" name="format" type="radio"/>
<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-3xl">description</span>
</div>
<span className="font-bold text-lg">Word (DOCX)</span>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Standard office document, fully editable for stakeholder review.</p>
</label>
{/* Markdown Card */}
<label className="relative flex flex-col p-5 bg-white dark:bg-slate-900 border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-700 rounded-xl cursor-pointer transition-all">
<input className="sr-only" name="format" type="radio"/>
<div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-3xl">code</span>
</div>
<span className="font-bold text-lg">Markdown</span>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Clean text for technical documentation and Git repositories.</p>
</label>
</div>
</section>
{/* Section 2: Export Settings */}
<section className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
<h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">settings</span>
                            Document Settings
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
{/* Toggle 1 */}
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-sm">Include Diagrams</p>
<p className="text-xs text-slate-500">Export UML and flowcharts</p>
</div>
<button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out">
<span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
{/* Toggle 2 */}
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-sm">Version History</p>
<p className="text-xs text-slate-500">Attach full revision history</p>
</div>
<button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 dark:bg-slate-700 transition-colors duration-200 ease-in-out">
<span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
{/* Toggle 3 */}
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-sm">Comments &amp; Annotations</p>
<p className="text-xs text-slate-500">Show editor discussions</p>
</div>
<button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 dark:bg-slate-700 transition-colors duration-200 ease-in-out">
<span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
{/* Toggle 4 */}
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-sm">Change Log</p>
<p className="text-xs text-slate-500">Summary of recent changes</p>
</div>
<button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out">
<span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
</div>
</section>
</div>
{/* Right Column: Preview & Actions */}
<div className="lg:col-span-4 space-y-6">
{/* Section 3: Document Preview */}
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
<span className="text-xs font-bold uppercase tracking-wider text-slate-500">Live Preview</span>
<span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">24 Pages</span>
</div>
<div className="p-6 bg-slate-100 dark:bg-slate-950 flex flex-col gap-4">
{/* Cover Page Mockup */}
<div className="aspect-[1/1.4] bg-white dark:bg-slate-900 shadow-md rounded-sm p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-primary text-3xl">auto_stories</span>
</div>
<div className="w-24 h-2 bg-slate-200 dark:bg-slate-800 mb-2 rounded"></div>
<div className="w-32 h-3 bg-slate-300 dark:bg-slate-700 mb-6 rounded"></div>
<div className="space-y-1.5 w-full">
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded"></div>
<div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded"></div>
<div className="w-3/4 h-1 bg-slate-100 dark:bg-slate-800 rounded mx-auto"></div>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 w-full">
<div className="w-16 h-2 bg-primary/20 mx-auto rounded"></div>
</div>
</div>
{/* TOC Mockup (Overlapping) */}
<div className="p-4 bg-white dark:bg-slate-900 shadow-lg rounded-sm border border-slate-200 dark:border-slate-800 transform rotate-2">
<h4 className="text-[10px] font-bold mb-3 text-slate-400">TABLE OF CONTENTS</h4>
<div className="space-y-2">
<div className="flex justify-between items-center">
<div className="w-1/2 h-1.5 bg-slate-200 dark:bg-slate-800 rounded"></div>
<div className="w-4 h-1.5 bg-slate-100 dark:bg-slate-800 rounded"></div>
</div>
<div className="flex justify-between items-center pl-4">
<div className="w-1/3 h-1.5 bg-slate-100 dark:bg-slate-800 rounded"></div>
<div className="w-4 h-1.5 bg-slate-100 dark:bg-slate-800 rounded"></div>
</div>
<div className="flex justify-between items-center">
<div className="w-2/3 h-1.5 bg-slate-200 dark:bg-slate-800 rounded"></div>
<div className="w-4 h-1.5 bg-slate-100 dark:bg-slate-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
{/* Actions Panel */}
<div className="flex flex-col gap-3">
<button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
<span className="material-symbols-outlined">rocket_launch</span>
                            Export Now
                        </button>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-semibold transition-colors">
<span className="material-symbols-outlined text-lg">download</span>
                                Download
                            </button>
<button className="flex items-center justify-center gap-2 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-semibold transition-colors">
<span className="material-symbols-outlined text-lg">mail</span>
                                Send Email
                            </button>
</div>
</div>
{/* Recent Exports */}
<div className="p-5 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/10">
<h4 className="text-sm font-bold text-primary mb-3">Quick Tip</h4>
<p className="text-xs text-primary/80 leading-relaxed italic">
                            "Exporting as Markdown allows you to easily sync these requirements with your GitHub repository's wiki or README files."
                        </p>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default ExportDocumentPage;
