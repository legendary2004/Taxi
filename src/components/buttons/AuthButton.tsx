interface authButton {
    label: string;
}

const AuthButton = (props: authButton) => {
    return (
        <button
            className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide capitalize transition-colors duration-300 transform bg-yellow-300 rounded-md hover:bg-yellow-400 hover:text-white focus:outline-none">
            <span>{props.label} </span>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd" />
            </svg>
        </button>
    )
}

export default AuthButton