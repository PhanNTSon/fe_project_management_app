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
import MembershipPlansPage from './pages/MembershipPlansPage/MembershipPlansPage';
import JoinProjectViaInviteLinkPage from './pages/JoinProjectViaInviteLinkPage/JoinProjectViaInviteLinkPage';

// Dashboard Pages
import UserDashboard from './pages/UserDashboard/UserDashboard';
import ProjectList from './pages/ProjectList/ProjectList';
import CreateProjectPage from './pages/CreateProjectPage/CreateProjectPage';
import ProjectDetailOverviewPage from './pages/ProjectDetailOverviewPage/ProjectDetailOverviewPage';
import ProjectSettingsPage from './pages/ProjectSettingsPage/ProjectSettingsPage';
import ProjectMembersPage from './pages/ProjectMembersPage/ProjectMembersPage';

// Requirement / Document Pages
import RequirementManagementPage from './pages/RequirementManagementPage/RequirementManagementPage';
import SrsDocumentEditorPage from './pages/SrsDocumentEditorPage/SrsDocumentEditorPage';
import DiagramEditorPage from './pages/DiagramEditorPage/DiagramEditorPage';
import UseCaseBuilderPage from './pages/UseCaseBuilderPage/UseCaseBuilderPage';
import ExportDocumentPage from './pages/ExportDocumentPage/ExportDocumentPage';
import FileManagerPage from './pages/FileManagerPage/FileManagerPage';

// Collaboration Pages
import CommentDiscussionPage from './pages/CommentDiscussionPage/CommentDiscussionPage';
import ReviewApprovalPage from './pages/ReviewApprovalPage/ReviewApprovalPage';
import InviteMembersPage from './pages/InviteMembersPage/InviteMembersPage';
import CompareVersionsPage from './pages/CompareVersionsPage/CompareVersionsPage';
import ChangeHistoryPage from './pages/ChangeHistoryPage/ChangeHistoryPage';
import ActivityLogPage from './pages/ActivityLogPage/ActivityLogPage';

// User & Settings Pages
import UserProfileSettingsPage from './pages/UserProfileSettingsPage/UserProfileSettingsPage';
import NotificationsPage from './pages/NotificationsPage/NotificationsPage';
import PaymentCheckoutPage from './pages/PaymentCheckoutPage/PaymentCheckoutPage';
import PaymentHistoryPage from './pages/PaymentHistoryPage/PaymentHistoryPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<MembershipPlansPage />} />
          <Route path="/join-project" element={<JoinProjectViaInviteLinkPage />} />

          {/* Guest-only Routes */}
          <Route path="/login" element={<GuestRoute><LoginPage /></GuestRoute>} />
          <Route path="/register" element={<GuestRoute><RegisterPage /></GuestRoute>} />
          <Route path="/forgot-password" element={<GuestRoute><ForgotPasswordPage /></GuestRoute>} />
          <Route path="/reset-password" element={<GuestRoute><ResetPasswordPage /></GuestRoute>} />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
          <Route path="/projects" element={<ProtectedRoute><ProjectList /></ProtectedRoute>} />
          <Route path="/projects/new" element={<ProtectedRoute><CreateProjectPage /></ProtectedRoute>} />
          <Route path="/projects/detail" element={<ProtectedRoute><ProjectDetailOverviewPage /></ProtectedRoute>} />
          <Route path="/projects/settings" element={<ProtectedRoute><ProjectSettingsPage /></ProtectedRoute>} />
          <Route path="/projects/members" element={<ProtectedRoute><ProjectMembersPage /></ProtectedRoute>} />

          {/* Protected Requirement / Document Routes */}
          <Route path="/requirements" element={<ProtectedRoute><RequirementManagementPage /></ProtectedRoute>} />
          <Route path="/srs-editor" element={<ProtectedRoute><SrsDocumentEditorPage /></ProtectedRoute>} />
          <Route path="/diagram-editor" element={<ProtectedRoute><DiagramEditorPage /></ProtectedRoute>} />
          <Route path="/use-case-builder" element={<ProtectedRoute><UseCaseBuilderPage /></ProtectedRoute>} />
          <Route path="/export" element={<ProtectedRoute><ExportDocumentPage /></ProtectedRoute>} />
          <Route path="/files" element={<ProtectedRoute><FileManagerPage /></ProtectedRoute>} />

          {/* Protected Collaboration Routes */}
          <Route path="/comments" element={<ProtectedRoute><CommentDiscussionPage /></ProtectedRoute>} />
          <Route path="/reviews" element={<ProtectedRoute><ReviewApprovalPage /></ProtectedRoute>} />
          <Route path="/invite" element={<ProtectedRoute><InviteMembersPage /></ProtectedRoute>} />
          <Route path="/compare" element={<ProtectedRoute><CompareVersionsPage /></ProtectedRoute>} />
          <Route path="/history" element={<ProtectedRoute><ChangeHistoryPage /></ProtectedRoute>} />
          <Route path="/activity" element={<ProtectedRoute><ActivityLogPage /></ProtectedRoute>} />

          {/* Protected User & Settings Routes */}
          <Route path="/profile" element={<ProtectedRoute><UserProfileSettingsPage /></ProtectedRoute>} />
          <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><PaymentCheckoutPage /></ProtectedRoute>} />
          <Route path="/payment-history" element={<ProtectedRoute><PaymentHistoryPage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
