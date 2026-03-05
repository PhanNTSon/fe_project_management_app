import { useNavigate } from "react-router-dom"
import "./LandingPage.css"
import CusButton from "../../components/CusButton/CusButton"

export default function LandingPage() {

    const navigate = useNavigate()

    return (
        <>
            <header>
                <CusButton
                    label="Login"
                    color="gradient-blue-button"
                    onClick={() => navigate("/login")}
                />
            </header>
            <main></main>
            <footer></footer>
        </>
    )
}