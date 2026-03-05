import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import LoginPage from './pages/LoginPage/LoginPage'
import UserDashboardPage from './pages/UserDashboardPage/UserDashboardPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage'

function AppContent() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<UserDashboardPage />} />
            <Route path="/project/:projectId" element={<ProjectDetailPage />} />

            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}

export default App
