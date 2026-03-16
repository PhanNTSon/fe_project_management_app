import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"

export default function GuestRoute({ children }) {

    const { jwt, authLoading } = useContext(AppContext)

    if (authLoading) return null

    if (jwt) {
        return <Navigate to="/dashboard" replace />
    }

    return children
}