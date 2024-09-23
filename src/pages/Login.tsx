import { FormEvent, useContext, useEffect, useState } from "react";
import AuthClass from "../components/classes/AuthClass";
import TextInput from "../components/inputs/TextInput";
import { handleAuthChange, iconClass, loginObj} from "../components/variables/auth";
import PassInput from "../components/inputs/PassInput";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AuthButton from "../components/buttons/AuthButton";
import { LoginContext } from "../contexts/LoginContext";
import IsRegisteredModal from "../components/modals/IsRegisteredModal";

function Login() {
    const navigate = useNavigate()
    const [formProp, setFormProp] = useState(loginObj)
    const [isVisible, setIsVisible] = useState(false)
    const [msg, setMsg] = useState("")
    const loginContext = useContext(LoginContext)

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        loginContext.handleLogin(formProp.email, formProp.password)
    }

    useEffect(() => {
        if (loginContext.msg) setMsg(loginContext.msg)
    }, [loginContext.msg])

    useEffect(() => {
        if (loginContext.user.id) navigate("/")
    }, [loginContext.user])

    return (
        <AuthClass header="Enter your account" subHeader="Enter the right email and password you registered with to unlock other access.">
            <>
                <form className="grid grid-cols-1 gap-6 mt-8" onSubmit={submitForm}>
                    <TextInput 
                        label="Email"
                        id="email"
                        type="email"
                        value={formProp.email}
                        placeholder="Enter your email"
                        isRequired={true}
                        handleChange={(e: FormEvent<HTMLInputElement>) => handleAuthChange(e, setFormProp)}
                        icon={<MdEmail className={iconClass} />}
                    />
                    <PassInput
                        label="Password"
                        id="password"
                        type={isVisible ? "text" : "password"}
                        value={formProp.password}
                        placeholder="Enter your password"
                        isRequired={true}
                        handleChange={(e: FormEvent<HTMLInputElement>) => handleAuthChange(e, setFormProp)}
                        icon={<FaLock className={iconClass} />}
                        isVisible={isVisible}
                        changeVisibility={() => setIsVisible(!isVisible)}
                    />
                    <div className="md:w-1/2 md:mx-auto">
                        <p className="text-gray-900 dark:text-white mb-3 text-center">Do not have an account? Click <a className="text-yellow-300 hover:underline hover:underline-offset-8" href="#" onClick={() => navigate("/register")}>here</a> to sign up</p>
                        <AuthButton label="Log in" />
                    </div>
                </form>
                {msg && <IsRegisteredModal message={msg} closeModal={() => setMsg("")} />}
            </>
        </AuthClass>
    )
}

export default Login