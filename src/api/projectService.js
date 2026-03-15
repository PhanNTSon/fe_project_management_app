import api from "./axiosClient";

const BASE = "/api/projects";

// ─── Project CRUD ─────────────────────────────────────────────
export const getMyProjects = async () => {
    const resp = await api.get(BASE);
    return resp.data; // ResponseProjectListDto[]
};

export const createProject = async ({ projectName, description }) => {
    const resp = await api.post(BASE, { projectName: projectName, description: description });
    return resp.data; // ResponseProjectListDto
};

export const deleteProject = async (projectId) => {
    await api.delete(`${BASE}/${projectId}`);
};

export const updateProject = async (projectId, { projectName, description }) => {
    const resp = await api.put(`${BASE}/${projectId}`, { projectName, description });
    return resp.data;
};

// ─── Sub-resources ────────────────────────────────────────────
export const getContextDiagramUrl = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/context-diagram`);
    return resp.data; // String URL
};

export const updateContextDiagramUrl = async (projectId, url) => {
    const resp = await api.put(`${BASE}/${projectId}/context-diagram`, { url });
    return resp.data;
};

export const getVisionScopes = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/vision-scopes`);
    return resp.data; // ResponseVisionScopeDto[]  { visionScopeId, content }
};

export const getConstraints = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/constraints`);
    return resp.data; // ResponseConstraintDto[]  { constraintId, description }
};

export const getBusinessRules = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/business-rules`);
    return resp.data; // ResponseBusinessRuleDto[]  { ruleId, ruleDescription }
};

export const getUsecases = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/usecases`);
    return resp.data; // ResponseUsecaseDto[]  { usecaseId, usecaseName, precondition, postcondition, exceptions, priority }
};

export const getFunctionalRequirements = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/functional-requirements`);
    return resp.data; // ResponseFunctionalReqDto[]  { requirementId, title, description }
};

export const getNonFunctionalRequirements = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/non-functional-requirements`);
    return resp.data; // ResponseNonFunctionalReqDto[]  { requirementId, category, description }
};

export const getPermissions = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/permissions`);
    return resp.data; // ResponsePermissionDto[]  { code, description }
};

export const getUserRole = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/my-role`);
    return resp.data; // ResponseRoleDto  { roleName: "OWNER" | "MAINTAINER" | "EDITOR" | "VIEWER" }
};

// ─── AI Integration ───────────────────────────────────────────
export const generateAiContextDiagram = async (projectId, payload) => {
    const resp = await api.post(`${BASE}/${projectId}/ai/generate-context`, payload);
    return resp.data.mermaidCode;
};

export const generateAiUsecaseDiagram = async (projectId, payload) => {
    const resp = await api.post(`${BASE}/${projectId}/ai/generate-usecase`, payload);
    return resp.data.mermaidCode;
};

// ─── Team Management ──────────────────────────────────────────
export const getProjectStats = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/stats`);
    return resp.data;
};

export const getProjectMembers = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/members`);
    return resp.data;
};

export const getProjectInvitations = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/invitations`);
    return resp.data;
};

export const createInvitation = async (projectId, email) => {
    const resp = await api.post(`${BASE}/${projectId}/invitations`, { email });
    return resp.data;
};

export const removeProjectMember = async (projectId, userId) => {
    const resp = await api.delete(`${BASE}/${projectId}/members/${userId}`);
    return resp.data;
};

export const updateProjectMemberRole = async (projectId, userId, roleName) => {
    const resp = await api.put(`${BASE}/${projectId}/members/${userId}/role`, { roleName });
    return resp.data;
};

// ─── User Invitations ─────────────────────────────────────────

export const getUserInvitations = async () => {
    // This is explicitly for the logged-in user, under /api/users/me/invitations
    const resp = await api.get('/api/users/me/invitations');
    return resp.data; // ResponseUserInvitationDto[]
};

export const respondToInvitation = async (invitationId, accept) => {
    const resp = await api.post(`/api/users/me/invitations/${invitationId}/respond`, { accept });
    return resp.data;
};

export const restoreVersion = async (projectId, version) => {
    const resp = await api.post(`${BASE}/${projectId}/restore-version`, { version });
    return resp.data;
};
