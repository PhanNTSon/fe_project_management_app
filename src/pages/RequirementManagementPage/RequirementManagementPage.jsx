import './RequirementManagementPage.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { getFunctionalRequirements, getNonFunctionalRequirements } from '../../api/projectService';

const RequirementRow = ({ id, title, description, category, type }) => (
    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
        <td className="px-6 py-4 text-sm font-bold text-primary">REQ-{id}</td>
        <td className="px-6 py-4">
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title || category}</span>
                {description && (
                    <span className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-xs">{description}</span>
                )}
            </div>
        </td>
        <td className="px-6 py-4 text-center">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                type === 'functional'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
            }`}>
                {type === 'functional' ? 'Functional' : 'Non-Functional'}
            </span>
        </td>
        <td className="px-6 py-4 text-right">
            <button className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all opacity-0 group-hover:opacity-100">
                <span className="material-symbols-outlined text-xl">edit</span>
            </button>
        </td>
    </tr>
);

const RequirementManagementPage = () => {
    const navigate = useNavigate();
    const { projectId } = useParams();
    const [activeTab, setActiveTab] = useState('all');
    const [functionalReqs, setFunctionalReqs] = useState([]);
    const [nonFunctionalReqs, setNonFunctionalReqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                setLoading(true);
                setError(null);
                const [fr, nfr] = await Promise.all([
                    getFunctionalRequirements(projectId),
                    getNonFunctionalRequirements(projectId),
                ]);
                setFunctionalReqs(fr);
                setNonFunctionalReqs(nfr);
            } catch (err) {
                setError('Failed to load requirements.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        if (projectId) fetchAll();
    }, [projectId]);

    const displayedReqs = (() => {
        if (activeTab === 'functional') return functionalReqs.map(r => ({ ...r, type: 'functional', title: r.title }));
        if (activeTab === 'non-functional') return nonFunctionalReqs.map(r => ({ ...r, type: 'non-functional', title: r.category }));
        return [
            ...functionalReqs.map(r => ({ ...r, type: 'functional' })),
            ...nonFunctionalReqs.map(r => ({ ...r, type: 'non-functional', title: r.category })),
        ];
    })();

    const total = functionalReqs.length + nonFunctionalReqs.length;

    return (
        <DashboardLayout>
            <div className="flex-1 p-6 md:p-10 overflow-y-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                            <Link to="/projects" className="hover:text-primary">Projects</Link>
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            <Link to={`/projects/${projectId}`} className="hover:text-primary">Project</Link>
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            <span className="text-slate-900 dark:text-slate-100 font-semibold">Requirements</span>
                        </nav>
                        <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight">
                            Requirement Management
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                            Manage, prioritize and track lifecycle of product requirements.
                        </p>
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                        <button
                            onClick={() => navigate(`/projects/${projectId}/export`)}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                            <span className="material-symbols-outlined text-lg">file_download</span>
                            Export
                        </button>
                        <button
                            onClick={() => navigate(`/projects/${projectId}/srs-editor`)}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                        >
                            <span className="material-symbols-outlined text-lg">add_circle</span>
                            Add Requirement
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex flex-col gap-6">
                    <div className="flex border-b border-slate-200 dark:border-slate-800 w-full overflow-x-auto">
                        {[
                            { key: 'all', label: `All Requirements (${total})` },
                            { key: 'functional', label: `Functional (${functionalReqs.length})` },
                            { key: 'non-functional', label: `Non-Functional (${nonFunctionalReqs.length})` },
                        ].map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`border-b-2 px-4 pb-3 pt-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                                    activeTab === tab.key
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Loading */}
                    {loading && (
                        <div className="flex items-center justify-center py-16">
                            <div className="flex items-center gap-3 text-slate-500">
                                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                <span>Loading requirements…</span>
                            </div>
                        </div>
                    )}

                    {/* Error */}
                    {!loading && error && (
                        <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
                            <span className="material-symbols-outlined">error</span>
                            {error}
                        </div>
                    )}

                    {/* Table */}
                    {!loading && !error && (
                        <div className="@container">
                            {displayedReqs.length === 0 ? (
                                <div className="flex flex-col items-center gap-3 py-16 text-center">
                                    <span className="material-symbols-outlined text-4xl text-slate-300">checklist</span>
                                    <p className="text-slate-500">No requirements found for this project yet.</p>
                                </div>
                            ) : (
                                <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-50 dark:bg-slate-800/50">
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-24">ID</th>
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Requirement</th>
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-40 text-center">Type</th>
                                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-24 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                            {displayedReqs.map((req) => (
                                                <RequirementRow
                                                    key={`${req.type}-${req.requirementId}`}
                                                    id={req.requirementId}
                                                    title={req.title}
                                                    description={req.description}
                                                    category={req.category}
                                                    type={req.type}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default RequirementManagementPage;
