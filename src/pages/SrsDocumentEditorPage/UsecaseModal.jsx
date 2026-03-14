import React, { useState } from 'react';

export default function UsecaseModal({ usecase, businessRules = [], functionalRequirements = [], onClose, onSave }) {
    // If we have an existing usecase, seed state. Otherwise start empty.
    const isEdit = !!usecase;
    const [usecaseName, setUsecaseName] = useState(usecase?.usecaseName || '');
    const [precondition, setPrecondition] = useState(usecase?.precondition || '');
    const [postcondition, setPostcondition] = useState(usecase?.postcondition || '');
    const [priority, setPriority] = useState(usecase?.priority || 'MEDIUM');
    const [exceptions, setExceptions] = useState(usecase?.exceptions || '');

    // Additional conceptual fields mapped to the UI
    const [actor, setActor] = useState(usecase?.actor || '');
    const [description, setDescription] = useState(usecase?.description || '');

    // Dropdowns for relational logic
    const [functionRelId, setFunctionRelId] = useState(usecase?.functionRelId || '');
    const [linkedBusinessRuleIds, setLinkedBusinessRuleIds] = useState(usecase?.linkedBusinessRuleIds || []);

    // Arrays for flows
    // Note: normally flows are separate endpoints/entities but per instructions we keep them inside the usecase payload as strings.
    const [normalFlows, setNormalFlows] = useState(usecase?.normalFlows || []);
    const [alterFlows, setAlterFlows] = useState(usecase?.alterFlows || []);

    const handleSave = () => {
        onSave({
            ...usecase,
            usecaseName, precondition, postcondition, priority, exceptions,
            actor, description, functionRelId, linkedBusinessRuleIds,
            normalFlows, alterFlows
        });
    };

    const handleAddLinkedBr = (e) => {
        const id = e.target.value;
        if (id && !linkedBusinessRuleIds.includes(String(id))) {
            setLinkedBusinessRuleIds([...linkedBusinessRuleIds, String(id)]); // Ensure string comparison
        }
        e.target.value = ""; // reset dropdown
    };

    const removeLinkedBr = (idToRemove) => {
        setLinkedBusinessRuleIds(linkedBusinessRuleIds.filter(id => String(id) !== String(idToRemove)));
    };

    const DynamicFlowList = ({ title, flows, setFlows }) => {
        const remove = (idx) => setFlows(flows.filter((_, i) => i !== idx));
        const add = () => setFlows([...flows, '']);
        const update = (idx, val) => setFlows(flows.map((f, i) => i === idx ? val : f));

        return (
            <div className="border border-slate-300 rounded overflow-hidden mt-3">
                <div className="bg-slate-100 border-b border-slate-300 px-3 py-2 font-bold text-xs text-slate-800 uppercase tracking-wide">
                    {title}
                </div>
                <div className="p-3 bg-white space-y-2">
                    {flows.map((flowText, idx) => (
                        <div key={idx} className="flex gap-2 relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 select-none">
                                {idx + 1}:
                            </div>
                            <input
                                className="flex-1 w-full text-xs box-border border border-slate-300 rounded focus:ring-1 focus:ring-primary focus:border-primary py-1.5 pr-2 shadow-sm"
                                style={{ paddingLeft: '2.2rem' }}
                                value={flowText}
                                placeholder="Describe step..."
                                onChange={e => update(idx, e.target.value)}
                            />
                            <button onClick={() => remove(idx)} className="w-7 h-7 rounded bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200 hover:bg-rose-100 hover:text-rose-700 text-[10px] font-black shrink-0 transition-colors">
                                <span className="material-symbols-outlined text-[14px]">close</span>
                            </button>
                        </div>
                    ))}
                    <button onClick={add} className="w-full py-1.5 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center border border-dashed border-emerald-300 hover:bg-emerald-100 hover:text-emerald-800 mt-2 text-xs font-bold transition-colors">
                        <span className="material-symbols-outlined text-[16px] mr-1">add</span> Add Step
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 bg-slate-900/50 grid place-items-center z-[150] px-4" style={{ paddingBottom: '2vh', paddingTop: '2vh' }}>
            <div className="bg-[#f8f9fa] rounded-xl shadow-2xl max-w-4xl w-full flex flex-col border border-slate-300 relative" style={{ maxHeight: '90vh' }}>

                {/* Header (Fixed) */}
                <div className="flex justify-between items-start px-8 pt-6 pb-4 border-b border-slate-200 bg-white rounded-t-xl shrink-0">
                    <div className="w-full">
                        <h2 className="text-[24px] font-black text-slate-900 leading-tight">
                            {isEdit ? 'Edit Use Case Details' : 'New Use Case'}
                        </h2>
                        <input
                            className="bg-transparent border border-transparent hover:border-slate-200 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary rounded p-1.5 text-sm font-bold text-slate-800 w-full max-w-[600px] mt-2 placeholder:text-slate-400 transition-colors shadow-sm"
                            placeholder="e.g. UC-01X: Manage Member List..."
                            value={usecaseName}
                            onChange={(e) => setUsecaseName(e.target.value)}
                        />
                    </div>
                    <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 shrink-0 ml-4 transition-colors">
                        <span className="material-symbols-outlined font-bold">close</span>
                    </button>
                </div>

                {/* Content (Scrollable) */}
                <div className="flex-1 overflow-y-auto px-8 py-6 space-y-5 srs-scroll bg-[#f8f9fa]">

                    {/* Top Top Box */}
                    <div className="flex border border-slate-300 bg-white rounded shadow-sm overflow-hidden min-h-[100px]">
                        <div className="w-3/5 p-4 space-y-3 border-r border-slate-300">
                            <div className="text-sm text-slate-800 flex items-start gap-3">
                                <span className="font-bold whitespace-nowrap w-[90px] mt-1 text-slate-600">Description:</span>
                                <textarea
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="As a [role], I want to..."
                                    className="border border-slate-300 rounded p-2 flex-1 text-sm focus:ring-1 focus:ring-primary focus:border-primary shadow-sm min-h-[60px]"
                                />
                            </div>
                            <div className="text-sm text-slate-800 flex items-center gap-3">
                                <span className="font-bold w-[90px] text-slate-600">Actor:</span>
                                <input
                                    value={actor}
                                    onChange={e => setActor(e.target.value)}
                                    placeholder="e.g. User, Admin, System..."
                                    className="border border-slate-300 rounded p-1.5 flex-1 text-sm focus:ring-1 focus:ring-primary focus:border-primary shadow-sm"
                                />
                            </div>
                        </div>
                        <div className="w-2/5 p-4 bg-slate-50/50">
                            <label className="block text-sm font-bold text-slate-600 mb-2">Linked Function / Requirement:</label>
                            <div className="relative">
                                <select
                                    value={functionRelId || ''}
                                    onChange={e => setFunctionRelId(e.target.value)}
                                    className="w-full appearance-none border border-slate-300 rounded text-sm focus:ring-1 focus:ring-primary focus:border-primary p-2.5 pr-8 text-slate-700 shadow-sm cursor-pointer bg-white hover:border-slate-400 transition-colors"
                                >
                                    <option value="">-- None Selected --</option>
                                    {functionalRequirements.map(fr => (
                                        <option key={fr.requirementId} value={fr.requirementId}>
                                            {fr.title}
                                        </option>
                                    ))}
                                </select>
                                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]">expand_more</span>
                            </div>
                            {!functionRelId && functionalRequirements.length === 0 && (
                                <p className="text-[10px] text-amber-600 mt-2 font-medium">No functional requirements created yet.</p>
                            )}
                        </div>
                    </div>

                    {/* Conditions */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-slate-300 bg-white rounded p-1 shadow-sm flex flex-col">
                            <span className="font-bold text-xs uppercase text-slate-500 bg-slate-50 border-b border-slate-200 px-3 py-1.5">Precondition</span>
                            <textarea
                                className="flex-1 border-none p-3 text-sm focus:ring-1 focus:ring-slate-100 text-slate-800 min-h-[60px] resize-none placeholder:text-slate-300"
                                value={precondition}
                                onChange={(e) => setPrecondition(e.target.value)}
                                placeholder="Required system state before usecase..."
                            />
                        </div>

                        <div className="border border-slate-300 bg-white rounded p-1 shadow-sm flex flex-col">
                            <span className="font-bold text-xs uppercase text-slate-500 bg-slate-50 border-b border-slate-200 px-3 py-1.5">Postcondition</span>
                            <textarea
                                className="flex-1 border-none p-3 text-sm focus:ring-1 focus:ring-slate-100 text-slate-800 min-h-[60px] resize-none placeholder:text-slate-300"
                                value={postcondition}
                                onChange={(e) => setPostcondition(e.target.value)}
                                placeholder="Resulting system state..."
                            />
                        </div>
                    </div>

                    {/* Business Rules - Reading from SRS State */}
                    <div className="border border-slate-300 rounded overflow-hidden mt-3 shadow-sm bg-white">
                        <div className="bg-amber-50/80 border-b border-amber-200 px-4 py-2.5 flex items-center justify-between">
                            <span className="font-bold text-xs text-amber-800 uppercase tracking-wide flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[16px]">rule</span>
                                Linked Business Rules
                            </span>
                            <div className="relative">
                                <select
                                    onChange={handleAddLinkedBr}
                                    className="appearance-none text-xs border border-amber-300 rounded shadow-sm bg-white text-slate-800 w-[240px] cursor-pointer py-1.5 pl-3 pr-8 hover:border-amber-400 focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-colors"
                                    defaultValue=""
                                >
                                    <option value="" disabled>+ Link a Business Rule</option>
                                    {businessRules.filter(br => !linkedBusinessRuleIds.includes(String(br.ruleId))).map(br => (
                                        <option key={br.ruleId} value={br.ruleId}>
                                            {br.ruleDescription.length > 35 ? br.ruleDescription.substring(0, 35) + '...' : br.ruleDescription}
                                        </option>
                                    ))}
                                </select>
                                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[18px]">expand_more</span>
                            </div>
                        </div>
                        <div className="p-4">
                            {linkedBusinessRuleIds.length === 0 ? (
                                <div className="text-sm text-slate-400 italic text-center py-2">No business rules linked yet. select from the dropdown above.</div>
                            ) : (
                                <div className="space-y-2">
                                    {linkedBusinessRuleIds.map(ruleId => {
                                        const brObj = businessRules.find(b => String(b.ruleId) === String(ruleId));
                                        return (
                                            <div key={ruleId} className="flex gap-3 items-center bg-amber-50/50 rounded border border-amber-100 px-4 py-2.5 shadow-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></div>
                                                <span className="text-sm text-slate-800 flex-1 truncate font-medium">
                                                    {brObj ? brObj.ruleDescription : <span className="text-rose-500 italic flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">error</span> Error: Original rule deleted or modified. Please remove.</span>}
                                                </span>
                                                <button onClick={() => removeLinkedBr(ruleId)} className="text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded p-1 shrink-0 transition-colors flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Flows */}
                    <div className="grid grid-cols-2 gap-4">
                        <DynamicFlowList title="Normal Flow" flows={normalFlows} setFlows={setNormalFlows} />
                        <DynamicFlowList title="Alter / Alternative Flow" flows={alterFlows} setFlows={setAlterFlows} />
                    </div>

                    {/* Bottom Area: Exceptions & Priority */}
                    <div className="flex gap-4 mt-2">
                        <div className="border border-slate-300 bg-white rounded shadow-sm flex-1 flex flex-col overflow-hidden">
                            <span className="bg-slate-50 border-b border-slate-200 px-3 py-1.5 font-bold text-xs uppercase text-slate-500">Exceptions</span>
                            <textarea
                                className="border-none p-3 text-sm focus:ring-1 focus:ring-slate-100 text-slate-800 bg-transparent resize-none flex-1 min-h-[40px] placeholder:text-slate-300"
                                value={exceptions}
                                onChange={(e) => setExceptions(e.target.value)}
                                placeholder="If system cannot..."
                            />
                        </div>

                        <div className="border border-slate-300 bg-white rounded shadow-sm flex items-center px-4 w-[280px]">
                            <span className="font-bold text-slate-600 text-sm mr-3">Priority:</span>
                            <div className="relative flex-1">
                                <select
                                    className="appearance-none w-full border border-slate-300 rounded bg-white text-sm focus:ring-1 focus:ring-primary focus:border-primary pl-3 pr-8 py-2 cursor-pointer font-bold shadow-sm text-slate-700 hover:border-slate-400 transition-colors"
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                >
                                    <option value="HIGH">HIGH</option>
                                    <option value="MEDIUM">MEDIUM</option>
                                    <option value="LOW">LOW</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]">expand_more</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer (Fixed) */}
                <div className="px-8 py-5 border-t border-slate-200 bg-white rounded-b-xl flex justify-end gap-3 shrink-0">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-600 font-bold text-[14px] hover:bg-slate-50 hover:text-slate-900 shadow-sm transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-8 py-2.5 rounded-lg bg-primary border border-transparent text-white font-bold text-[14px] hover:bg-primary/90 shadow-sm transition-colors"
                    >
                        Save Use Case
                    </button>
                </div>

            </div>
        </div>
    );
}
