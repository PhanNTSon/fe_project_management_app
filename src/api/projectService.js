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

// ─── Sub-resources ────────────────────────────────────────────
export const getContextDiagramUrl = async (projectId) => {
    const resp = await api.get(`${BASE}/${projectId}/context-diagram`);
    return resp.data; // String URL
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
