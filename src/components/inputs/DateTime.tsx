import { FormEvent, useEffect } from "react"
import { dateTime, textInput } from "../../interfaces/Input"
import { bookingInputClasses } from "../variables/bookingInputClass"

const DateTime = (props: dateTime) => {
    const today = new Date()
    const month = today.getMonth()+1;
    const month2 = month < 10 ? "0" + month : month
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = year + "-" + month2 + "-" + date;
    const minutes = today.getMinutes()
    const minutes2 = minutes < 10 ? "0" + minutes : minutes
    const time = today.getHours() + ":" + minutes2

    console.log(currentDate == props.dateValue)

    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full">
                <label htmlFor={props.dateId} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Date:</label>
                <input type="date" min={currentDate} id={props.dateId} name={props.dateId} value={props.dateValue} onChange={(e: FormEvent<HTMLInputElement>) => props.handleChange(e)} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0" />
            </div>
            <div className="max-w-[8rem] mx-auto">
            <label htmlFor={props.timeId} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time:</label>
                <div className="relative">
                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd"/>
                        </svg>
                    </div>
                    <input type="time" min={props.dateValue == currentDate ? time : "00:00"} id={props.timeId} name={props.timeId} value={props.timeValue} onChange={(e: FormEvent<HTMLInputElement>) => props.handleChange(e)} className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
            </div>
        </div>
    )
}

export default DateTime