import IntroCard from "../../cards/home/IntroCard"
import SectionHeader from "../../components/headers/SectionHeader"
import { FaLocationArrow } from "react-icons/fa";
import HowItWorks from "../../components/lists/lists/HowItWorks";
import MaxScreenXl from "../../components/classes/ScreenXL";

function Section_2() {
    return (
        <MaxScreenXl>
            <SectionHeader header="How it works?" />
            <HowItWorks />
        </MaxScreenXl>
    )
}

export default Section_2