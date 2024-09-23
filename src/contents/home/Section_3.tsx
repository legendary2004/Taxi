import { useState } from "react"
import CityCard from "../../cards/home/CityCard"
import SectionHeader from "../../components/headers/SectionHeader"
import MaxScreenXl from "../../components/classes/ScreenXL"

function Section_3() {
    const [isVisible, setIsVisible] = useState(false)
    
    return (
        <MaxScreenXl>
            <SectionHeader header="Our destinations" />
            <div id="destinations" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center px-3 gap-x-6 gap-y-8">
                <CityCard 
                    isVisible={isVisible}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                />
                <CityCard 
                    isVisible={isVisible}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                />
                <CityCard 
                    isVisible={isVisible}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                />
                <CityCard 
                    isVisible={isVisible}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                />
                <CityCard 
                    isVisible={isVisible}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                />
                <CityCard 
                    isVisible={isVisible}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                />
                <CityCard 
                    isVisible={isVisible}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                />
                <CityCard 
                    isVisible={isVisible}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                />
                <CityCard 
                    isVisible={isVisible}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                />
                <CityCard 
                    isVisible={isVisible}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                />
                <CityCard 
                    isVisible={isVisible}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                />
                <CityCard 
                    isVisible={isVisible}
                    onMouseOver={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                />
            </div>
        </MaxScreenXl>
    )
}

export default Section_3