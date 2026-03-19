import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import GuestRoute from './components/GuestRoute';
import ProtectedRoute from './components/ProtectedRoute';
// Public / Auth Pages
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';

// Dashboard Pages
import UserDashboard from './pages/UserDashboard/UserDashboard';
import ProjectList from './pages/ProjectList/ProjectList';
import CreateProjectPage from './pages/CreateProjectPage/CreateProjectPage';
import ProjectDetailOverviewPage from './pages/ProjectDetailOverviewPage/ProjectDetailOverviewPage';
import ProjectSettingsPage from './pages/ProjectSettingsPage/ProjectSettingsPage';
import ProjectMembersPage from './pages/ProjectMembersPage/ProjectMembersPage';


function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />

          {/* Guest-only Routes */}
          <Route path="/login" element={<GuestRoute><LoginPage /></GuestRoute>} />
          <Route path="/register" element={<GuestRoute><RegisterPage /></GuestRoute>} />
          <Route path="/forgot-password" element={<GuestRoute><ForgotPasswordPage /></GuestRoute>} />
          <Route path="/reset-password" element={<GuestRoute><ResetPasswordPage /></GuestRoute>} />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
          <Route path="/projects" element={<ProtectedRoute><ProjectList /></ProtectedRoute>} />
          <Route path="/projects/new" element={<ProtectedRoute><CreateProjectPage /></ProtectedRoute>} />
          <Route path="/projects/:projectId" element={<ProtectedRoute><ProjectDetailOverviewPage /></ProtectedRoute>} />
          <Route path="/projects/:projectId/settings" element={<ProtectedRoute><ProjectSettingsPage /></ProtectedRoute>} />
          <Route path="/projects/:projectId/members" element={<ProtectedRoute><ProjectMembersPage /></ProtectedRoute>} />

        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
