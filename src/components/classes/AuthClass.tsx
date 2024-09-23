import { PropsWithChildren } from "react";
import CardHeader from "../headers/CardHeader";
import CardSubheader from "../headers/CardSubheader";
import DarkLight from "./DarkLight";
import { useNavigate } from "react-router-dom";
import { IoIosReturnLeft } from "react-icons/io";

interface header extends React.PropsWithChildren {
    header: string;
    subHeader: string;
}

const AuthClass: React.FC<header> = ({header, subHeader, children}) => {
    const navigate = useNavigate()
    return (
        <DarkLight>
            <section className="bg-gray-100 dark:bg-gray-900">
                <div className="flex justify-center min-h-screen">
                    <div className="hidden lg:block lg:w-2/5 min-h-screen">
                        <img className="h-full w-full" src="https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" />
                    </div>

                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                        <button className="flex items-center justify-center mb-10 font-bold text-gray-900 text-xl hover:text-yellow-300 dark:hover:text-yellow-300 dark:text-white duration-500" onClick={() => navigate("/")}><IoIosReturnLeft className="w-8 h-8"/></button>
                            <CardHeader header={header} />

                            <CardSubheader subheader={subHeader} />

                            <div className="mt-6">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DarkLight>
    )
}

export default AuthClass