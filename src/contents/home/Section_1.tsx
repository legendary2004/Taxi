import IntroCard from "../../cards/home/IntroCard"
import HomeSection from "../../components/hero_section/HomeSection"

function Section_1() {
    return (
        <div>
            <HomeSection />
            <div className="mx-4">
                <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-xl -mt-20 dark:bg-gray-800">
                    <div className="p-10 flex flex-col justify-center items-center space-y-10 sm:space-y-0 sm:space-x-10 sm:flex-row sm:justify-around sm:items-start">
                        <IntroCard 
                            text="Airport and port transfers"
                            subtext="Personalised transfers designed to make you feel welcome"
                            image={require("../../components/images/taxi.png")}
                        />
                        <IntroCard 
                            text="Sightseeing rides"
                            subtext="Tour the places you’ve dreamt about, guided by your personal driver"
                            image={require("../../components/images/taxi.png")}
                        />
                        <IntroCard 
                            text="In-city rides"
                            subtext="Rides you can trust, when and where you need them"
                            image={require("../../components/images/taxi.png")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section_1