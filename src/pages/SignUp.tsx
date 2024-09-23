import { useNavigate } from "react-router-dom";
import TextInput from "../components/inputs/TextInput";
import AuthClass from "../components/classes/AuthClass";
import { handleAuthChange, iconClass, registerObj} from "../components/variables/auth";
import { FormEvent, useState } from "react";
import PassInput from "../components/inputs/PassInput";
import FileInput from "../components/inputs/FileInput";
import SignType from "../components/inputs/SignType";
import { MdPerson, MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLock } from "react-icons/fa";
import AuthButton from "../components/buttons/AuthButton";
import Phone from "../components/inputs/Phone";
import axios from "axios";

function SignUp() {
    const [formProp, setFormProp] = useState(registerObj)
    const [isVisible, setIsVisible] = useState(false)
    const navigate = useNavigate()

    const submitForm = (e: FormEvent) => {
        e.preventDefault()

        axios.post("http://localhost:5000/register", {
            email: formProp.email,
            pass: formProp.password,
            passRepeat: formProp.confirmPassword
        })
        .then(res => {
            if (res.data.number) {
                navigate("/codeVerification", { state: {
                    formProp,
                    number: res.data.number
                } 
                })
            }
            else console.log(res.data.message)
        })
    }
    return (
        <AuthClass header="Create new account" subHeader="Let’s get you all set up so you can verify your personal account and begin setting up your profile.">
            <>
                <h1 className="mb-5 text-gray-500 dark:text-gray-300">Select type of account</h1>

                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <SignType />
                    <SignType />
                </ul>

                <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={submitForm}>
                    <TextInput 
                        label="First name"
                        id="firstName"
                        type="text"
                        value={formProp.firstName}
                        placeholder="Enter your first name"
                        isRequired={true}
                        handleChange={(e: FormEvent<HTMLInputElement>) => handleAuthChange(e, setFormProp)}
                        icon={<MdPerson className={iconClass} />}
                    />
                    <TextInput 
                        label="Last name"
                        id="lastName"
                        type="text"
                        value={formProp.lastName}
                        placeholder="Enter your last name"
                        isRequired={true}
                        handleChange={(e: FormEvent<HTMLInputElement>) => handleAuthChange(e, setFormProp)}
                        icon={<MdPerson className={iconClass} />}
                    />
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
                    <Phone 
                        label="Phone number"
                        id="phone"
                        type="tel"
                        value={formProp.phone}
                        placeholder="123-456-7890"
                        isRequired={true}
                        handleChange={(e: FormEvent<HTMLInputElement>) => handleAuthChange(e, setFormProp)}
                        icon={<FaPhoneAlt className={iconClass} />}
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
                    <PassInput
                        label="Confirm password"
                        id="confirmPassword"
                        type={isVisible ? "text" : "password"}
                        value={formProp.confirmPassword}
                        placeholder="Enter your password again"
                        isRequired={true}
                        handleChange={(e: FormEvent<HTMLInputElement>) => handleAuthChange(e, setFormProp)}
                        icon={<FaLock className={iconClass} />}
                        isVisible={isVisible}
                        changeVisibility={() => setIsVisible(!isVisible)}
                    />
                    <div className="col-span-1 md:col-span-2 md:w-1/2 md:mx-auto">
                    <FileInput 
                        id="profile"
                        label="Profile picture"
                        placeholder=""
                        isRequired={false}
                        handleChange={(e: FormEvent<HTMLInputElement>) => handleAuthChange(e, setFormProp)}
                        type="file"
                        file={formProp.profile}
                        icon
                    />
                    <p className="text-gray-900 dark:text-white my-3 text-center">Already have an account? Click <a className="text-yellow-300 hover:underline hover:underline-offset-8 duration-300" href="#" onClick={() => navigate("/login")}>here</a> to log in</p>
                        <AuthButton label="Sign up" />
                    </div>
                </form>
            </>
        </AuthClass>
    )
}

export default SignUp