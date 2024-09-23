import { useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext"

function HomeSection() {
    const modal = useContext(ModalContext)
    return (
    
        <section className="bg-center bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-photo/taxi-sign-blurred-city-night-background_181624-17989.jpg?size=626&ext=jpg&ga=GA1.1.1380444930.1724506197&semt=ais_hybrid')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-72">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <button onClick={() => modal.open()} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-yellow-300 hover:bg-yellow-400 hover:text-white duration-500">
                        Book
                        <svg className="animation-bounce w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                    <a href="#" className="inline-flex justify-center hover:text-gray-900 duration-700 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        About us
                    </a>  
                </div>
            </div>
        </section>

    )
}

export default HomeSection