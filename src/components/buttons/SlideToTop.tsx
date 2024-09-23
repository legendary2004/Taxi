import { FaArrowUp } from "react-icons/fa";

interface classes {
    classes: string
}

function SildeToTop(props: classes) {

    function scrollToTop() {
        let yScroll = scrollY
        setInterval(() => {
            if (yScroll > 0) {
                const deductPoint = 20
                window.scrollTo(yScroll - deductPoint, yScroll - deductPoint)
                yScroll -= deductPoint;
            }
        }, 1)   
    }
    
    return (
            <button onClick={scrollToTop} className={`fixed ${props.classes} duration-700 bottom-10 right-10 p-4 z-50 w-16 h-16 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-300 hover:dark:bg-gray-600 duration-300`}>
                <FaArrowUp className="flex items-center justify-center w-full h-full text-gray-800 dark:text-gray-100" />
            </button>
    )
}

export default SildeToTop