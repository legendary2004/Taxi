import { useContext, useState } from "react"
import BookingModal from "../../modals/BookingModal"
import { ModalContext } from "../../../contexts/ModalContext"

function Hamburger() {
    const modal = useContext(ModalContext)

    return (
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button onClick={() => modal.open()} type="button" className="bg-yellow-300 hover:bg-yellow-400 hover:text-white duration-500 focus:outline-none font-medium rounded-lg text-sm px-10 py-2 text-center">Book</button>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
    )
}

export default Hamburger