import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import LoginPage from './pages/LoginPage/LoginPage'
import UserDashboardPage from './pages/UserDashboardPage/UserDashboardPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage'
import { AppProvider } from './context/AppContext'
import GuestRoute from './components/GuestRoute'
import ProtectedRoute from './components/ProtectedRoute'

function AppContent() {
    return (
        <Routes>
            <Route path="/" element={
                <GuestRoute>
                    <LandingPage />
                </GuestRoute>
            } />
            <Route path="/login" element={
                <GuestRoute>
                    <LoginPage />
                </GuestRoute>
            } />
            <Route path="/register" element={
                <GuestRoute>
                    <RegisterPage />
                </GuestRoute>
            } />
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <UserDashboardPage />
                </ProtectedRoute>
            } />
            <Route path="/project/:projectId" element={
                <ProtectedRoute>
                    <ProjectDetailPage />
                </ProtectedRoute>
            } />

            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}

function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </AppProvider>

    )
}

export default App
