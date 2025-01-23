import axios from "axios";
import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername]               = useState("");
    const [isUsernameEmpty, setUsernameEmpty]   = useState(false);
    const [isPasswordEmpty, setPasswordEmpty]   = useState(false);
    const [password, setPassword]               = useState("");
    const [isSignUp, setSignUp]                 = useState(false);
    const [error, setError]                     = useState("");

    const navigate                              = useNavigate();

    function login() {
        if (!invalidCredentials()) {
            axios.post("http://localhost:8080/auth/login", { username, password })
            .then((response) => {
                localStorage.setItem("accessToken", response.data);
                navigate("/");
            })
            .catch((err) => {
                setError(err.response.data);
            });
        }
    }

    function signUp() {
        if (!invalidCredentials()) {
            axios.post("http://localhost:8080/auth/signUp", { username, password })
            .then((response) => {
                localStorage.setItem("accessToken", response.data);
                navigate("/");
            })
            .catch((err) => {
                setError(err.response.data);
            });
        }
    }

    function invalidCredentials() {
        if (!username) {
            setUsernameEmpty(true);
        } else {
            setUsernameEmpty(false);
        }
        if (!password) {
            setPasswordEmpty(true);
        } else {
            setPasswordEmpty(false);
        }

        setError("");

        return !username || !password;
    }

    return (
        <div style={{ width: "100%" }} className="flex flex-column justify-content-center align-items-center gap-6">
            <div style={{ fontSize: "100px" }}>Intweet</div>
            
            <div>
                { error ? <div className="text-red-500">{error}</div> : null }
                { isUsernameEmpty ? <div className="text-red-500">Le nom d'utilisateur ne doit pas être vide</div> : null}
                { isPasswordEmpty ? <div className="text-red-500">Le mot de passe ne doit pas être vide</div> : null}
            </div>

            <div style={{ width: "fit-content" }} className="flex flex-column gap-4">
                <div className="flex flex-column gap-2">
                    <InputText value={username} invalid={isUsernameEmpty} placeholder="Nom d'utilisateur" onChange={(e) => setUsername(e.target.value)} />
                    <Password value={password} invalid={isPasswordEmpty} placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} toggleMask/>
                </div>

                <div className="flex flex-column gap-1">
                    <Button label={isSignUp ? "S'inscrire" : "Se connecter"} onClick={isSignUp ? signUp : login} />
                    <Button label={isSignUp ? "Se connecter" : "S'inscrire"} onClick={() => setSignUp(!isSignUp)} link />
                </div>
            </div>
        </div>
    );
}