import { TableRow } from "flowbite-react"
import PageClass from "../components/classes/PageClass"
import MaxScreenXl from "../components/classes/ScreenXL"
import Table from "../components/classes/Table"
import TableHead from "../components/classes/TableHead"
import SectionHeader from "../components/headers/SectionHeader"
import BookingTable from "../components/tables/BookingTable"

const Admin = () => {
    return (
        <PageClass>
            <MaxScreenXl>
                <BookingTable />
            </MaxScreenXl>
        </PageClass>
    )
}

export default Admin