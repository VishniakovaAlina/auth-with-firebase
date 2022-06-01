import React, {FC, useState, useMemo} from "react";
import { observer } from "mobx-react-lite";

import {firebaseAuthWithEmail} from "../../api/firebase";
import {AuthStoreInstance} from "./store";
import Input from "../../components/input";
import {ValidEmailRegex, ValidPasswordRegex} from "../../constants";

import "./Auth.scss";
import {useNavigate} from "react-router";

interface AuthProps {
    store: AuthStoreInstance
}

const Auth: FC<AuthProps> = ({ store }) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        firebaseAuthWithEmail({ email, password }).then(
            (resp) => {
                localStorage.setItem("idToken", JSON.stringify(resp.idToken))
                store.setData(resp);
                navigate('/')
            },
            (error) => {
                alert(error.response.data.error.message)
            });
    };

    const validate = useMemo(() => {
        const validateObj = {
            email: '',
            password: ''
        }

        if(!ValidEmailRegex.test(email) && email)
            validateObj.email = "Введите верный формат email"

        if(!ValidPasswordRegex.test(password) && password)
            validateObj.password = "Пароль должен состоять из восьми или более символов латинского алфавита, содержать заглавные и строчные буквы, цифры и хотя бы один из символов ! @ $ % ^ & * ( ) _ - +"

        return validateObj
    }, [email, password]);

    return <div className="auth">
        <form className="auth__form" onSubmit={handleSubmitForm}>
            <Input
                className="auth__form__input"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                error={validate.email}
            />
            <Input
                className="auth__form__input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                error={validate.password}
            />
            <button
                className="auth__form__button"
                type="submit"
                disabled={Boolean(validate.email || validate.password || !email || !password)}
            >
                Sign in
            </button>
        </form>
    </div>
}

export default observer(Auth);