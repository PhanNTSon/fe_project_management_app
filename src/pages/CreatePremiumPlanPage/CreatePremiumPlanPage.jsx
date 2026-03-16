import './CreatePremiumPlanPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { createPremiumPlan } from '../../api/premiumPlanService';
import { parseApiError, logApiError } from '../../api/apiErrorUtils';

const CreatePremiumPlanPage = () => {
    const navigate = useNavigate();
    const [planName, setPlanName] = useState('');
    const [price, setPrice] = useState('');
    const [durationDays, setDurationDays] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('ACTIVE');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!planName.trim()) {
            setError('Plan name is required.');
            return;
        }
        if (!price || isNaN(price) || Number(price) < 0) {
            setError('Valid price is required.');
            return;
        }
        if (!durationDays || isNaN(durationDays) || Number(durationDays) <= 0) {
            setError('Valid duration (in days) is required.');
            return;
        }
        if (description.length > 500) {
            setError('Description cannot exceed 500 characters.');
            return;
        }
        
        try {
            setSubmitting(true);
            setError(null);
            
            const reqData = {
                planName: planName.trim(),
                price: Number(price),
                durationDays: Number(durationDays),
                description: description.trim(),
                status: status
            };
            
            await createPremiumPlan(reqData);
            
            // Redirect back to a plans list or dashboard after creation
            navigate('/dashboard'); 
        } catch (err) {
            logApiError(err, 'CreatePremiumPlanPage');
            setError(parseApiError(err, 'Failed to create Premium Plan. Please try again.'));
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <DashboardLayout>
            <div className="flex flex-1 justify-center">
                <div className="flex flex-col max-w-[800px] flex-1 gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold tracking-tight">Create a Premium Plan</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base">
                            Define a new subscription tier for users.
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Plan Name */}
                                <label className="flex flex-col gap-2 md:col-span-2">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Plan Name <span className="text-red-500">*</span>
                                    </span>
                                    <input
                                        className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary p-3 text-base border outline-none"
                                        placeholder="e.g. Pro Monthly"
                                        type="text"
                                        value={planName}
                                        onChange={e => setPlanName(e.target.value)}
                                        maxLength={100}
                                        disabled={submitting}
                                    />
                                    <span className="text-xs text-slate-400 text-right">{planName.length}/100</span>
                                </label>

                                {/* Price */}
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Price (USD/VND) <span className="text-red-500">*</span>
                                    </span>
                                    <input
                                        className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary p-3 text-base border outline-none"
                                        placeholder="e.g. 9.99"
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        value={price}
                                        onChange={e => setPrice(e.target.value)}
                                        disabled={submitting}
                                    />
                                </label>

                                {/* Duration Days */}
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Duration (Days) <span className="text-red-500">*</span>
                                    </span>
                                    <input
                                        className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary p-3 text-base border outline-none"
                                        placeholder="e.g. 30"
                                        type="number"
                                        step="1"
                                        min="1"
                                        value={durationDays}
                                        onChange={e => setDurationDays(e.target.value)}
                                        disabled={submitting}
                                    />
                                </label>

                                {/* Status */}
                                <label className="flex flex-col gap-2 md:col-span-2">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Status
                                    </span>
                                    <select
                                        className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary p-3 text-base border outline-none"
                                        value={status}
                                        onChange={e => setStatus(e.target.value)}
                                        disabled={submitting}
                                    >
                                        <option value="ACTIVE">ACTIVE</option>
                                        <option value="INACTIVE">INACTIVE</option>
                                    </select>
                                </label>

                                {/* Description */}
                                <label className="flex flex-col gap-2 md:col-span-2">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Description
                                    </span>
                                    <textarea
                                        className="w-full min-h-[120px] rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary p-3 text-base resize-none border outline-none"
                                        placeholder="Outline the benefits of this plan..."
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                        maxLength={500}
                                        disabled={submitting}
                                    />
                                    <span className="text-xs text-slate-400 text-right">{description.length}/500</span>
                                </label>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 flex flex-col md:flex-row justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
                            <button
                                type="button"
                                onClick={() => navigate('/dashboard')}
                                disabled={submitting}
                                className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 font-bold hover:bg-white dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={submitting || !planName.trim() || !price || !durationDays}
                                className="px-8 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 flex items-center gap-2"
                            >
                                {submitting && <span className="material-symbols-outlined text-lg animate-spin">progress_activity</span>}
                                {submitting ? 'Creating…' : 'Create Plan'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CreatePremiumPlanPage;
