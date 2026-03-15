import './SrsDocumentEditorPage.css';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    getUserRole,
    getVisionScopes,
    getConstraints,
    getBusinessRules,
    getUsecases,
    getFunctionalRequirements,
    getNonFunctionalRequirements,
} from '../../api/projectService';
import { createChangeRequest } from '../../api/changeRequestService';
import { parseApiError } from '../../api/apiErrorUtils';
import UsecaseModal from './UsecaseModal';

const CAN_EDIT_ROLES = ['OWNER', 'MAINTAINER', 'EDITOR'];
const AUTO_APPROVE_ROLES = ['OWNER', 'MAINTAINER'];

function SectionSpinner() {
    return (
        <div className="flex items-center justify-center p-8 text-slate-400">
            <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
            Loading...
        </div>
    );
}

// Helper to check if a usecase has an invalid/missing link based on parsed description/logic
function UsecaseWarningBadge({ usecase, functionalReqs, businessRules }) {
    let showWarning = false;
    let reasons = [];

    // Parse the usecase description/function to see if its linked FR exists
    if (usecase.functionRelId && !functionalReqs.find(fr => String(fr.requirementId) === String(usecase.functionRelId))) {
        showWarning = true;
        reasons.push("Linked Functional Requirement is missing or changed");
    }

    // Check if linked BRs exist
    if (usecase.linkedBusinessRuleIds && usecase.linkedBusinessRuleIds.length > 0) {
        const missingBrs = usecase.linkedBusinessRuleIds.filter(id => !businessRules.find(br => String(br.ruleId) === String(id)));
        if (missingBrs.length > 0) {
            showWarning = true;
            reasons.push("Some linked Business Rules are missing or changed");
        }
    }

    if (!showWarning) return null;

    return (
        <span
            className="ml-2 inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded cursor-help"
            title={reasons.join("\n")}
        >
            <span className="material-symbols-outlined text-[14px]">warning</span>
            Review Required
        </span>
    );
}

