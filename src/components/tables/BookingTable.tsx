import Table from "../classes/Table"
import TableRow from "../classes/TableRow"
import TableHead from "../classes/TableHead"
import SectionHeader from "../headers/SectionHeader"
import TableHeader from "./TableHeader"
import TableData from "./TableData"
import { useEffect, useState } from "react"
import axios from "axios"
import { booking } from "../../interfaces/booking"

const BookingTable = () => {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        axios.post("http://localhost:5000/getAllBookings")
        .then(res => setBookings(res.data.bookings))
    }, [])
    return (
        <div className="py-10">
            <SectionHeader header="Manage bookings" />
            <Table>
                <>
                <TableHead>
                    <TableHeader header="BookingID" />
                    <TableHeader header="Email" />
                    <TableHeader header="Phone number" />
                    <TableHeader header="Taxi type" />
                    <TableHeader header="Pickup date" />
                    <TableHeader header="Pickup location" />
                    <TableHeader header="Dropoff location" />
                </TableHead>
                <tbody>
                    {bookings.length > 0 && bookings.map((item: booking) => {
                        return (
                            <TableRow key={item.id}>
                                <TableData data={item.id} />
                                <TableData data={item.email} />
                                <TableData data={item.phone} />
                                <TableData data="Cab" />
                                <TableData data={item.date + " - " + item.time} />
                                <TableData data={item.origin} />
                                <TableData data={item.destination} />
                            </TableRow>
                        )
                    })}
                </tbody>
                </>
            </Table>
        </div>
    )
}

export default BookingTable