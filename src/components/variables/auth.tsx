import { FormEvent } from "react";
import { booking, contact, loginAuth, registerAuth, textInput } from "../../interfaces/Input";

export const loginObj: loginAuth = {
    email: '',
    password: ''
}

export const bookingObj: booking = {
    email:'',
    phone: '',
    date: '',
    time: ''
}

export const registerObj: registerAuth = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    profile:{} as Blob,
}

export const contactObj: contact = {
    email: '',
    subject: '',
    message: ''
}

export const iconClass = "w-5 h-5 text-gray-500 dark:text-gray-400"

export const contactInputClass = "mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-900 dark:text-white font-semibold focus:ring-1 focus:ring-yellow-300 focus:outline-none"

export const handleAuthChange = (e: FormEvent<HTMLInputElement>, saveChange: Function) => {
    const {id, type, value, checked} = e.currentTarget;
    const files = e.currentTarget?.files
    const updatedValue = type == "checkbox" ? checked : value
    saveChange((prev: any) => {
        return {
            ...prev,
            [id]: type == 'file' ? files?.item(0) : updatedValue
        }
    })
}

export const handleContactChange = (e: FormEvent<HTMLTextAreaElement>, saveChange: Function) => {
    const {id, value} = e.currentTarget
    saveChange((prev: any) => {
        return {
            ...prev,
            [id]: value
        }
    })
}