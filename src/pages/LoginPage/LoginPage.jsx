import { useNavigate } from "react-router-dom"
import CusButton from "../../components/CusButton/CusButton"
import "./LoginPage.css"
export default function LoginPage() {

    const navigate = useNavigate()

    return (
        <div id="login-page">
            <div className="layer" id="background"></div>
            <div className="layer" id="login-box-container">
                <div id="login-box">
                    <h1>Login</h1>
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <div className="button-group">
                        <CusButton
                            color="gradient-blue-button"
                            label="Login"
                            onClick={() => { }}
                            loading={false}
                        />

                        <CusButton
                            color="gradient-green-button"
                            label="Register"
                            onClick={() => navigate("/register")}
                            loading={false}
                        />

                        <CusButton
                            color="cancel-button"
                            label="Cancel"
                            onClick={() => navigate("/")}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}