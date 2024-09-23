interface modal {
    message: string;
    closeModal: Function;
}

const IsRegisteredModal = (props: modal) => {
    return (
        <div tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-start w-full md:inset-0 bg-gray-800/50 h-screen max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div className="flex items-center justify-between p-4 md:p-5 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {props.message}
                        </h3>
                        <button onClick={() => props.closeModal()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IsRegisteredModal