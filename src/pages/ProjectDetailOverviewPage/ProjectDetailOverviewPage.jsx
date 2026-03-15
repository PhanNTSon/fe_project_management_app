import './ProjectDetailOverviewPage.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import {
    getMyProjects,
    getUserRole,
    getVisionScopes,
    getConstraints,
    getBusinessRules,
    getUsecases,
    getFunctionalRequirements,
    getNonFunctionalRequirements,
    getContextDiagramUrl,
    getProjectStats
} from '../../api/projectService';
import { parseApiError, logApiError } from '../../api/apiErrorUtils';

// ─── Helpers ──────────────────────────────────────────────────────────────────

const CAN_EDIT_ROLES = ['OWNER', 'MAINTAINER', 'EDITOR'];

function SectionSpinner() {
    return (
        <div className="flex items-center gap-2 text-slate-400 text-sm py-4">
            <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
            <span>Loading…</span>
        </div>
    );
}

function SectionCard({ title, children }) {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">{title}</span>
            </div>
            <div className="p-5">{children}</div>
        </div>
    );
}

function EmptyState({ text }) {
    return <p className="text-sm italic text-slate-400">{text}</p>;
}

const ProjectDetailOverviewPage = () => {
    const navigate = useNavigate();
    const { projectId } = useParams();

    // ── State ────────────────────────────────────────────────────────────────
    const [project, setProject] = useState(null);
    const [role, setRole] = useState(null);

    const [visionScopes, setVisionScopes] = useState([]);
    const [constraints, setConstraints] = useState([]);
    const [businessRules, setBusinessRules] = useState([]);
    const [usecases, setUsecases] = useState([]);
    const [functionalReqs, setFunctionalReqs] = useState([]);
    const [nonFunctionalReqs, setNonFunctionalReqs] = useState([]);

    // per-section loading flags
    const [loadingProject, setLoadingProject] = useState(true);
    const [loadingVision, setLoadingVision] = useState(true);
    const [loadingConstraints, setLoadingConstraints] = useState(true);
    const [loadingBusiness, setLoadingBusiness] = useState(true);
    const [loadingUsecases, setLoadingUsecases] = useState(true);
    const [loadingFunctional, setLoadingFunctional] = useState(true);
    const [loadingNonFunctional, setLoadingNonFunctional] = useState(true);
    const [loadingContext, setLoadingContext] = useState(true);

    const [contextDiagramUrl, setContextDiagramUrl] = useState('');
    const [projectStats, setProjectStats] = useState(null);
    const [loadingStats, setLoadingStats] = useState(true);

    const [error, setError] = useState(null);

    // ── Fetch ────────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!projectId) return;

        // Project meta + role (blocking – needed for gating)
        const fetchMeta = async () => {
            try {
                const [projects, roleDto] = await Promise.all([getMyProjects(), getUserRole(projectId)]);
                const found = projects.find(p => String(p.projectId) === String(projectId));
                if (!found) { setError('Project not found.'); return; }
                setProject(found);
                setRole(roleDto.roleName);
            } catch (err) {
                logApiError(err, 'ProjectDetailOverviewPage.fetchMeta');
                setError(parseApiError(err, 'Không thể tải thông tin dự án.'));
            } finally {
                setLoadingProject(false);
            }
        };

        // SRS sections – fire in parallel, each sets its own flag
        const fetchSection = async (fn, setter, setLoading) => {
            try { setter(await fn(projectId)); }
            catch { /* section silently fails – show empty */ }
            finally { setLoading(false); }
        };

        fetchMeta();
        fetchSection(getVisionScopes, setVisionScopes, setLoadingVision);
        fetchSection(getConstraints, setConstraints, setLoadingConstraints);
        fetchSection(getBusinessRules, setBusinessRules, setLoadingBusiness);
        fetchSection(getUsecases, setUsecases, setLoadingUsecases);
        fetchSection(getFunctionalRequirements, setFunctionalReqs, setLoadingFunctional);
        fetchSection(getNonFunctionalRequirements, setNonFunctionalReqs, setLoadingNonFunctional);
        fetchSection(getContextDiagramUrl, setContextDiagramUrl, setLoadingContext);
        fetchSection(getProjectStats, setProjectStats, setLoadingStats);
    }, [projectId]);

    // ── Derived ──────────────────────────────────────────────────────────────
    const canEdit = CAN_EDIT_ROLES.includes(role);

    // ── Render helpers ────────────────────────────────────────────────────────
    const renderSrsEditorButton = () => {
        if (!role) return null;
        if (!canEdit) {
            return (
                <button
                    disabled
                    title="Viewers cannot edit the SRS document"
                    className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 font-semibold text-sm cursor-not-allowed select-none flex items-center gap-1.5"
                >
                    <span className="material-symbols-outlined text-[16px]">lock</span>
                    SRS Editor
                </button>
            );
        }
        return (
            <button
                onClick={() => navigate(`/projects/${projectId}/srs-editor`)}
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
            >
                <span className="material-symbols-outlined text-[16px]">edit_note</span>
                SRS Editor
            </button>
        );
    };

    // ── JSX ───────────────────────────────────────────────────────────────────
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
                            {loadingProject ? (
                                <div className="h-5 w-40 bg-slate-200 dark:bg-slate-700 rounded animate-pulse mt-1" />
                            ) : (
                                <h2 className="text-lg font-bold leading-tight">{project?.projectName ?? 'Project'}</h2>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Role badge */}
                        {role && (
                            <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                {role}
                            </span>
                        )}
                        <button
                            onClick={() => navigate(`/projects/${projectId}/settings`)}
                            className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            Settings
                        </button>
                        <button
                            onClick={() => navigate(`/projects/${projectId}/changes`)}
                            className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                        >
                            <span className="material-symbols-outlined text-[16px]">history</span>
                            Change History
                        </button>
                        {renderSrsEditorButton()}
                        <button
                            onClick={() => navigate(`/projects/${projectId}/export`)}
                            className="px-4 py-2 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
                        >
                            Share Report
                        </button>
                    </div>
                </header>

                {/* Global Error */}
                {!loadingProject && error && (
                    <div className="flex flex-col items-center gap-4 py-24 text-center">
                        <span className="material-symbols-outlined text-4xl text-red-400">error</span>
                        <p className="text-slate-500">{error}</p>
                        <button onClick={() => navigate('/projects')} className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold">
                            Back to Projects
                        </button>
                    </div>
                )}

                {/* Content */}
                {!loadingProject && project && !error && (
                    <div className="max-w-4xl mx-auto space-y-6">
                        {/* Page Title */}
                        <div className="space-y-1">
                            <h3 className="text-3xl font-black tracking-tight">Project Overview</h3>
                            <p className="text-slate-500 dark:text-slate-400">
                                All requirement information for this project (read-only). Use SRS Editor to make changes.
                            </p>
                        </div>

                        {/* Quick links */}
                        <div className="mb-6">
                            <h4 className="font-bold text-lg mb-4">Quick Access</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    {
                                        label: 'Members',
                                        icon: 'group',
                                        path: `/projects/${projectId}/members`,
                                        color: 'text-rose-600 bg-rose-50 dark:bg-rose-900/30',
                                        subtitle: loadingStats ? 'Loading...' : (
                                            role === 'OWNER'
                                                ? `${projectStats?.totalMembers || 0} active, ${projectStats?.pendingInvites || 0} pending`
                                                : `${projectStats?.totalMembers || 0} members`
                                        )
                                    },
                                    { label: 'Settings', icon: 'settings', path: `/projects/${projectId}/settings`, color: 'text-slate-600 bg-slate-100 dark:bg-slate-800' },
                                    { label: 'Export', icon: 'share', path: `/projects/${projectId}/export`, color: 'text-violet-600 bg-violet-50 dark:bg-violet-900/30' },
                                ].map(item => (
                                    <button
                                        key={item.label}
                                        onClick={() => navigate(item.path)}
                                        className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 hover:shadow-sm transition-all text-left"
                                    >
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color} shrink-0`}>
                                            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <span className="font-semibold text-slate-800 dark:text-slate-200 leading-snug">{item.label}</span>
                                            {item.subtitle && (
                                                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.subtitle}</span>
                                            )}
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 ml-auto text-[18px]">chevron_right</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Project Summary Card */}
                        <SectionCard title="Project Summary">
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
                                <div className="mt-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Description</p>
                                    <p className="text-slate-900 dark:text-slate-100 whitespace-pre-wrap">{project.description}</p>
                                </div>
                            )}
                        </SectionCard>

                        {/* ── Section 1: Detail Information ── */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-bold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
                                1. Detail Information
                            </h4>

                            {/* 1.1 Vision & Scope */}
                            <SectionCard title="1.1 Vision &amp; Scope">
                                {loadingVision ? <SectionSpinner /> : visionScopes.length === 0
                                    ? <EmptyState text="No vision & scope defined yet." />
                                    : <ul className="space-y-2">
                                        {visionScopes.map(v => (
                                            <li key={v.visionScopeId} className="text-sm text-slate-700 dark:text-slate-300 border-l-4 border-primary/30 pl-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-r">
                                                {v.content}
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </SectionCard>

                            {/* 1.2 Constraints */}
                            <SectionCard title="1.2 Constraints">
                                {loadingConstraints ? <SectionSpinner /> : constraints.length === 0
                                    ? <EmptyState text="No constraints defined yet." />
                                    : <ul className="space-y-2">
                                        {constraints.map(c => (
                                            <li key={c.constraintId} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-300 pl-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-r">
                                                {c.type && (
                                                    <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 shrink-0 mt-0.5">{c.type}</span>
                                                )}
                                                <span>{c.description}</span>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </SectionCard>

                            {/* 1.3 Business Rules */}
                            <SectionCard title="1.3 Business Rules">
                                {loadingBusiness ? <SectionSpinner /> : businessRules.length === 0
                                    ? <EmptyState text="No business rules defined yet." />
                                    : <ul className="space-y-2">
                                        {businessRules.map(r => (
                                            <li key={r.ruleId} className="text-sm text-slate-700 dark:text-slate-300 border-l-4 border-rose-300 pl-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-r">
                                                {r.ruleDescription}
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </SectionCard>

                            {/* 1.4 Context Diagram */}
                            <SectionCard title="1.4 Context Diagram">
                                {loadingContext ? <SectionSpinner /> : !contextDiagramUrl
                                    ? <EmptyState text="Chưa có diagram (No context diagram uploaded)." />
                                    : <div className="flex justify-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded p-4">
                                        <img src={contextDiagramUrl} alt="Context Diagram" className="max-w-full h-auto max-h-[500px] object-contain rounded" />
                                    </div>
                                }
                            </SectionCard>
                        </div>

                        {/* ── Section 2: Usecases ── */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-bold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
                                2. Usecases
                            </h4>
                            <SectionCard title="2.1 Usecase List">
                                {loadingUsecases ? <SectionSpinner /> : usecases.length === 0
                                    ? <EmptyState text="No usecases defined yet." />
                                    : <div className="space-y-3">
                                        {usecases.map(uc => (
                                            <div key={uc.usecaseId} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800">
                                                {/* Header row */}
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-semibold text-slate-800 dark:text-slate-100">{uc.usecaseName}</span>
                                                    <div className="flex items-center gap-2">
                                                        {uc.actor && (
                                                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 font-semibold">
                                                                {uc.actor}
                                                            </span>
                                                        )}
                                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${uc.priority === 'HIGH' ? 'bg-red-100 text-red-700' :
                                                                uc.priority === 'MEDIUM' ? 'bg-amber-100 text-amber-700' :
                                                                    'bg-slate-100 text-slate-500'}`}>
                                                            {uc.priority ?? 'NORMAL'}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Linked FR */}
                                                {uc.functionRelId && (() => {
                                                    const fr = functionalReqs.find(f => f.requirementId === uc.functionRelId);
                                                    return fr ? (
                                                        <p className="text-xs text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1">
                                                            <span className="material-symbols-outlined text-[13px]">link</span>
                                                            {fr.title}
                                                        </p>
                                                    ) : null;
                                                })()}

                                                {/* Pre / Post / Exceptions */}
                                                {uc.precondition && <p className="text-xs text-slate-500 mb-1"><span className="font-medium">Pre:</span> {uc.precondition}</p>}
                                                {uc.postcondition && <p className="text-xs text-slate-500 mb-1"><span className="font-medium">Post:</span> {uc.postcondition}</p>}
                                                {uc.exceptions && <p className="text-xs text-slate-500 mb-2"><span className="font-medium">Exceptions:</span> {uc.exceptions}</p>}

                                                {/* Normal Flows */}
                                                {uc.normalFlows && uc.normalFlows.length > 0 && (
                                                    <div className="mb-2">
                                                        <p className="text-xs font-semibold text-slate-500 mb-1">Normal Flow</p>
                                                        <ol className="list-decimal list-inside space-y-0.5">
                                                            {uc.normalFlows.map((step, i) => (
                                                                <li key={i} className="text-xs text-slate-600 dark:text-slate-400">{step}</li>
                                                            ))}
                                                        </ol>
                                                    </div>
                                                )}

                                                {/* Alternative Flows */}
                                                {uc.alterFlows && uc.alterFlows.length > 0 && (
                                                    <div className="mb-2">
                                                        <p className="text-xs font-semibold text-slate-500 mb-1">Alternative Flow</p>
                                                        <ol className="list-decimal list-inside space-y-0.5">
                                                            {uc.alterFlows.map((step, i) => (
                                                                <li key={i} className="text-xs text-slate-600 dark:text-slate-400">{step}</li>
                                                            ))}
                                                        </ol>
                                                    </div>
                                                )}

                                                {/* Linked Business Rules */}
                                                {uc.linkedBusinessRuleIds && uc.linkedBusinessRuleIds.length > 0 && (
                                                    <div className="flex flex-wrap gap-1 mt-1">
                                                        {uc.linkedBusinessRuleIds.map(brId => {
                                                            const br = businessRules.find(r => r.ruleId === brId);
                                                            return br ? (
                                                                <span key={brId} className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 font-medium">
                                                                    {br.ruleDescription.length > 40 ? br.ruleDescription.slice(0, 40) + '…' : br.ruleDescription}
                                                                </span>
                                                            ) : null;
                                                        })}
                                                    </div>
                                                )}

                                                {/* Usecase Diagram */}
                                                <div className="mt-4 border-t border-slate-100 dark:border-slate-700 pt-3">
                                                    <p className="text-xs font-semibold text-slate-500 mb-2">Usecase Diagram</p>
                                                    {uc.diagramUrl ? (
                                                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded p-2 flex justify-center">
                                                            <img src={uc.diagramUrl} alt={`Diagram for ${uc.usecaseName}`} className="max-w-full h-auto max-h-[300px] object-contain rounded" />
                                                        </div>
                                                    ) : (
                                                        <EmptyState text="Chưa có diagram" />
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </SectionCard>
                        </div>

                        {/* ── Section 3: Functional Requirements ── */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-bold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
                                3. Functional Requirements
                            </h4>
                            <SectionCard title="3.1 Functional List">
                                {loadingFunctional ? <SectionSpinner /> : functionalReqs.length === 0
                                    ? <EmptyState text="No functional requirements defined yet." />
                                    : <div className="space-y-2">
                                        {functionalReqs.map(fr => (
                                            <div key={fr.requirementId} className="p-3 border border-blue-100 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="font-medium text-slate-800 dark:text-slate-100 text-sm">{fr.title}</span>
                                                </div>
                                                <p className="text-xs text-slate-600 dark:text-slate-400">{fr.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </SectionCard>
                        </div>

                        {/* ── Section 4: Non-Functional Requirements ── */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-bold text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
                                4. Non-Functional Requirements
                            </h4>
                            <SectionCard title="4.1 Non-Functional List">
                                {loadingNonFunctional ? <SectionSpinner /> : nonFunctionalReqs.length === 0
                                    ? <EmptyState text="No non-functional requirements defined yet." />
                                    : <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {nonFunctionalReqs.map(nfr => (
                                            <div key={nfr.requirementId} className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800">
                                                <p className="text-xs font-bold text-slate-500 uppercase mb-1">{nfr.category}</p>
                                                <p className="text-sm text-slate-700 dark:text-slate-300">{nfr.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </SectionCard>
                        </div>

                        {/* (Quick Links section was moved to top) */}

                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default ProjectDetailOverviewPage;
