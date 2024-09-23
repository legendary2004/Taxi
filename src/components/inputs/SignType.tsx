const SignType = () => {
    return (
        <li>
            <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
            <label htmlFor="hosting-small" className="inline-flex items-center justify-between w-full py-3 px-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-gray-900 peer-checked:border-yellow-300 peer-checked:bg-yellow-300 duration-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>

                    <span className="mx-2">
                        client
                    </span>
                </div>
                
            </label>
        </li>
    )
}

export default SignType