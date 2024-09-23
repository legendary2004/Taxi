import { initFlowbite } from "flowbite"
import Hamburger from "./Hamburger"
import NavBrand from "./NavBrand"
import NavLink from "./NavLink"
import UserDropdown from "../../dropdowns/UserDropdown"
import { useContext } from "react"
import { LoginContext } from "../../../contexts/LoginContext"
import { scrollTo } from "../../functions/ScrollTo"
import { useNavigate } from "react-router-dom"

function MainNav() {
    const navigate = useNavigate()
    const user = useContext(LoginContext)
    setTimeout(() => {
        initFlowbite()
    }, 500)

    return (
        <nav className="border-gray-200 absolute top-0 bg-transparent w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <div>
                    <div className="text-white">
                        <NavBrand />
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-5 md:order-2">
                    {user.user.id && <UserDropdown />}
                    <Hamburger />
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg space-y-3 bg-gray-50 dark:bg-gray-800 md:bg-transparent md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:dark:bg-transparent dark:border-gray-700">
                        <NavLink label="Destinations" navigate={() => scrollTo("destinations")}/>
                        <NavLink label="Taxi" navigate={() => scrollTo("taxi")}/>
                        <NavLink label="Contact" navigate={() => scrollTo("contact")}/>
                        {!user.user.id && <NavLink label="Sign in" navigate={() => navigate("/login")}/>}
                    </ul>
                </div>                
            </div>
        </nav>
    )
}

export default MainNav