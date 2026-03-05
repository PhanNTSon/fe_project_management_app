import CusButton from "../../components/CusButton/CusButton"
import { useNavigate } from "react-router-dom"
import "./RegisterPage.css"

export default function RegisterPage() {

    const navigate = useNavigate();

    return (
        <div id="register-page">
            <div className="layer" id="background"></div>

            <div className="layer" id="register-box-container">
                <div id="register-box">
                    <h1>REGISTER</h1>

                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="email" placeholder="Email" />

                    <div className="button-group">
                        <CusButton
                            color="gradient-blue-button"
                            label="Register"
                            onClick={() => { }}
                            loading={false}
                        />

                        <CusButton
                            color="gradient-green-button"
                            label="Login"
                            onClick={() => navigate("/login")}
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