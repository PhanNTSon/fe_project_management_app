import './CreateProjectPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { createProject } from '../../api/projectService';
import { parseApiError, logApiError } from '../../api/apiErrorUtils';

const CreateProjectPage = () => {
    const navigate = useNavigate();
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!projectName.trim()) {
            setError('Project name is required.');
            return;
        }
        if (projectName.length > 255) {
            setError('Project name cannot exceed 255 characters.');
            return;
        }
        if (description.length > 2000) {
            setError('Description cannot exceed 2000 characters.');
            return;
        }
        try {
            setSubmitting(true);
            setError(null);
            const newProject = await createProject({ projectName: projectName.trim(), description: description.trim() });
            navigate(`/projects/${newProject.projectId}`);
        } catch (err) {
            logApiError(err, 'CreateProjectPage');
            setError(parseApiError(err, 'Không thể tạo dự án. Vui lòng thử lại.'));
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <DashboardLayout>
            <div className="flex flex-1 justify-center">
                <div className="flex flex-col max-w-[800px] flex-1 gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold tracking-tight">Start a new project</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base">
                            Fill in the details below to get your team up and running. You can change these settings later.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="p-6 md:p-8 flex flex-col gap-8">

                            {/* Error Alert */}
                            {error && (
                                <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
                                    <span className="material-symbols-outlined text-lg">error</span>
                                    {error}
                                </div>
                            )}

                            <div className="grid grid-cols-1 gap-6">
                                {/* Project Name */}
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Project Name <span className="text-red-500">*</span>
                                    </span>
                                    <input
                                        className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary p-3 text-base border outline-none"
                                        placeholder="e.g. Q4 Marketing Campaign"
                                        type="text"
                                        value={projectName}
                                        onChange={e => setProjectName(e.target.value)}
                                        maxLength={255}
                                        disabled={submitting}
                                    />
                                    <span className="text-xs text-slate-400 text-right">{projectName.length}/255</span>
                                </label>

                                {/* Description */}
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Description
                                    </span>
                                    <textarea
                                        className="w-full min-h-[120px] rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary p-3 text-base resize-none border outline-none"
                                        placeholder="What's this project about? Keep it brief but descriptive."
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                        maxLength={2000}
                                        disabled={submitting}
                                    />
                                    <span className="text-xs text-slate-400 text-right">{description.length}/2000</span>
                                </label>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 flex flex-col md:flex-row justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
                            <button
                                type="button"
                                onClick={() => navigate('/projects')}
                                disabled={submitting}
                                className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 font-bold hover:bg-white dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={submitting || !projectName.trim()}
                                className="px-8 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 flex items-center gap-2"
                            >
                                {submitting && <span className="material-symbols-outlined text-lg animate-spin">progress_activity</span>}
                                {submitting ? 'Creating…' : 'Create Project'}
                            </button>
                        </div>
                    </form>

                    {/* Tip */}
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <span className="material-symbols-outlined text-primary">info</span>
                        <div>
                            <p className="text-sm font-semibold text-primary">Quick Tip</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                You can invite members and configure settings after the project is created.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CreateProjectPage;
