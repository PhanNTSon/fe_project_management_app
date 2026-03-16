import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"

export default function ProtectedRoute({ children }) {

    const { jwt, authLoading } = useContext(AppContext)

    if (authLoading) return null

    if (!jwt) {
        return <Navigate to="/login" replace />
    }

    return children
}