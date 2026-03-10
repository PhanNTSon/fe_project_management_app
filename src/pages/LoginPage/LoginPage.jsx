import { useNavigate } from "react-router-dom"
import CusButton from "../../components/CusButton/CusButton"
import "./LoginPage.css"
import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { login } from "../../api/authService"
import { setAuthToken } from "../../api/axiosClient"
export default function LoginPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const { setJwt, setUser } = useContext(AppContext);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {

        if (loading) return
        setLoading(true)

        try {

            const respData = await login({
                username: username,
                password: password
            })

            console.log(respData)

            // lưu access token
            setJwt(respData.accessToken)
            setAuthToken(respData.accessToken)
            setUser({
                username: respData.username,
                fullName: respData.fullName,
                email: respData.email
            });

            // redirect
            navigate("/dashboard")

        } catch (err) {

            if (err.response) {
                alert(err.response.data?.message || "Login failed")
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
        <div id="login-page">
            <div className="layer" id="background"></div>
            <div className="layer" id="login-box-container">
                <div id="login-box">
                    <h1>Login</h1>
                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <div className="button-group">
                        <CusButton
                            color="gradient-blue-button"
                            label="Login"
                            onClick={() => handleLogin()}
                            loading={false}
                        />

                        <p>
                            Chưa có Tài khoản?
                        </p>
                        <CusButton
                            color="gradient-green-button"
                            label="Register"
                            onClick={() => navigate("/register")}
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