import { FormEvent } from "react"
import { textInput } from "../../interfaces/Input"

function TextInput(props: textInput) {
    return (
        <div>
            <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    {props.icon}
                </div>
                <input type={props.type} id={props.id} name={props.id} value={props.value} onChange={(e: FormEvent<HTMLInputElement>) => props.handleChange(e)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-3 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-1 focus:ring-yellow-300" placeholder={props.placeholder} required={props.isRequired}/>
            </div>
        </div>
    )
}

export default TextInput