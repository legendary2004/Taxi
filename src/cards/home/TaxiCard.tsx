import { useContext } from "react"
import Card from "../../components/classes/Card"
import CardHeader from "../../components/headers/CardHeader"
import TaxiItem from "../../components/lists/listItems/TaxiItem"
import { card } from "../../interfaces/card"
import { ModalContext } from "../../contexts/ModalContext"
import BookingModal from "../../components/modals/BookingModal"

function TaxiCard(props: card) {
    const modal = useContext(ModalContext)
    return (
        <Card isRounded={false} image={props.image}>
            <div className="p-5">
                <a href="#">
                    <CardHeader header={props.text} />
                </a>
                <ul className="w-full text-lg fonr-normal text-gray-900 dark:text-white">
                    <TaxiItem label="Initial charge"/>
                    <TaxiItem label="Per km charge"/>
                    <TaxiItem label="Stoppage charge"/>
                    <TaxiItem label="Passengers"/>
                </ul>
                <div className="flex items-center justify-center">
                    <button onClick={() => modal.open()} className="inline-block mt-5 py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-gray-900 font-medium hover:border-yellow-300 hover:bg-yellow-300 duration-700 dark:text-white">
                        Book 
                    </button>
                </div>
            </div>
            {modal.isVisible && <BookingModal />}
        </Card>
    )
}

export default TaxiCard