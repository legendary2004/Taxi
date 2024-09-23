import { FormEvent } from "react"
import { textInput } from "../../interfaces/Input"
import { bookingInputClasses } from "../variables/bookingInputClass"

const PhoneBooking = (props: textInput) => {
    return (
        <div className="w-full">
            <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>
            <input type={props.type} id={props.id} name={props.id} value={props.value} onChange={(e: FormEvent<HTMLInputElement>) => props.handleChange(e)} placeholder={props.placeholder} pattern="[0-9]{10}" required={props.isRequired} className={bookingInputClasses} />
        </div>
    )
}

export default PhoneBooking