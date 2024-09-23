import { ReactNode } from "react";
import CardHeader from "../../headers/CardHeader";
import CardSubheader from "../../headers/CardSubheader";

interface prop {
    header: string;
    subheader: string;
    icon: ReactNode
}

function HowItWorkItem(props: prop) {
    return (
        <li className="flex flex-col items-center px-3">
            <div className="w-24 h-24 p-2 border-2 border-dashed border-white rounded-full dark:border-gray-800">
                <div className="w-full h-full bg-white rounded-full dark:bg-gray-800">
                    <div className="flex items-center justify-center w-full h-full">
                        {props.icon}
                    </div>
                </div>
            </div>
            <div className="mt-5 text-center">
                <CardHeader header={props.header} />
                <CardSubheader subheader={props.subheader} />
            </div>
        </li>
    )
}

export default HowItWorkItem