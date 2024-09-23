import { useNavigate } from "react-router-dom"

function NavBrand() {
    const navigate = useNavigate()
    return (
        <a onClick={() => navigate("/")} href="#" className="flex items-center space-x-3 rtl:space-x-reverse ">
            <img src={require("../../images/logo.png")} className="h-10" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">GoTaxi</span>
        </a>
    )
}

export default NavBrand