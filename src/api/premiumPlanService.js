import axiosClient from './axiosClient';

/**
 * Creates a new premium plan.
 * @param {Object} planData { planName, price, durationDays, description, status }
 * @returns {Promise<Object>} Created plan data.
 */
export const createPremiumPlan = async (planData) => {
    const response = await axiosClient.post('/admin/premium-plans', planData);
    return response.data;
};
