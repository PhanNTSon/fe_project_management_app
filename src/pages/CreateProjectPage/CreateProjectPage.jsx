import './CreateProjectPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const CreateProjectPage = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="flex flex-1 justify-center">
        <div className="flex flex-col max-w-[800px] flex-1 gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Start a new project</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base">Fill in the details below to get your team up and running. You can change these settings later.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col gap-8">
              <div className="grid grid-cols-1 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Project Name</span>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary p-3 text-base border outline-none" placeholder="e.g. Q4 Marketing Campaign" type="text"/>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Description</span>
                  <textarea className="w-full min-h-[120px] rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary p-3 text-base resize-none border outline-none" placeholder="What's this project about? Keep it brief but descriptive."></textarea>
                </label>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Select Template</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative flex flex-col p-4 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <span className="material-symbols-outlined text-primary">view_kanban</span>
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-slate-100">Agile</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sprints, backlogs, and boards.</p>
                  </div>
                  <div className="relative flex flex-col p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <span className="material-symbols-outlined text-slate-400">waterfall_chart</span>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-slate-100">Waterfall</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sequential phases and milestones.</p>
                  </div>
                  <div className="relative flex flex-col p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <span className="material-symbols-outlined text-slate-400">add_circle</span>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-slate-100">Blank</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Start from scratch with zero setup.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Privacy & Visibility</span>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input defaultChecked className="w-5 h-5 text-primary border-slate-300 focus:ring-primary focus:ring-offset-0" name="visibility" type="radio"/>
                    <div className="flex flex-col">
                      <span className="font-medium">Private</span>
                      <span className="text-xs text-slate-500">Only invited members can see</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-5 h-5 text-primary border-slate-300 focus:ring-primary focus:ring-offset-0" name="visibility" type="radio"/>
                    <div className="flex flex-col">
                      <span className="font-medium">Public</span>
                      <span className="text-xs text-slate-500">Visible to everyone in your org</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Collaborators</span>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                    <input className="w-full pl-10 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary p-3 text-base border outline-none" placeholder="Enter team member email" type="email"/>
                  </div>
                  <button className="px-6 rounded-lg bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-colors">Invite</button>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 flex flex-col md:flex-row justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
              <button onClick={() => navigate('/projects')} className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 font-bold hover:bg-white dark:hover:bg-slate-800 transition-colors">Cancel</button>
              <button onClick={() => navigate('/projects/detail')} className="px-8 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">Create Project</button>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
            <span className="material-symbols-outlined text-primary">info</span>
            <div>
              <p className="text-sm font-semibold text-primary">Quick Tip</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">The Agile template automatically sets up a Kanban board and a 2-week sprint cycle for you.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateProjectPage;
