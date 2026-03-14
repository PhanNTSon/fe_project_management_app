import './SrsDocumentEditorPage.css';
import React from 'react';
import { Link } from 'react-router-dom';

const SrsDocumentEditorPage = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Left Side: Input Builder */}
      <div className="w-1/2 flex flex-col border-r border-slate-200 bg-slate-50/50">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
          <h3 className="font-semibold text-slate-700 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">edit_note</span>
            SRS Content Builder
          </h3>
          <div className="text-xs text-slate-400">All changes autosaved</div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 srs-scroll">
          <div className="space-y-6 max-w-2xl mx-auto">
            {/* Section 1: Detail Information */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">1. Detail Information</span>
                <span className="material-symbols-outlined text-slate-400 cursor-pointer">expand_less</span>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Vision & Scope</label>
                  <textarea className="w-full rounded-lg border border-slate-200 text-sm focus:ring-primary focus:border-primary" placeholder="Describe the vision and scope..." rows="3"></textarea>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Constraints</label>
                  <textarea className="w-full rounded-lg border border-slate-200 text-sm focus:ring-primary focus:border-primary" placeholder="Define the constraints..." rows="2"></textarea>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Context Diagram</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center text-slate-400 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-3xl block mb-2">image</span>
                    <span className="text-sm">Upload or draw context diagram</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Business Rules</label>
                  <textarea className="w-full rounded-lg border border-slate-200 text-sm focus:ring-primary focus:border-primary" placeholder="Define business rules..." rows="2"></textarea>
                </div>
              </div>
            </div>

            {/* Section 2: Usecases */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">2. Usecases</span>
                <span className="material-symbols-outlined text-slate-400 cursor-pointer">expand_less</span>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Diagram</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center text-slate-400 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-3xl block mb-2">account_tree</span>
                    <span className="text-sm">Upload or create usecase diagram</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Usecase List</label>
                  <div className="space-y-2">
                    <div className="p-3 border border-slate-200 rounded-lg hover:shadow-sm transition-shadow">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-700">UC-001: User Authentication</span>
                        <span className="material-symbols-outlined text-slate-400 text-sm">edit</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-3 py-2 border-2 border-dashed border-slate-200 rounded-lg text-xs font-semibold text-slate-400 hover:border-primary hover:text-primary flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-sm">add_circle</span>
                    Add Usecase
                  </button>
                </div>
              </div>
            </div>

            {/* Section 3: Functional Requirements */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">3. Functional Requirements</span>
                <span className="material-symbols-outlined text-slate-400 cursor-pointer">expand_less</span>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Functional List</label>
                  <div className="space-y-2">
                    <div className="p-3 border border-blue-200 bg-blue-50/50 rounded-lg hover:shadow-sm transition-shadow">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-slate-700 text-sm">FR-001: User Login</span>
                        <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-primary uppercase">High</span>
                      </div>
                      <p className="text-xs text-slate-600">Users must be able to login with email or biometrics</p>
                    </div>
                  </div>
                  <button className="w-full mt-3 py-2 border-2 border-dashed border-slate-200 rounded-lg text-xs font-semibold text-slate-400 hover:border-primary hover:text-primary flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-sm">add_circle</span>
                    Add Requirement
                  </button>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Functional Editor</label>
                  <textarea className="w-full rounded-lg border border-slate-200 text-sm focus:ring-primary focus:border-primary" placeholder="Edit selected functional requirement..." rows="3"></textarea>
                </div>
              </div>
            </div>

            {/* Section 4: Non-Functional Requirements */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">4. Non-Functional Requirements</span>
                <span className="material-symbols-outlined text-slate-400 cursor-pointer">expand_less</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { label: 'Usability', icon: 'accessibility_new' },
                  { label: 'Performance', icon: 'bolt' },
                  { label: 'Security', icon: 'lock' },
                  { label: 'Scalability', icon: 'trending_up' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className="h-8 w-8 rounded bg-white flex items-center justify-center border border-slate-200 text-primary shadow-sm">
                      <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-slate-700">{item.label}</div>
                      <input type="text" placeholder="Define requirement..." className="w-full text-[11px] text-slate-500 bg-transparent border-none focus:ring-0 p-0 mt-1" />
                    </div>
                    <span className="material-symbols-outlined text-slate-300 text-lg cursor-pointer hover:text-slate-400">edit</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side: Live Document Preview */}
      <div className="w-1/2 flex flex-col bg-slate-100">
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
              <p className="text-lg text-slate-500 mb-8">Project Name</p>
              <div className="grid grid-cols-2 text-left text-xs gap-y-2 mt-4 max-w-sm mx-auto text-slate-500 font-medium">
                <span>Date Created:</span> <span className="text-slate-900">—</span>
                <span>Status:</span> <span className="text-primary">DRAFT</span>
                <span>Authors:</span> <span className="text-slate-900">—</span>
              </div>
            </div>

            {/* 1. Detail Information */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-baseline gap-2">
                <span className="text-slate-400 font-medium">1.</span> Detail Information
              </h2>
              <div className="pl-8 space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-700 mb-2">1.1 Vision & Scope</h3>
                  <p className="text-sm leading-relaxed text-slate-600 italic border-l-4 border-slate-100 pl-4 bg-slate-50 py-2">Content pending from builder...</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-700 mb-2">1.2 Constraints</h3>
                  <p className="text-sm leading-relaxed text-slate-600 italic border-l-4 border-slate-100 pl-4 bg-slate-50 py-2">Content pending from builder...</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-700 mb-2">1.3 Context Diagram</h3>
                  <div className="w-full border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center">
                    <span className="material-symbols-outlined text-4xl text-slate-300">account_tree</span>
                    <span className="text-xs font-medium text-slate-400 mt-2">Diagram placeholder</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-700 mb-2">1.4 Business Rules</h3>
                  <p className="text-sm leading-relaxed text-slate-600 italic border-l-4 border-slate-100 pl-4 bg-slate-50 py-2">Content pending from builder...</p>
                </div>
              </div>
            </section>

            {/* 2. Usecases */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-baseline gap-2">
                <span className="text-slate-400 font-medium">2.</span> Usecases
              </h2>
              <div className="pl-8 space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-700 mb-2">2.1 Diagram</h3>
                  <div className="w-full border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-col items-center h-64">
                    <span className="material-symbols-outlined text-4xl text-slate-300">account_tree</span>
                    <span className="text-xs font-medium text-slate-400 mt-2">Usecase diagram placeholder</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-700 mb-2">2.2 Usecase List</h3>
                  <p className="text-sm leading-relaxed text-slate-600 italic border-l-4 border-slate-100 pl-4 bg-slate-50 py-2">Content pending from builder...</p>
                </div>
              </div>
            </section>

            {/* 3. Functional Requirements */}
            <section className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-baseline gap-2">
                <span className="text-slate-400 font-medium">3.</span> Functional Requirements
              </h2>
              <div className="pl-8">
                <p className="text-sm leading-relaxed text-slate-600 italic border-l-4 border-slate-100 pl-4 bg-slate-50 py-2">Content pending from builder...</p>
              </div>
            </section>

            {/* 4. Non-Functional Requirements */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-baseline gap-2">
                <span className="text-slate-400 font-medium">4.</span> Non-Functional Requirements
              </h2>
              <div className="pl-8 grid grid-cols-2 gap-4">
                <div className="p-3 border border-slate-200 rounded-lg bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-700 uppercase mb-1">Usability</h4>
                  <p className="text-[11px] text-slate-600 italic">Content pending from builder...</p>
                </div>
                <div className="p-3 border border-slate-200 rounded-lg bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-700 uppercase mb-1">Performance</h4>
                  <p className="text-[11px] text-slate-600 italic">Content pending from builder...</p>
                </div>
                <div className="p-3 border border-slate-200 rounded-lg bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-700 uppercase mb-1">Security</h4>
                  <p className="text-[11px] text-slate-600 italic">Content pending from builder...</p>
                </div>
                <div className="p-3 border border-slate-200 rounded-lg bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-700 uppercase mb-1">Scalability</h4>
                  <p className="text-[11px] text-slate-600 italic">Content pending from builder...</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SrsDocumentEditorPage;
