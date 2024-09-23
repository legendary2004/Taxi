import { ReactNode } from "react";

interface contact {
    label: string;
    icon: ReactNode
}

const ContactItem = (props: contact) => {
    return (
        <div className="flex items-center text-gray-600 dark:text-gray-400">
            {props.icon}
            <div className="ml-4 text-md tracking-wide font-semibold">
                {props.label}
            </div>
        </div>

    )
}

export default ContactItem