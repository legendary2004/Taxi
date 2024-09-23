import HowItWorkItem from "../listItems/HowItWorkItem";
import { FaLocationArrow } from "react-icons/fa";

function HowItWorks() {
    return (
        <ol className="w-full flex flex-col items-center justify-between space-y-3 sm:space-x-3 sm:space-y-0 sm:flex-row">
                <HowItWorkItem 
                    header="1. Choose Locations"
                    subheader="Determine the date & location for your car rental. Consider factors such as your travel itinerary, pickup/drop-off locations (e.g., airport, city center) and duration of rental."
                    
                    icon={<FaLocationArrow className="w-12 h-12 text-gray-800 dark:text-gray-100" />}
                />
                <HowItWorkItem 
                    header="1. Choose Locations"
                    subheader="Determine the date & location for your car rental. Consider factors such as your travel itinerary, pickup/drop-off locations (e.g., airport, city center) and duration of rental."
                    
                    icon={<FaLocationArrow className="w-12 h-12 text-gray-800 dark:text-gray-100" />}
                />
                <HowItWorkItem 
                    header="1. Choose Locations"
                    subheader="Determine the date & location for your car rental. Consider factors such as your travel itinerary, pickup/drop-off locations (e.g., airport, city center) and duration of rental."
                    
                    icon={<FaLocationArrow className="w-12 h-12 text-gray-800 dark:text-gray-100" />}
                />      
        </ol>
    )
}

export default HowItWorks