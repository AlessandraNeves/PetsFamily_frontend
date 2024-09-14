import React, {useState} from "react"
import * as C from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"

import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

const SignUp = () => {

    const { signup } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")
    const [error, setError] = useState("")

    const handleSignUp = () => {
        if(!email | !password | !passwordConf) {
            setError("Preencha todos os campos")
            return
        } else if (password !== passwordConf) {
            setError("As senhas não são iguais")
            return
        }

        const res = signup(email, password)

        if (res) {
            setError(res)
            return
        }

        alert("Usuário cadastrado com sucesso!")
        navigate("/")
    }

    return (
        <C.Container>
            <C.Label>Registro de Login</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError("")]}
                />
                <Input
                    type="passwordConf"
                    placeholder="Confirme sua senha"
                    value={passwordConf}
                    onChange={(e) => [setPasswordConf(e.target.value), setError("")]}
                />
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Inscrever-se" onClick={handleSignUp} />
                <C.LabelSignUp>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </C.Strong>
                </C.LabelSignUp>
            </C.Content>
        </C.Container>
    )
}

export default SignUp