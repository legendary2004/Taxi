import { useRef, FormEvent, useState, useEffect, MutableRefObject } from "react"
import DarkLight from "../components/classes/DarkLight"
import CardHeader from "../components/headers/CardHeader"
import CardSubheader from "../components/headers/CardSubheader"
import CodeInput from "../components/inputs/CodeInput"
import { ObjectType } from "typescript"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import IsRegisteredModal from "../components/modals/IsRegisteredModal"

const CodeVerification = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [codeNumber, setCodeNumber] = useState('')
    const [countdown, setCountdown] = useState(0)
    const [codeField, setCodeField] = useState({field1: '', field2: '', field3: '', field4: ''})
    const inputField = useRef<{
        field1: HTMLInputElement | null;
        field2: HTMLInputElement | null;
        field3: HTMLInputElement | null;
        field4: HTMLInputElement | null;
    }>({ field1: null, field2: null, field3: null, field4: null });
    const [message, setMessage] = useState("")

    useEffect(() => {
        if (!location.state?.formProp?.email) navigate("/")
        else {
            setCountdown(180)
            setCodeNumber(location.state.number)
        }
    }, [location])

    useEffect(() => {
        const unsub = () => {
            if (codeNumber && countdown <= 0) {
                setCodeNumber('abc')
                return;
            }
            setTimeout(() => {
                setCountdown(prev => prev - 1)
            }, 1000)
        }
        unsub()
    }, [countdown])

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const {id, value} = e.currentTarget
        setCodeField((prev: any) => {
            return {
                ...prev,
                [id]: value
            }
        })
    }

    useEffect(() => {
        if (!inputField.current) return;

        else {
            for (const [key, value] of Object.entries(codeField)) {
                if (codeField[key as keyof typeof codeField].length != 1) {
                    inputField.current[key as keyof typeof codeField]?.focus()
                    return;
                }
            }
        }
    }, [codeField])

    const resendCode = () => {
        axios.post("http://localhost:5000/resendCode", {
            email: location.state?.formProp?.email
        })
        .then(res => {
            setCountdown(180)
            setCodeNumber(res.data.number)
        })
    }

    const submitForm = (e: FormEvent) => {
        e.preventDefault()
        const userNumber = codeField.field1 + codeField.field2 + codeField.field3 + codeField.field4
        if (userNumber != codeNumber) setMessage("Not the right code")
        else {
            const formData = new FormData();  //create new form object
            const {firstName, lastName, email, password, phone, profile} = location.state?.formProp
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("phone", phone);
            formData.append("myImage", profile);
            axios.post("http://localhost:5000/confirmCode", formData)
            .then((response) => {
                setMessage(response.data.message)
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <DarkLight>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-100 dark:bg-gray-900 py-12">
                <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl dark:bg-gray-800">
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <CardHeader header="Email verification" />
                        <div>
                            <CardSubheader subheader="We sent a code at email: deanmaja6@gmail.com" />
                            <CardSubheader subheader="Check spam folder if you dont see it on inbox" />
                        </div>
                    </div>

                    <div>
                        <form onSubmit={submitForm} method="post">
                            <div className="flex flex-col space-y-8">
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    <CodeInput ref={(ref) => inputField.current.field1 = ref} id="field1" value={codeField.field1} handleChange={(e: FormEvent<HTMLInputElement>) => handleChange(e)}/>
                                    <CodeInput ref={(ref) => inputField.current.field2 = ref} id="field2" value={codeField.field2} handleChange={(e: FormEvent<HTMLInputElement>) => handleChange(e)}/>
                                    <CodeInput ref={(ref) => inputField.current.field3 = ref} id="field3" value={codeField.field3} handleChange={(e: FormEvent<HTMLInputElement>) => handleChange(e)}/>
                                    <CodeInput ref={(ref) => inputField.current.field4 = ref} id="field4" value={codeField.field4} handleChange={(e: FormEvent<HTMLInputElement>) => handleChange(e)}/>
                                </div>
                                <div className="mt-1">
                                    <p className="text-sm text-gray-500 text-center">The code expires in: <span className="text-yellow-300">{countdown}s</span></p>
                                </div>

                                <div className="flex flex-col space-y-5">
                                    <div>
                                        <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-yellow-300 border-none hover:bg-yellow-400 hover:text-white duration-500 text-sm shadow-sm">
                                            Verify Account
                                        </button>
                                    </div>

                                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                        <p>Didn't recieve code?</p> <a onClick={resendCode} className="flex flex-row items-center text-yellow-300 hover:underline underline-offset-8">Resend</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            {message && <IsRegisteredModal message={message} closeModal={() => setMessage("")} />}
        </DarkLight>
    )
}

export default CodeVerification