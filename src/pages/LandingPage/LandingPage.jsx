import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./LandingPage.css"
import CusButton from "../../components/CusButton/CusButton"

export default function LandingPage() {

    const navigate = useNavigate()

    // Sau này thay bằng auth context
    const [isLoggedIn] = useState(false)

    return (
        <div id="landing-page">

            {/* ===== BACKGROUND LAYER ===== */}
            <div className="layer background-layer">
                {/* IMPORT LIB BACKGROUND Ở ĐÂY */}
                {/* Ví dụ: <Particles /> hoặc <VantaBackground /> */}
            </div>

            {/* ===== CONTENT LAYER ===== */}
            <div className="layer content-layer">

                <header className="landing-header">
                    <div className="logo">SWD392</div>

                    <div className="header-actions">
                        {!isLoggedIn ? (
                            <CusButton
                                label="Login"
                                color="gradient-blue-button"
                                onClick={() => navigate("/login")}
                            />
                        ) : (
                            <>
                                <CusButton
                                    label="To Dashboard"
                                    color="white-button"
                                    onClick={() => navigate("/dashboard")}
                                />
                                <div className="avatar-circle"></div>
                            </>
                        )}
                    </div>
                </header>

                <main className="landing-main">
                    <h1>Project Management System</h1>
                    <p>
                        Quản lý project đơn giản, hiện đại và hiệu quả.
                    </p>

                    {!isLoggedIn && (
                        <CusButton
                            label="Get Started"
                            color="gradient-green-button"
                            onClick={() => navigate("/register")}
                        />
                    )}
                </main>

                <footer className="landing-footer">
                    © 2026 - SWD392
                </footer>

            </div>

        </div>
    )
}