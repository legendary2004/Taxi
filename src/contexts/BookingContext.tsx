import { createContext, PropsWithChildren, useState } from "react";
import { confirmBooking } from "../interfaces/booking";
import axios from "axios";

export const BookingContext = createContext<confirmBooking>({
    msg: '',
    confirmBooking: () => {}
})

const BookingContextProvier: React.FC<PropsWithChildren> = ({children}) => {
    const [msg, setMsg] = useState("")
    const confirmBooking = (email: string, phone: string, date: string, time: string, origin: string, destination: string) => {
        axios.post("http://localhost:5000/confirmBooking", {
            email,
            phone, 
            date,
            time,
            origin, 
            destination
        }).then(res => setMsg(res.data.message))
    }

    return (
        <BookingContext.Provider value={{msg, confirmBooking}}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingContextProvier