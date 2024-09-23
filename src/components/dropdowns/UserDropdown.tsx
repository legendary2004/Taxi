import { useContext } from "react"
import DarkLightSwitch from "../inputs/DarkLightSwitch"
import { LoginContext } from "../../contexts/LoginContext"
import { useNavigate } from "react-router-dom"

const UserDropdown = () => {
    const navigate = useNavigate()
    const loginContext = useContext(LoginContext)
    return (
        <>            
            <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt="user photo" />
            </button>


            <div id="dropdownAvatar" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{loginContext.user?.f_name} {loginContext.user?.l_name}</div>
                    <div className="font-medium truncate">{loginContext.user?.email}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                    { 
                     loginContext.user?.isAdmin ? <li>
                        <a href="#" onClick={() => navigate("/admin")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admin</a>
                    </li> : ""
                    }
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My bookings</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => loginContext.signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
                <div className="py-2">
                    <DarkLightSwitch />
                </div>
            </div>
        </>
    )
}

export default UserDropdown