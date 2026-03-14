import './ProjectList.css';
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { getMyProjects, deleteProject } from '../../api/projectService';
import { AppContext } from '../../context/AppContext';
import { parseApiError, logApiError } from '../../api/apiErrorUtils';

const ProjectList = () => {
    const navigate = useNavigate();
    const { jwt } = useContext(AppContext);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteError, setDeleteError] = useState(null);
    const [deletingId, setDeletingId] = useState(null);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getMyProjects();
            setProjects(data);
        } catch (err) {
            logApiError(err, 'ProjectList.fetchProjects');
            setError(parseApiError(err, 'Không thể tải danh sách dự án. Vui lòng thử lại.'));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (jwt) fetchProjects();
    }, [jwt]);

    const handleDelete = async (e, projectId) => {
        e.stopPropagation();
        if (!window.confirm('Are you sure you want to delete this project?')) return;
        try {
            setDeletingId(projectId);
            setDeleteError(null);
            await deleteProject(projectId);
            setProjects(prev => prev.filter(p => p.projectId !== projectId));
        } catch (err) {
            logApiError(err, 'ProjectList.handleDelete');
            setDeleteError(parseApiError(err, 'Không thể xóa dự án. Vui lòng thử lại.'));
        } finally {
            setDeletingId(null);
        }
    };

    // Icon colors cycling for visual variety
    const iconColors = [
        'text-primary bg-blue-50 dark:bg-blue-900/30',
        'text-purple-600 bg-purple-50 dark:bg-purple-900/30',
        'text-emerald-600 bg-green-50 dark:bg-green-900/30',
        'text-orange-600 bg-orange-50 dark:bg-orange-900/30',
        'text-rose-600 bg-rose-50 dark:bg-rose-900/30',
        'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30',
    ];
    const icons = ['folder', 'analytics', 'rocket_launch', 'security', 'campaign', 'cloud_sync'];

    return (
        <DashboardLayout>
            <div className="max-w-[1200px] mx-auto w-full">
                {/* Page Tabs */}
                <div className="mb-6">
                    <div className="flex border-b border-slate-200 dark:border-slate-800 gap-8">
                        <span className="flex items-center border-b-2 border-primary text-primary pb-3 font-semibold text-sm">
                            All Projects
                        </span>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex flex-col lg:flex-row gap-4 mb-8">
                    <div className="w-full lg:max-w-md ml-auto">
                        <div className="flex w-full items-stretch rounded-lg h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="text-slate-400 flex items-center justify-center pl-4">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input
                                className="form-input flex w-full border-none bg-transparent focus:outline-0 focus:ring-0 h-full placeholder:text-slate-400 px-4 pl-2 text-sm font-normal"
                                placeholder="Search by name..."
                            />
                        </div>
                    </div>
                </div>

                {/* States */}
                {loading && (
                    <div className="flex items-center justify-center py-24">
                        <div className="flex items-center gap-3 text-slate-500">
                            <span className="material-symbols-outlined animate-spin">progress_activity</span>
                            <span className="font-medium">Loading projects…</span>
                        </div>
                    </div>
                )}

                {!loading && error && (
                    <div className="flex flex-col items-center gap-4 py-24 text-center">
                        <span className="material-symbols-outlined text-4xl text-red-400">error</span>
                        <p className="text-slate-500">{error}</p>
                        <button onClick={fetchProjects} className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold">
                            Retry
                        </button>
                    </div>
                )}

                {/* Delete error toast */}
                {deleteError && (
                    <div className="flex items-center gap-3 p-4 mb-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
                        <span className="material-symbols-outlined text-lg flex-shrink-0">error</span>
                        <span className="flex-1">{deleteError}</span>
                        <button onClick={() => setDeleteError(null)} className="text-red-400 hover:text-red-600">
                            <span className="material-symbols-outlined text-lg">close</span>
                        </button>
                    </div>
                )}

                {!loading && !error && projects.length === 0 && (
                    <div className="flex flex-col items-center gap-4 py-24 text-center">
                        <span className="material-symbols-outlined text-5xl text-slate-300">folder_open</span>
                        <p className="text-slate-500 text-lg">You don't have any projects yet.</p>
                        <button onClick={() => navigate('/projects/new')} className="px-6 py-3 rounded-lg bg-primary text-white font-semibold">
                            Create your first project
                        </button>
                    </div>
                )}

                {/* Project Grid */}
                {!loading && !error && projects.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, idx) => (
                            <div
                                key={project.projectId}
                                onClick={() => navigate(`/projects/${project.projectId}`)}
                                className="group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary/40 transition-all cursor-pointer p-6 flex flex-col gap-4"
                            >
                                {/* Icon */}
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconColors[idx % iconColors.length]}`}>
                                    <span className="material-symbols-outlined text-[22px]">{icons[idx % icons.length]}</span>
                                </div>

                                {/* Title & description */}
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base leading-snug">
                                        {project.projectName}
                                    </h3>
                                    {project.description && (
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                                            {project.description}
                                        </p>
                                    )}
                                </div>

                                {/* Footer with actions */}
                                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                                    <span className="text-xs text-slate-400 font-medium">ID: {project.projectId}</span>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(`/projects/${project.projectId}/settings`);
                                            }}
                                            className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all opacity-0 group-hover:opacity-100"
                                            title="Settings"
                                        >
                                            <span className="material-symbols-outlined text-[18px]">settings</span>
                                        </button>
                                        <button
                                            onClick={(e) => handleDelete(e, project.projectId)}
                                            disabled={deletingId === project.projectId}
                                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all opacity-0 group-hover:opacity-100"
                                            title="Delete project"
                                        >
                                            {deletingId === project.projectId
                                                ? <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                                                : <span className="material-symbols-outlined text-[18px]">delete</span>
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default ProjectList;
