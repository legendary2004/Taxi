import { FormEvent } from "react"
import { textInput } from "../../interfaces/Input"
import { contactInputClass } from "../variables/auth"

const ContactInput = (props: textInput) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={props.id} className="hidden">{props.label}</label>
            <input type={props.type} name={props.id} id={props.id} value={props.value} onChange={(e: FormEvent<HTMLInputElement>) => props.handleChange(e)} placeholder={props.placeholder} required={props.isRequired} className={contactInputClass} />
        </div>
    )
}

export default ContactInput