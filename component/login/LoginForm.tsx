import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import styles from '../../styles/Login.module.css'
import { Button } from '@mui/material'
import { useState } from "react";
import BaseCheckbox from "../common/BaseCheckbox"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { regexEmail, regexPassword } from "../validate/pattern";

type TLoginForm = {
    userName: string,
    password: string | number
}

interface ILoginForm {
    handleLogin: (data: object) => void
}

const SignupSchema = yup
    .object({
        userName: yup.string().required().matches(
            regexEmail,
            "Invalid! follow up: name@mor.com.vn"
        ),
        password: yup.string().defined().required().matches(
            regexPassword,
            "Minimum eight characters, at least one letter, one number and one special character!"
        ),
    })
    .required();

export default function LoginForm({ handleLogin }: ILoginForm) {
    const { register, handleSubmit, formState: { errors } } = useForm<TLoginForm>({
        resolver: yupResolver(SignupSchema)
    });
    const onSubmit: SubmitHandler<TLoginForm> = (data, e: any) => {
        e.preventDefault()
        handleLogin(data)
    };
    const [showPassword, setShowPassword] = useState(true)
    const handleChangePasswordType = (value: boolean) => {
        setShowPassword(!value)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
                <div className={"mb-20 " + styles.loginTitle}>Welcome to MMS App.</div>
                <div className="position-rel mb-20">
                    <input
                        className={styles.inputLogin}
                        type="text"
                        {...register("userName")}
                    />
                    <div className={"position-abs " + styles.loginImage}>
                        <Image src="/MailIcon.svg" alt="" width={24} height={24} />
                    </div>
                    {errors.userName && <div className="error-text">{errors.userName.message}</div>}
                </div>
                <div className="position-rel mb-20">
                    <input
                        className={styles.inputLogin}
                        type={showPassword ? "password" : "text"}
                        {...register("password")} />
                    <div className={"position-abs " + styles.loginImage} >
                        <Image src="/LockIcon.svg" alt="" width={24} height={24} />
                    </div>
                    {errors.password && <div className="error-text">{errors.password.message}</div>}
                </div>
                <BaseCheckbox name="hidePassword" content="Show password" onChange={handleChangePasswordType} />
                <Button variant="contained" className={styles.loginButton} type="submit">Login</Button>
            </form>
        </>
    )
}

