import Image from "next/image"
import { useRouter } from "next/router"
import styles from '../../styles/Login.module.css'
import LoginForm from "./LoginForm"
const Login = () => {
    const router = useRouter()
    const handleLogin = async (params: object) => {
        router.push('/home')
    }
    return (
        <>
            <div className={"position-rel " + styles.loginTheme}>
                <div className="position-abs">
                    <Image src="/logo-mor.png" alt="Vercel Logo" width={185} height={62.5} />
                </div>
                <div className={"position-abs " + styles.loginContainer}>
                    <LoginForm handleLogin={handleLogin} />
                </div>
            </div>
        </>
    )
}
export default Login