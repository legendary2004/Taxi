import { FormEvent } from "react";
import { textInput } from "../../interfaces/Input";
import { contactInputClass } from "../variables/auth";

const TextArea = (props: textInput) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={props.id} className="hidden">{props.label}</label>
            <textarea id={props.id} name={props.id} value={props.value} onChange={(e: FormEvent<HTMLTextAreaElement>) => props.handleChange(e)} rows={4} className={contactInputClass} placeholder={props.placeholder} required={props.isRequired}></textarea>
        </div>
    )
}

export default TextArea