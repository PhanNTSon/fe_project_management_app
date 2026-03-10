import CusButton from "../../components/CusButton/CusButton"
import { useNavigate } from "react-router-dom"
import "./RegisterPage.css"
import { useState } from "react"
import { register } from "../../api/authService"

export default function RegisterPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const handleRegister = async () => {

        if (loading) return
        setLoading(true)

        try {

            const resp = await register({
                username,
                password,
                email
            })

            console.log(resp)
            alert("Register successfully")
            navigate("/login")
        } catch (err) {

            if (err.response) {
                console.error(err.response.data)
                alert(err.response.data?.message || "Register failed")
            }
            else if (err.request) {
                alert("Server not responding")
            }
            else {
                alert(err.message)
            }

        } finally {
            setLoading(false)
        }
    }

    return (
        <div id="register-page">
            <div className="layer" id="background"></div>

            <div className="layer" id="register-box-container">
                <div id="register-box">
                    <h1>REGISTER</h1>

                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={e1 => setPassword(e1.target.value)} />
                    <input type="email" placeholder="Email" onChange={e2 => setEmail(e2.target.value)} />

                    <div className="button-group">
                        <CusButton
                            color="gradient-blue-button"
                            label="Register"
                            onClick={() => handleRegister()}
                            loading={loading}
                        />

                        <p>
                            Đã có Tài khoản?
                        </p>
                        <CusButton
                            color="gradient-green-button"
                            label="Login"
                            onClick={() => navigate("/login")}
                            loading={false}
                        />

                        <CusButton
                            color="dashed-text-button"
                            label="Cancel"
                            onClick={() => navigate("/")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}