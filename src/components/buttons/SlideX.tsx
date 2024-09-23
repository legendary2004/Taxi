import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function SlideX() {
    return (
        <div className="flex items-center justify-center">
            <button className="absolute top-1/2 -mt-6 left-0 z-50 p-4 w-12 h-12 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-300 hover:dark:bg-gray-600 duration-300">
                <FaArrowLeft className="flex items-center justify-center w-full h-full text-gray-800 dark:text-gray-100" />
            </button>
            <button className="absolute top-1/2 -mt-6 right-0 z-50 p-4 w-12 h-12 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-300 hover:dark:bg-gray-600 duration-300">
                <FaArrowRight className="flex items-center justify-center w-full h-full text-gray-800 dark:text-gray-100" />
            </button>
        </div>
    )
}

export default SlideX