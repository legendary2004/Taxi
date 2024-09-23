import { ReactNode } from "react";

interface input {
    label: string;
    id: string;
    type: string;
    placeholder: string;
    icon: ReactNode;
    isRequired: boolean;
    handleChange: Function
}

export interface textInput extends input {
    value: string;
}

export interface passInput extends textInput {
    isVisible: boolean,
    changeVisibility: Function
}

export interface fileInput extends input {
    file: Blob
}

export interface dateTime {
    dateId: string;
    dateValue: string;
    timeId: string;
    timeValue: string;
    handleChange: Function
}

export interface loginAuth {
    email: string;
    password: string;
}

export interface registerAuth extends loginAuth {
    firstName: string;
    lastName: string;
    phone: string;
    confirmPassword: string;
    profile: Blob
}

export interface booking {
    email: string;
    phone: string;
    date: string;
    time: string;
}

export interface contact {
    email: string;
    subject: string;
    message: string;
}