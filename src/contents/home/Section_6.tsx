import MaxScreenXl from "../../components/classes/ScreenXL"
import CardSubheader from "../../components/headers/CardSubheader"
import SectionHeader from "../../components/headers/SectionHeader"

function Section_6() {
    return (
        <MaxScreenXl>
            <div className="p-3">
                <div className="w-full h-64 relative rounded-lg md:h-96 bg-center bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-photo/taxi-sign-blurred-city-night-background_181624-17989.jpg?size=626&ext=jpg&ga=GA1.1.1380444930.1724506197&semt=ais_hybrid')] bg-gray-700 bg-blend-multiply">
                    <div className="absolute top-0 right-0 w-full h-full flex flex-col items-center justify-center px-3 md:w-1/2">
                        <section>
                            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                                <div className="mx-auto max-w-screen-md text-center">
                                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-white sm:text-4xl">Sign up for our newsletter</h2>
                                    <p className="mx-auto mb-8 text-sm max-w-2xl text-gray-500 md:mb-12 sm:text-xl">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
                                    <div className="flex items-center mx-auto mb-3 max-w-screen-sm space-y-0">
                                        <div className="relative w-full">

                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                            </div>
                                            <input className="block p-3 pl-10 w-full text-sm border border-gray-300 border-r-0 rounded-l-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Enter your email" type="email" id="email" />
                                        </div>
                                        <div>
                                            <button type="button" className="py-3 px-5 w-full text-sm font-medium text-center text-white border border-l-0 bg-gray-700 border-gray-600 cursor-pointer rounded-r-lg">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </MaxScreenXl>
    )
}

export default Section_6