import React, {useState} from "react"
import './style.css'

import Input from "../../components/Input"
import Button from "../../components/Button"

import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

import {GoogleLogin} from "react-google-login"
import {LOGIN_CLIENT_ID} from "../../contexts/constants"

const SignIn = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setProfilePic] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            setError("Preencha todos os campos");
            return;
        }

    const res = signin(email, password);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };

    const responseGoogle = (response) => {
        const { profileObj: { name, email, imageUrl } } = response;
        setName(name);
        setEmail(email);
        setProfilePic(imageUrl);
    };

    return (
        <container>
            <label>Login</label>
            <content>
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError("")]}
                />
                <labelError>{error}</labelError>
                <Button Text="Entrar" onClick={handleLogin} />
                <labelSignIn>
                    Não tem conta?
                    <strong>
                        <Link to="/signup">&nbsp;Registre-se</Link>
                    </strong>
                </labelSignIn>
            </content>
            <GoogleLogin
                clientId={LOGIN_CLIENT_ID}
                buttonText='Faça seu login com Google'
                onSuccess={responseGoogle}
                onFailure={(err) => setError("Erro ao fazer login com o Google")}
            />
        </container>
    );
};

export default SignIn;