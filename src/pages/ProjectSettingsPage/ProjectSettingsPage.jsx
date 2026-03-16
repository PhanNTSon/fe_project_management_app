import './ProjectSettingsPage.css';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { getMyProjects, updateProject, deleteProject } from '../../api/projectService';
import { logApiError, parseApiError } from '../../api/apiErrorUtils';

const ProjectSettingsPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [projectName, setProjectName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    const fetchProject = async () => {
      try {
        const projects = await getMyProjects();
        const found = projects.find(p => String(p.projectId) === String(projectId));
        if (found) {
          setProjectName(found.projectName);
          setDescription(found.description || '');
        }
      } catch (err) {
        logApiError(err, 'ProjectSettingsPage.fetchProject');
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);

  const handleSaveChanges = async () => {
    setSaving(true);
    try {
      await updateProject(projectId, { projectName, description });
      alert('Project updated successfully.');
    } catch (err) {
      logApiError(err, 'ProjectSettingsPage.handleSaveChanges');
      alert(parseApiError(err, 'Failed to update project.'));
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteProject = async () => {
    if (window.confirm('Are you sure you want to delete this project? This action is permanent and cannot be undone.')) {
      try {
        await deleteProject(projectId);
        alert('Project deleted successfully.');
        navigate('/projects');
      } catch (error) {
        console.error('Failed to delete project:', error);
        alert('Failed to delete project. Make sure you are the project owner.');
      }
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex-1 p-10 flex items-center justify-center">
          <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
        </div>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <aside className="w-full shrink-0 md:w-64 lg:w-72">
          <nav className="flex flex-col gap-1">
            <Link className="flex items-center gap-3 rounded-lg bg-primary/10 px-4 py-3 text-primary transition-all" to="#">
              <span className="material-symbols-outlined">info</span>
              <span className="font-semibold text-sm">General</span>
            </Link>
          </nav>
        </aside>
        <div className="flex-1 space-y-6">
          <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold">Project Details</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Update your project identity and description.</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Project Name</label>
                  <input 
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                    placeholder="Enter project name" 
                    type="text" 
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Project Identifier</label>
                  <div className="relative">
                    <input 
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-sm text-slate-500 outline-none" 
                      readOnly 
                      type="text" 
                      value={`PROJ-${projectId}`} 
                    />
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 text-sm">lock</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Description</label>
                <textarea 
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                  placeholder="Tell us what this project is about..." 
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-end pt-4">
                <button 
                  onClick={handleSaveChanges}
                  disabled={saving}
                  className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-all disabled:opacity-50"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-900 dark:text-red-400">Danger Zone</h3>
                <p className="mt-1 text-sm text-red-700 dark:text-red-500/80">Deleting a project is permanent. All datasets, models, and analytics associated with this project will be deleted immediately.</p>
                <button
                  onClick={handleDeleteProject}
                  className="mt-6 rounded-lg bg-red-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-red-600/20 hover:bg-red-700 transition-all"
                >
                  Delete this project
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectSettingsPage;
