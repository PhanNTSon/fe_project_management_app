import api from "./axiosClient";

const base = (projectId) => `/api/projects/${projectId}/change-requests`;

// ─── Change Requests ──────────────────────────────────────────
export const getChangeRequests = async (projectId) => {
    const resp = await api.get(base(projectId));
    return resp.data;
    // ResponseChangeRequestDto[] {
    //   changeRequestId, title, description, status, requesterName, createdAt,
    //   items: [{ changeItemId, entityType, entityId, operation, fieldName, oldValue, newValue }]
    // }
};

export const createChangeRequest = async (projectId, dto) => {
    // dto: { title, description, items: [{ entityType, entityId, operation, fieldName, oldValue, newValue }] }
    const resp = await api.post(base(projectId), dto);
    return resp.data;
};

export const approveChangeRequest = async (projectId, requestId) => {
    const resp = await api.post(`${base(projectId)}/${requestId}/approve`);
    return resp.data;
};

export const rejectChangeRequest = async (projectId, requestId) => {
    const resp = await api.post(`${base(projectId)}/${requestId}/reject`);
    return resp.data;
};

export const approveChangeItem = async (projectId, requestId, itemId) => {
    const resp = await api.post(`${base(projectId)}/${requestId}/items/${itemId}/approve`);
    return resp.data;
};

export const rejectChangeItem = async (projectId, requestId, itemId) => {
    const resp = await api.post(`${base(projectId)}/${requestId}/items/${itemId}/reject`);
    return resp.data;
};
