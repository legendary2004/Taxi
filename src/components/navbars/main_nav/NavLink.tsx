interface nav {
    label: string;
    navigate: Function
}

function NavLink(props: nav) {
    return (
        <li>
            <a onClick={() => props.navigate()} href="#" className="block py-2 px-3 md:p-0 bg-yellow-300 rounded md:text-white md:bg-transparent md:hover:text-yellow-300 duration-500" aria-current="page">{props.label}</a>
        </li>
    )
}

export default NavLink