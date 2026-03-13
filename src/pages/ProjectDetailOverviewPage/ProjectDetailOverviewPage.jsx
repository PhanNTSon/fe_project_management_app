import './ProjectDetailOverviewPage.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { getMyProjects } from '../../api/projectService';

const ProjectDetailOverviewPage = () => {
    const navigate = useNavigate();
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setLoading(true);
                const projects = await getMyProjects();
                const found = projects.find(p => String(p.projectId) === String(projectId));
                if (!found) {
                    setError('Project not found.');
                } else {
                    setProject(found);
                }
            } catch (err) {
                setError('Failed to load project.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        if (projectId) fetchProject();
    }, [projectId]);

    return (
        <DashboardLayout>
            <div className="flex-1 p-6 md:p-10 overflow-y-auto">
                {/* Top Navbar */}
                <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 flex items-center justify-between z-10 -mx-6 md:-mx-10 -mt-6 md:-mt-10 mb-8 px-6 md:px-10">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <Link to="/projects" className="hover:text-primary">Projects</Link>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            </div>
                            {loading ? (
                                <div className="h-5 w-40 bg-slate-200 dark:bg-slate-700 rounded animate-pulse mt-1" />
                            ) : (
                                <h2 className="text-lg font-bold leading-tight">{project?.projectName ?? 'Project'}</h2>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => navigate(`/projects/${projectId}/settings`)}
                            className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            Edit Project
                        </button>
                        <button
                            onClick={() => navigate(`/projects/${projectId}/export`)}
                            className="px-4 py-2 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
                        >
                            Share Report
                        </button>
                    </div>
                </header>

                {/* Loading */}
                {loading && (
                    <div className="flex items-center justify-center py-24">
                        <div className="flex items-center gap-3 text-slate-500">
                            <span className="material-symbols-outlined animate-spin">progress_activity</span>
                            <span>Loading project…</span>
                        </div>
                    </div>
                )}

                {/* Error */}
                {!loading && error && (
                    <div className="flex flex-col items-center gap-4 py-24 text-center">
                        <span className="material-symbols-outlined text-4xl text-red-400">error</span>
                        <p className="text-slate-500">{error}</p>
                        <button onClick={() => navigate('/projects')} className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold">
                            Back to Projects
                        </button>
                    </div>
                )}

                {/* Content */}
                {!loading && project && (
                    <div className="max-w-6xl mx-auto space-y-8">
                        {/* Page Title */}
                        <div className="space-y-1">
                            <h3 className="text-3xl font-black tracking-tight">Project Overview</h3>
                            <p className="text-slate-500 dark:text-slate-400">
                                Key information and navigation for this project.
                            </p>
                        </div>

                        {/* Project Info Card */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                            <h4 className="font-bold text-lg mb-4">Project Summary</h4>
                            <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Project Name</p>
                                        <p className="text-slate-900 dark:text-slate-100 font-semibold">{project.projectName}</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Project ID</p>
                                        <p className="text-slate-900 dark:text-slate-100 font-semibold">#{project.projectId}</p>
                                    </div>
                                </div>
                                {project.description && (
                                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Description</p>
                                        <p className="text-slate-900 dark:text-slate-100 whitespace-pre-wrap">{project.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Quick Navigation Cards */}
                        <div>
                            <h4 className="font-bold text-lg mb-4">Quick Access</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { label: 'Requirements', icon: 'checklist', path: `/projects/${projectId}/requirements`, color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' },
                                    { label: 'Use Case Builder', icon: 'account_tree', path: `/projects/${projectId}/use-case-builder`, color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/30' },
                                    { label: 'SRS Editor', icon: 'description', path: `/projects/${projectId}/srs-editor`, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30' },
                                    { label: 'Review & Approval', icon: 'rate_review', path: `/projects/${projectId}/reviews`, color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/30' },
                                    { label: 'Members', icon: 'group', path: `/projects/${projectId}/members`, color: 'text-rose-600 bg-rose-50 dark:bg-rose-900/30' },
                                    { label: 'Settings', icon: 'settings', path: `/projects/${projectId}/settings`, color: 'text-slate-600 bg-slate-100 dark:bg-slate-800' },
                                ].map(item => (
                                    <button
                                        key={item.label}
                                        onClick={() => navigate(item.path)}
                                        className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 hover:shadow-sm transition-all text-left"
                                    >
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color}`}>
                                            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                        </div>
                                        <span className="font-semibold text-slate-800 dark:text-slate-200">{item.label}</span>
                                        <span className="material-symbols-outlined text-slate-400 ml-auto text-[18px]">chevron_right</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default ProjectDetailOverviewPage;