export default function SrsDocumentEditorPage() {
    const { projectId } = useParams();
    const navigate = useNavigate();

    // -- State: Meta --
    const [role, setRole] = useState(null);
    const [loadingInit, setLoadingInit] = useState(true);
    const [error, setError] = useState(null);

    // -- State: Original Data --
    const [origVision, setOrigVision] = useState([]);
    const [origConstraints, setOrigConstraints] = useState([]);
    const [origBusiness, setOrigBusiness] = useState([]);
    const [origFunctional, setOrigFunctional] = useState([]);
    const [origNonFunctional, setOrigNonFunctional] = useState([]);
    const [origUsecases, setOrigUsecases] = useState([]);

    // -- State: Edited Data --
    const [editedVision, setEditedVision] = useState([]);
    const [editedConstraints, setEditedConstraints] = useState([]);
    const [editedBusiness, setEditedBusiness] = useState([]);
    const [editedFunctional, setEditedFunctional] = useState([]);
    const [editedNonFunctional, setEditedNonFunctional] = useState([]);
    const [editedUsecases, setEditedUsecases] = useState([]);

    // -- UI State --
    const [leftWidth, setLeftWidth] = useState(55); // percentage
    const splitPaneRef = useRef(null);
    const isDragging = useRef(false);

    const [saving, setSaving] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [warningsConfirmed, setWarningsConfirmed] = useState(false);

    // -- Component Modals --
    const [showUsecaseModal, setShowUsecaseModal] = useState(false);
    const [selectedUsecase, setSelectedUsecase] = useState(null);

    useEffect(() => {
        const load = async () => {
            if (!projectId) return;
            try {
                setLoadingInit(true);
                const roleDto = await getUserRole(projectId);

                if (!CAN_EDIT_ROLES.includes(roleDto.roleName)) {
                    navigate(`/projects/${projectId}`);
                    return;
                }
                setRole(roleDto.roleName);

                const [vs, cs, br, fr, nfr, uc] = await Promise.all([
                    getVisionScopes(projectId).catch(() => []),
                    getConstraints(projectId).catch(() => []),
                    getBusinessRules(projectId).catch(() => []),
                    getFunctionalRequirements(projectId).catch(() => []),
                    getNonFunctionalRequirements(projectId).catch(() => []),
                    getUsecases(projectId).catch(() => []),
                ]);

                const nfrCategories = ['USABILITY', 'PERFORMANCE', 'SECURITY', 'SCALABILITY'];
                const completeNfr = nfrCategories.map(cat => {
                    const existing = nfr.find(n => n.category === cat);
                    return existing || { requirementId: 'temp-' + cat, category: cat, description: '' };
                });

                setOrigVision(vs); setOrigConstraints(cs); setOrigBusiness(br);
                setOrigFunctional(fr); setOrigNonFunctional(completeNfr); setOrigUsecases(uc);

                setEditedVision(JSON.parse(JSON.stringify(vs)));
                setEditedConstraints(JSON.parse(JSON.stringify(cs)));
                setEditedBusiness(JSON.parse(JSON.stringify(br)));
                setEditedFunctional(JSON.parse(JSON.stringify(fr)));
                setEditedNonFunctional(JSON.parse(JSON.stringify(completeNfr)));
                setEditedUsecases(JSON.parse(JSON.stringify(uc)));

            } catch (err) {
                setError(parseApiError(err, 'Failed to load SRS data.'));
            } finally {
                setLoadingInit(false);
            }
        };
        load();
    }, [projectId, navigate]);

    // -- Resizer Logic --
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging.current || !splitPaneRef.current) return;
            const containerWidth = splitPaneRef.current.getBoundingClientRect().width;
            const newLeftWidth = (e.clientX / containerWidth) * 100;
            if (newLeftWidth > 20 && newLeftWidth < 80) setLeftWidth(newLeftWidth);
        };
        const handleMouseUp = () => {
            isDragging.current = false;
            document.body.style.cursor = 'default';
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const hasChanges = useMemo(() => {
        return JSON.stringify(origVision) !== JSON.stringify(editedVision) ||
            JSON.stringify(origConstraints) !== JSON.stringify(editedConstraints) ||
            JSON.stringify(origBusiness) !== JSON.stringify(editedBusiness) ||
            JSON.stringify(origFunctional) !== JSON.stringify(editedFunctional) ||
            JSON.stringify(origNonFunctional) !== JSON.stringify(editedNonFunctional) ||
            JSON.stringify(origUsecases) !== JSON.stringify(editedUsecases);
    }, [origVision, editedVision, origConstraints, editedConstraints, origBusiness, editedBusiness, origFunctional, editedFunctional, origNonFunctional, editedNonFunctional, origUsecases, editedUsecases]);


    const hasAnyUsecaseWarning = useMemo(() => {
        return editedUsecases.some(uc => {
            if (uc.functionRelId && !editedFunctional.find(fr => String(fr.requirementId) === String(uc.functionRelId))) return true;
            if (uc.linkedBusinessRuleIds && uc.linkedBusinessRuleIds.some(id => !editedBusiness.find(br => String(br.ruleId) === String(id)))) return true;
            return false;
        });
    }, [editedUsecases, editedFunctional, editedBusiness]);

    const handleSaveInitiate = () => {
        if (hasAnyUsecaseWarning && !warningsConfirmed) {
            setShowConfirmModal(true);
        } else {
            executeSave();
        }
    };

    const executeSave = async () => {
        setShowConfirmModal(false);
        setSaving(true);
        try {
            // Build change items for all modified entities
            const items = [];

            // Track usecases changes
            editedUsecases.forEach((uc) => {
                const origUc = origUsecases.find(u => u.usecaseId === uc.usecaseId);

                // Only include if it's an existing usecase (has real ID) AND has actual changes
                if (origUc && JSON.stringify(origUc) !== JSON.stringify(uc)) {
                    items.push({
                        entityType: "USECASE",
                        entityId: uc.usecaseId,
                        operation: "UPDATE",
                        fieldName: "all",
                        oldValue: JSON.stringify(origUc),
                        newValue: JSON.stringify(uc)
                    });
                } else if (!origUc && String(uc.usecaseId).startsWith('temp-')) {
                    // New usecase - strip temp ID before sending
                    const newUsecaseData = { ...uc };
                    delete newUsecaseData.usecaseId;
                    items.push({
                        entityType: "USECASE",
                        entityId: null,
                        operation: "CREATE",
                        fieldName: "all",
                        oldValue: "{}",
                        newValue: JSON.stringify(newUsecaseData)
                    });
                }
            });

            // Check for deleted usecases
            origUsecases.forEach((origUc) => {
                if (!editedUsecases.find(u => u.usecaseId === origUc.usecaseId)) {
                    items.push({
                        entityType: "USECASE",
                        entityId: origUc.usecaseId,
                        operation: "DELETE",
                        fieldName: "all",
                        oldValue: JSON.stringify(origUc),
                        newValue: "{}"
                    });
                }
            });

            // If no changes, skip
            if (items.length === 0) {
                alert("No changes to save");
                setSaving(false);
                return;
            }

            const payload = {
                title: "SRS Updates",
                description: "Updates from SRS Editor",
                items: items
            };

            console.log("🔷 ChangeRequest Items:", items);
            console.log("🔷 Full Payload:", payload);

            await createChangeRequest(projectId, payload);
            alert(AUTO_APPROVE_ROLES.includes(role) ? "Records saved successfully!" : "Change Request submitted successfully!");
            navigate(`/projects/${projectId}`);
        } catch (err) {
            alert(parseApiError(err, 'Failed to save changes.'));
        } finally {
            setSaving(false);
        }
    };

    const updateListItem = (setter, list, idKey, idValue, field, newValue) => {
        setter(list.map(item => item[idKey] === idValue ? { ...item, [field]: newValue } : item));
    };

    const handleUpdateBusinessRule = (id, newValue) => {
        // Auto prefix logic
        let processedValue = newValue;
        setEditedBusiness(editedBusiness.map((item, index) => {
            if (item.ruleId === id) {
                // If it doesn't already start with BRXXX, format it.
                // We'll just let the UI prefix it sequentially during render for simplicity,
                // but the user wants it inside the text box.
                const prefix = `BR${String(index + 1).padStart(3, '0')} - `;
                if (!newValue.startsWith(prefix) && !newValue.startsWith("BR")) {
                    processedValue = prefix + newValue;
                }
                return { ...item, ruleDescription: processedValue };
            }
            return item;
        }));
    };

    // Better auto-prefixing logic: update on blur or let state handle it cleanly
    const formatBR = (value, index) => {
        const prefix = `BR${String(index + 1).padStart(3, '0')} - `;
        if (!value.startsWith("BR")) return prefix + value;
        return value;
    };


    const addListItem = (setter, list, newItem) => setter([...list, newItem]);
    const removeListItem = (setter, list, idKey, idValue) => setter(list.filter(item => item[idKey] !== idValue));

    const openUsecaseModal = (uc = null) => {
        setSelectedUsecase(uc);
        setShowUsecaseModal(true);
    };

    const saveUsecaseFromModal = (newUc) => {

        if (selectedUsecase) {
            // EDIT
            setEditedUsecases(
                editedUsecases.map(u =>
                    u.usecaseId === selectedUsecase.usecaseId
                        ? { ...newUc, usecaseId: selectedUsecase.usecaseId }
                        : u
                )
            );
        } else {
            // CREATE
            setEditedUsecases([
                ...editedUsecases,
                { ...newUc, usecaseId: 'temp-' + Date.now() }
            ]);
        }

        setShowUsecaseModal(false);
    };

    if (loadingInit) return <div className="h-screen w-screen flex items-center justify-center bg-white"><SectionSpinner /></div>;
    if (error) return <div className="h-screen w-screen flex items-center justify-center text-red-500 bg-white">{error}</div>;

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-white" ref={splitPaneRef}>
            {/* ── LEFT PANEL: EDITOR ── */}
            <div style={{ width: `${leftWidth}%` }} className="flex flex-col bg-slate-50 min-w-[300px]">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white min-h-[64px] shrink-0">
                    <h3 className="font-semibold text-slate-700 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">edit_note</span>
                        SRS Content Builder
                    </h3>
                    <div className="flex items-center gap-3">
                        {hasChanges && <span className="text-xs text-amber-600 font-medium">Unsaved changes</span>}
                        <button onClick={() => navigate(`/projects/${projectId}`)} className="text-xs font-medium text-slate-500 hover:text-slate-800">
                            Cancel
                        </button>
                        <button
                            disabled={!hasChanges || saving}
                            onClick={handleSaveInitiate}
                            className={`px-4 py-2 text-sm font-bold text-white rounded-md shadow-sm transition-colors ${hasChanges && !saving ? 'bg-primary hover:bg-primary/90' : 'bg-slate-300 cursor-not-allowed'
                                }`}
                        >
                            {saving ? 'Processing...' : (AUTO_APPROVE_ROLES.includes(role) ? 'Save Changes' : 'Create Change Request')}
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6 srs-scroll">

                    {/* 1. Detail Information */}
                    <div className="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-5 py-3 bg-slate-100/50 border-b border-slate-100">
                            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">1. Detail Information</span>
                        </div>
                        <div className="p-5 space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">1.1 Vision &amp; Scope</label>
                                <div className="space-y-2">
                                    {editedVision.map(v => (
                                        <div key={v.visionScopeId} className="flex gap-2">
                                            <input
                                                className="flex-1 text-sm border-slate-300 rounded text-slate-700 focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                                                value={v.content}
                                                onChange={e => updateListItem(setEditedVision, editedVision, 'visionScopeId', v.visionScopeId, 'content', e.target.value)}
                                            />
                                            <button onClick={() => removeListItem(setEditedVision, editedVision, 'visionScopeId', v.visionScopeId)} className="text-rose-400 hover:text-rose-600 bg-rose-50 px-2 rounded border border-rose-100">
                                                <span className="material-symbols-outlined text-lg">close</span>
                                            </button>
                                        </div>
                                    ))}
                                    <button onClick={() => addListItem(setEditedVision, editedVision, { visionScopeId: 'temp-' + Date.now(), content: '' })} className="text-primary text-xs font-semibold flex items-center gap-1 hover:underline mt-1">
                                        <span className="material-symbols-outlined text-[16px]">add</span> Add Vision/Scope
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">1.2 Constraints</label>
                                <div className="space-y-2">
                                    {editedConstraints.map(c => (
                                        <div key={c.constraintId} className="flex gap-2">
                                            <input
                                                className="flex-1 text-sm border-slate-300 rounded text-slate-700 focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                                                value={c.description}
                                                onChange={e => updateListItem(setEditedConstraints, editedConstraints, 'constraintId', c.constraintId, 'description', e.target.value)}
                                            />
                                            <button onClick={() => removeListItem(setEditedConstraints, editedConstraints, 'constraintId', c.constraintId)} className="text-rose-400 hover:text-rose-600 bg-rose-50 px-2 rounded border border-rose-100">
                                                <span className="material-symbols-outlined text-lg">close</span>
                                            </button>
                                        </div>
                                    ))}
                                    <button onClick={() => addListItem(setEditedConstraints, editedConstraints, { constraintId: 'temp-' + Date.now(), description: '' })} className="text-primary text-xs font-semibold flex items-center gap-1 hover:underline mt-1">
                                        <span className="material-symbols-outlined text-[16px]">add</span> Add Constraint
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">1.3 Business Rules</label>
                                <div className="space-y-2">
                                    {editedBusiness.map((b, idx) => (
                                        <div key={b.ruleId} className="flex gap-2 relative">
                                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 select-none">
                                                BR{String(idx + 1).padStart(3, '0')} -
                                            </div>
                                            <input
                                                className="flex-1 text-sm border-slate-300 rounded text-slate-700 focus:border-primary focus:ring-1 focus:ring-primary shadow-sm pl-16 pt-2 pb-2"
                                                value={b.ruleDescription.replace(/^BR\d{3}\s?-\s?/, '')}
                                                onChange={e => updateListItem(setEditedBusiness, editedBusiness, 'ruleId', b.ruleId, 'ruleDescription', `BR${String(idx + 1).padStart(3, '0')} - ${e.target.value}`)}
                                                placeholder="Rule description..."
                                            />
                                            <button onClick={() => removeListItem(setEditedBusiness, editedBusiness, 'ruleId', b.ruleId)} className="text-rose-400 hover:text-rose-600 bg-rose-50 px-2 rounded border border-rose-100">
                                                <span className="material-symbols-outlined text-lg">close</span>
                                            </button>
                                        </div>
                                    ))}
                                    <button onClick={() => addListItem(setEditedBusiness, editedBusiness, { ruleId: 'temp-' + Date.now(), ruleDescription: '' })} className="text-primary text-xs font-semibold flex items-center gap-1 hover:underline mt-1">
                                        <span className="material-symbols-outlined text-[16px]">add</span> Add Business Rule
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Usecases */}
                    <div className="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-5 py-3 bg-slate-100/50 border-b border-slate-100">
                            <span className="flex items-center text-sm font-bold text-slate-700 uppercase tracking-wider">
                                2. Usecases
                            </span>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="space-y-3">
                                {editedUsecases.map(uc => (
                                    <div key={uc.usecaseId} className="flex items-center justify-between p-3 border border-slate-200 rounded text-sm shadow-sm hover:border-primary/50 transition-colors">
                                        <div>
                                            <div className="font-bold border-b border-slate-100 pb-1 mb-1 text-slate-800 flex items-center gap-2">
                                                {uc.usecaseName || 'Unnamed Usecase'}
                                                <UsecaseWarningBadge usecase={uc} functionalReqs={editedFunctional} businessRules={editedBusiness} />
                                            </div>
                                            <div className="grid grid-cols-[80px_1fr] gap-x-2 text-[11px] text-slate-600">
                                                <span className="font-semibold text-slate-400 uppercase">Actor:</span> <span>{uc.actor || 'N/A'}</span>
                                                <span className="font-semibold text-slate-400 uppercase">Func Res:</span> <span>{uc.functionRelId ? editedFunctional.find(f => String(f.requirementId) === String(uc.functionRelId))?.title || 'Unknown Func' : 'None'}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 ml-4 shrink-0">
                                            <button onClick={() => openUsecaseModal(uc)} className="w-8 h-8 rounded border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary">
                                                <span className="material-symbols-outlined text-[16px]">edit</span>
                                            </button>
                                            <button onClick={() => removeListItem(setEditedUsecases, editedUsecases, 'usecaseId', uc.usecaseId)} className="w-8 h-8 rounded border border-rose-200 bg-rose-50 shadow-sm flex items-center justify-center text-rose-500 hover:bg-rose-100 hover:text-rose-700">
                                                <span className="material-symbols-outlined text-[16px]">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => openUsecaseModal()} className="w-full mt-2 py-2.5 border border-dashed border-primary/40 bg-primary/5 rounded text-sm font-bold text-primary hover:border-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">add_circle</span> Add Usecase
                            </button>
                        </div>
                    </div>

                    {/* 3. Functional Reqs */}
                    <div className="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-5 py-3 bg-slate-100/50 border-b border-slate-100">
                            <span className="flex items-center text-sm font-bold text-slate-700 uppercase tracking-wider">
                                3. Functional Requirements
                            </span>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="space-y-4">
                                {editedFunctional.map((fr, idx) => (
                                    <div key={fr.requirementId} className="flex gap-3 items-start border-l-[3px] border-blue-400 pl-3 bg-slate-50 p-3 rounded-r border-y border-r border-slate-200">
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2 py-1 rounded">FR{String(idx + 1).padStart(3, '0')}</span>
                                                <input className="w-full text-sm font-semibold border-slate-300 shadow-sm rounded text-slate-800 focus:ring-1 focus:ring-primary focus:border-primary py-1.5" value={fr.title} placeholder="Requirement Title" onChange={e => updateListItem(setEditedFunctional, editedFunctional, 'requirementId', fr.requirementId, 'title', e.target.value)} />
                                            </div>
                                            <textarea className="w-full text-xs border-slate-300 shadow-sm rounded text-slate-600 focus:ring-1 focus:ring-primary focus:border-primary min-h-[60px]" value={fr.description} placeholder="Detail Description..." onChange={e => updateListItem(setEditedFunctional, editedFunctional, 'requirementId', fr.requirementId, 'description', e.target.value)} />
                                        </div>
                                        <button onClick={() => removeListItem(setEditedFunctional, editedFunctional, 'requirementId', fr.requirementId)} className="text-rose-400 hover:text-rose-600 bg-rose-100 px-1.5 py-1 rounded border border-rose-200 mt-1">
                                            <span className="material-symbols-outlined text-[16px]">close</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => addListItem(setEditedFunctional, editedFunctional, { requirementId: 'temp-' + Date.now(), title: '', description: '' })} className="text-primary text-xs font-semibold flex items-center gap-1 hover:underline mt-1">
                                <span className="material-symbols-outlined text-[16px]">add</span> Add Functional Requirement
                            </button>
                        </div>
                    </div>

                    {/* 4. Non-Functional Reqs */}
                    <div className="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-5 py-3 bg-slate-100/50 border-b border-slate-100">
                            <span className="flex items-center text-sm font-bold text-slate-700 uppercase tracking-wider">
                                4. Non-Functional Requirements
                            </span>
                        </div>
                        <div className="p-5 space-y-4">
                            {editedNonFunctional.map(nfrItem => (
                                <div key={nfrItem.category} className="space-y-2">
                                    <label className="block text-xs font-bold text-slate-500 uppercase">{nfrItem.category}</label>
                                    <textarea
                                        className="w-full text-sm border-slate-300 shadow-sm rounded text-slate-700 focus:ring-1 focus:ring-primary focus:border-primary min-h-[60px]"
                                        value={nfrItem.description}
                                        placeholder={`Describe ${nfrItem.category.toLowerCase()} requirements...`}
                                        onChange={e => updateListItem(setEditedNonFunctional, editedNonFunctional, 'category', nfrItem.category, 'description', e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* ── SPLITTER ── */}
            <div
                className="w-1.5 bg-slate-200 hover:bg-primary cursor-col-resize shrink-0 transition-colors hidden md:block z-50 border-x border-slate-300"
                onMouseDown={() => {
                    isDragging.current = true;
                    document.body.style.cursor = 'col-resize';
                }}
            />

            {/* ── RIGHT PANEL: LIVE PREVIEW ── */}
            <div style={{ width: `calc(${100 - leftWidth}% - 6px)` }} className="bg-[#f8f9fa] overflow-y-auto relative hidden md:block">
                <div className="sticky top-0 bg-white/95 backdrop-blur-md z-10 px-6 py-3 border-b border-slate-200 flex justify-between items-center shadow-sm">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5 text-sm uppercase tracking-wide">
                        <span className="material-symbols-outlined text-emerald-500 text-[20px]">visibility</span>
                        Live Preview
                    </span>
                    <div className="text-[9px] uppercase font-black text-slate-400 tracking-widest px-2 py-0.5 bg-slate-100 rounded border border-slate-200">
                        Auto-Syncing
                    </div>
                </div>

                <div className="p-8 pb-16 min-w-[500px]">
                    <div className="bg-white w-full max-w-[850px] min-h-[1100px] mx-auto shadow-2xl border border-slate-300 rounded p-12 text-slate-800 srs-preview-doc font-serif">

                        <div className="text-center mb-16 border-b-2 border-slate-800 pb-8">
                            <h1 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">Software Requirements Specification</h1>
                            <div className="text-sm text-slate-500 uppercase tracking-widest font-sans font-bold">Auto-generated Draft</div>
                        </div>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-5 border-b border-slate-200 pb-2">1. Detail Information</h2>

                            <h3 className="text-base font-bold text-slate-800 mt-5 mb-3">1.1 Vision &amp; Scope</h3>
                            {editedVision.length === 0 ? <p className="text-sm italic text-slate-400 font-sans">Not specified</p> :
                                <ul className="list-disc pl-6 space-y-1.5 marker:text-slate-400">
                                    {editedVision.map(v => <li key={v.visionScopeId} className="text-[15px] leading-relaxed text-slate-700">{v.content || '...'}</li>)}
                                </ul>
                            }

                            <h3 className="text-base font-bold text-slate-800 mt-8 mb-3">1.2 Constraints</h3>
                            {editedConstraints.length === 0 ? <p className="text-sm italic text-slate-400 font-sans">Not specified</p> :
                                <ul className="list-disc pl-6 space-y-1.5 marker:text-slate-400">
                                    {editedConstraints.map(c => <li key={c.constraintId} className="text-[15px] leading-relaxed text-slate-700">{c.description || '...'}</li>)}
                                </ul>
                            }

                            <h3 className="text-base font-bold text-slate-800 mt-8 mb-3">1.3 Business Rules</h3>
                            {editedBusiness.length === 0 ? <p className="text-sm italic text-slate-400 font-sans">Not specified</p> :
                                <div className="space-y-2 font-sans text-sm">
                                    {editedBusiness.map(b => (
                                        <div key={b.ruleId} className="flex gap-2">
                                            <span className="font-bold text-slate-800 shrink-0">{b.ruleDescription.split(' - ')[0]} -</span>
                                            <span className="text-slate-700">{b.ruleDescription.substring(b.ruleDescription.indexOf(' - ') + 3) || '...'}</span>
                                        </div>
                                    ))}
                                </div>
                            }
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-5 border-b border-slate-200 pb-2">2. Usecases</h2>
                            {editedUsecases.length === 0 ? <p className="text-sm italic text-slate-400 font-sans">No usecases defined</p> :
                                <div className="space-y-6">
                                    {editedUsecases.map((uc, i) => (
                                        <div key={uc.usecaseId} className="border border-slate-300 rounded font-sans overflow-hidden page-break-inside-avoid">
                                            <div className="bg-slate-100 border-b border-slate-300 px-4 py-2 flex items-center gap-2">
                                                <span className="font-black text-slate-800">UC-{String(i + 1).padStart(2, '0')}</span>
                                                <span className="font-bold text-slate-700">{uc.usecaseName || 'Unnamed Usecase'}</span>
                                            </div>
                                            <div className="p-4 grid grid-cols-1 gap-y-3 text-sm">
                                                <div className="grid grid-cols-[120px_1fr] border-b border-slate-100 pb-2">
                                                    <span className="font-bold text-slate-700">Actor</span>
                                                    <span className="text-slate-600">{uc.actor || '-'}</span>
                                                </div>
                                                <div className="grid grid-cols-[120px_1fr] border-b border-slate-100 pb-2">
                                                    <span className="font-bold text-slate-700">Linked Func.</span>
                                                    <span className="text-slate-600">
                                                        {uc.functionRelId ? editedFunctional.find(f => String(f.requirementId) === String(uc.functionRelId))?.title || 'Unknown' : '-'}
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-[120px_1fr] border-b border-slate-100 pb-2">
                                                    <span className="font-bold text-slate-700">Precondition</span>
                                                    <span className="text-slate-600">{uc.precondition || '-'}</span>
                                                </div>
                                                <div className="grid grid-cols-[120px_1fr] border-b border-slate-100 pb-2">
                                                    <span className="font-bold text-slate-700">Postcondition</span>
                                                    <span className="text-slate-600">{uc.postcondition || '-'}</span>
                                                </div>

                                                {/* Normal Flow */}
                                                <div>
                                                    <span className="font-bold text-slate-700 block mb-1">Normal Flow</span>
                                                    <ol className="list-decimal pl-5 text-slate-600 space-y-1">
                                                        {(uc.normalFlows || []).map((flow, fi) => <li key={fi}>{flow}</li>)}
                                                    </ol>
                                                </div>

                                                {/* Alter Flow */}
                                                <div>
                                                    <span className="font-bold text-slate-700 block mb-1">Alter Flow</span>
                                                    <ol className="list-decimal pl-5 text-slate-600 space-y-1">
                                                        {(uc.alterFlows || []).map((flow, fi) => <li key={fi}>{flow}</li>)}
                                                    </ol>
                                                </div>

                                                <div className="grid grid-cols-[120px_1fr]">
                                                    <span className="font-bold text-slate-700">Priority</span>
                                                    <span className="text-slate-600">{uc.priority || 'MEDIUM'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-5 border-b border-slate-200 pb-2">3. Functional Requirements</h2>
                            {editedFunctional.length === 0 ? <p className="text-sm italic text-slate-400 font-sans">No functional requirements defined</p> :
                                <div className="space-y-5 font-sans">
                                    {editedFunctional.map((fr, idx) => (
                                        <div key={fr.requirementId}>
                                            <h4 className="font-bold text-[15px] text-slate-800 mb-1">FR{String(idx + 1).padStart(3, '0')}: {fr.title || 'Untitled Requirement'}</h4>
                                            <p className="text-[14px] text-slate-600 pl-8 leading-relaxed">{fr.description || 'No description provided'}</p>
                                        </div>
                                    ))}
                                </div>
                            }
                        </section>

                        <section className="mt-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-5 border-b border-slate-200 pb-2">4. Non-Functional Requirements</h2>
                            <div className="space-y-5 font-sans">
                                {editedNonFunctional.map(nfrItem => (
                                    <div key={nfrItem.category}>
                                        <h4 className="font-bold text-[15px] text-slate-800 mb-1 uppercase">{nfrItem.category}</h4>
                                        <p className="text-[14px] text-slate-600 pl-8 leading-relaxed">{nfrItem.description || <span className="italic text-slate-400">No constraints defined</span>}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                </div>

            </div>

            {/* Confirm Warning Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 bg-slate-900/60 flex flex-col items-center justify-center z-[100] px-4 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 animate-in slide-in-from-bottom-4 relative">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
                                <span className="material-symbols-outlined text-[28px]">warning</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Broken Links Detected</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    One or more Use Cases are referencing Functional Requirements or Business Rules that you have deleted or modified.
                                </p>
                            </div>
                        </div>

                        <label className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors shadow-sm">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded border-slate-400 text-primary focus:ring-primary"
                                checked={warningsConfirmed}
                                onChange={(e) => setWarningsConfirmed(e.target.checked)}
                            />
                            <span className="text-sm font-semibold text-slate-800 w-full select-none">
                                I confirm I have reviewed the yellow-highlighted use cases and these changes are safe to save.
                            </span>
                        </label>

                        <div className="flex items-center justify-end gap-3 mt-8">
                            <button onClick={() => setShowConfirmModal(false)} className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 shadow-sm">
                                Cancel
                            </button>
                            <button onClick={executeSave} disabled={!warningsConfirmed || saving} className="px-5 py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary/90 disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed shadow-sm border border-transparent">
                                {saving ? "Saving..." : "Proceed & Save"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showUsecaseModal && <UsecaseModal
                usecase={selectedUsecase}
                businessRules={editedBusiness}
                functionalRequirements={editedFunctional}
                onClose={() => setShowUsecaseModal(false)}
                onSave={saveUsecaseFromModal}
            />}
        </div>
    );
}
