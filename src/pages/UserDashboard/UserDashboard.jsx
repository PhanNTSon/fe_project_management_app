import './UserDashboard.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatCard from '../../components/features/StatCard';
import ProjectCard from '../../components/features/ProjectCard';
import ActivityFeed from '../../components/features/ActivityFeed';

const UserDashboard = () => {
  const navigate = useNavigate();
  // Mock data for the dashboard
  const projects = [
    {
      id: 1,
      icon: "payments",
      iconColorClass: "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30",
      status: "In Progress",
      statusColorClass: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      title: "Billing System v2.0",
      description: "Overhaul of the existing subscription engine and payment gateway integration.",
      progress: 65,
      teamMembers: [
        { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGRKu1Y3efutqoJCy8wVT-X4ODR2HuztUyhBWWLt6VjE6orsS-SejR9qS5yXDUVrVaeRVJLs3Pd-P9HSvfcF4QYurrKsyNyEeIXcUHtRS9EgvyKKjxCmYqBoalG9oECMP1kBDRpXzBjr8jw5wd29BK9SXVQBDwKJ0YJ1HOts6g6hIquNlPqwOwJmuDNSSis5GSXbob9alBloBKpgykRdtxr1a6VAvN8ooUTHiGVhHEspQpuYjrHRBMKKcoLvhnplo8jPhFyGocSgY" },
        { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE0VjXA1F_HbEDuJtd5ndtrrcoxLk810nMnpjMczIk1qfNXCMgiy9dil3c2S-H64HnoF8GsU7SK6acp2neL4fCz1Vk6ave7S4vqTyRt3W8RhRxtoj7acc8db30ua5RX4Bjl2FPy_HrT3Pwhe5KAGYmB3nW1pKANGDhulOGWmkj4QWMI-xVmc3Ktnqk0uMSNaWsD-cyjilUyYCoINcPSrfF8iG_-D0xGr-drgP_NO9ifeQxHOzme8X-kfc0JMexujKUu-zulaCubWc" },
        {}, {}, {} // To trigger the +3 bubble
      ]
    },
    {
      id: 2,
      icon: "shield",
      iconColorClass: "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30",
      status: "Reviewing",
      statusColorClass: "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
      title: "Security Compliance Audit",
      description: "Meeting ISO 27001 requirements for the upcoming annual infrastructure audit.",
      progress: 40,
      teamMembers: [
        { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDV60I2azPboprnp7tYgCllSSjWOb6ILRfoMgGdgtd19k3m_Ogvja6iugasEevBfshJtX3qmyyQr5PdIkS7WLP9L07o_SPBmBkgA7n0B2gTFsGHKWCjfILo7e8Q9m3hMN4SOu-YS8V_8t9KFHVWFwphbz1XC-jS0xfc1JaC53YTyJ1Ic_0kI6wK9TIkaVRJWZJwFY-mAfksu102tX8DVoltG8VGvj89iH4ZtTD98lLE2dekFuAag1dfpQvQZCui8jA-WP_spS6eXg" },
        { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuABsHsktJXi96KeAyQUsQSCfFjPkuFaVGVnaV6MkYI3YLaBfOlliweJRnt7s-RQ9j9nsA5O205emF4fJSulHJO5Lus_m5-IL_A2R1z2CE6i8mBZz2zX8zBfYbk5cd6NFJvUKiNYnGO-c2Yw92PKZ4MnIycN413cIVgHQNqZA5qHQ68AMoAYbMsZO9qOe2NdcjbRB6dxXMhrYttEJ26E7aPtcVi-aO1hX0FL7DynRLUW9NUPKmtV_Q2pxvl4VivrmWFXsmqzyXSDOk8" }
      ]
    },
    {
      id: 3,
      icon: "cell_tower",
      iconColorClass: "text-rose-600 bg-rose-100 dark:bg-rose-900/30",
      status: "Planning",
      statusColorClass: "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400",
      title: "API Integration Layer",
      description: "Standardizing outbound communications with 3rd party logistics providers.",
      progress: 12,
      teamMembers: [
        { avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN8fbJMvyUSYtZ7mAcdXyV-46rGvBE4BFJy_XjCgqPMfMlrmD6bymHhd8iEtSwkbSRtkuSgJlIGl2ilExlD9Ux7Hn9jYfXmSvs6IlZfalAmhEjV7RfA7_9QUMGL5ySxktYG_gz4Pw_uD8g7Z7me3lShgrMgeOQcdDyQWrvxI_rp_jkoVjf__x8hJN4_N_IuUeZ736Y3eqTPW62sXrs6bKWpM3V7vfcuqAt_rYNi8NBvXBKJX_K9WntyQMI0TqwboUv6cEjEsK_vxI" }
      ]
    }
  ];

  const activities = [
    {
      icon: "edit",
      iconColorClass: "text-primary",
      iconBgColorClass: "bg-primary/10",
      userName: "Sarah Jenkins",
      action: "updated requirement",
      targetName: "#REQ-402",
      time: "2 hours ago"
    },
    {
      icon: "check",
      iconColorClass: "text-emerald-600",
      iconBgColorClass: "bg-emerald-100",
      userName: "Mike Ross",
      action: "approved 3 new requirements in",
      targetName: "Billing System",
      time: "5 hours ago"
    },
    {
      icon: "person_add",
      iconColorClass: "text-blue-600",
      iconBgColorClass: "bg-blue-100",
      userName: "Admin",
      action: "added",
      targetName: "Jason Lee to the team",
      time: "Yesterday"
    },
    {
      icon: "comment",
      iconColorClass: "text-amber-600",
      iconBgColorClass: "bg-amber-100",
      userName: "Sarah Jenkins",
      action: "left a comment on",
      targetName: "#REQ-112",
      time: "Oct 24, 2023"
    }
  ];

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h2>
          <p className="text-slate-500 dark:text-slate-400">Welcome back, here's what's happening with your requirements today.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filter
          </button>
          <button onClick={() => navigate('/projects/new')} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Create Project
          </button>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          icon="folder"
          colorClass="bg-blue-50 dark:bg-blue-900/20 text-blue-600"
          title="Total Projects"
          value="12"
          delta="+2 this month"
          deltaLabel="this month"
        />
        <StatCard 
          icon="description"
          colorClass="bg-purple-50 dark:bg-purple-900/20 text-purple-600"
          title="Active Requirements"
          value="148"
          delta="+15%"
          deltaLabel=""
        />
        <StatCard 
          icon="groups"
          colorClass="bg-orange-50 dark:bg-orange-900/20 text-orange-600"
          title="Team Members"
          value="24"
          delta="Stable"
          deltaLabel=""
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project List Cards */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Active Projects</h3>
            <Link className="text-sm font-medium text-primary hover:underline" to="/projects">View all projects</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}

            {/* Project Card 4 (Add New Mock) */}
            <div onClick={() => navigate('/projects/new')} className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-all cursor-pointer">
              <div className="h-12 w-12 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">add_circle</span>
              </div>
              <h4 className="font-bold text-slate-600 dark:text-slate-300">New Project</h4>
              <p className="text-xs text-slate-400 mt-1">Start a fresh requirement workspace</p>
            </div>
          </div>
        </div>

        {/* Sidebar Activity & Tasks */}
        <div className="space-y-8">
          <ActivityFeed activities={activities} />

          {/* Pending Approvals */}
          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/10 p-6">
            <h3 className="text-base font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
              Pending Approvals
            </h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-primary/10 flex items-center justify-between">
                <div className="text-xs">
                  <p className="font-bold text-slate-900 dark:text-white">API Endpoint V4</p>
                  <p className="text-slate-500">Architecture Review</p>
                </div>
                <span className="material-symbols-outlined text-slate-400 hover:text-emerald-500 cursor-pointer">check_circle</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-primary/10 flex items-center justify-between">
                <div className="text-xs">
                  <p className="font-bold text-slate-900 dark:text-white">Auth Flow UI</p>
                  <p className="text-slate-500">Design Consistency</p>
                </div>
                <span className="material-symbols-outlined text-slate-400 hover:text-emerald-500 cursor-pointer">check_circle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;

