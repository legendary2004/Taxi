import TaxiCard from "../../cards/home/TaxiCard";
import MaxScreenXl from "../../components/classes/ScreenXL";
import SectionHeader from "../../components/headers/SectionHeader";

function Section_5() {
    return (
        <MaxScreenXl>
            <SectionHeader header="Choose a taxi to ride" />
            <div id="taxi" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
                <TaxiCard text="SUV taxi" image="https://w7.pngwing.com/pngs/201/937/png-transparent-taxi-car-rental-toyota-innova-bus-yellow-cab-compact-car-car-mode-of-transport.png"/>
                <TaxiCard text="SUV taxi" image="https://w7.pngwing.com/pngs/201/937/png-transparent-taxi-car-rental-toyota-innova-bus-yellow-cab-compact-car-car-mode-of-transport.png"/>
                <TaxiCard text="SUV taxi" image="https://w7.pngwing.com/pngs/201/937/png-transparent-taxi-car-rental-toyota-innova-bus-yellow-cab-compact-car-car-mode-of-transport.png"/>
            </div>
        </MaxScreenXl>
    )
}

export default Section_5