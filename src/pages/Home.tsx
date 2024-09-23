import { useState } from "react"
import MainNav from "../components/navbars/main_nav/Nav"
import Section_1 from "../contents/home/Section_1"
import Section_2 from "../contents/home/Section_2"
import Section_3 from "../contents/home/Section_3"
import BookingModal from "../components/modals/BookingModal"
import { initFlowbite } from "flowbite"
import SildeToTop from "../components/buttons/SlideToTop"
import PageClass from "../components/classes/PageClass"
import Section_4 from "../contents/home/Section_4"
import Section_5 from "../contents/home/Section_5"
import Section_6 from "../contents/home/Section_6"
import Contact from "../contents/home/Contact"





function Home() {
    setTimeout(() => {
        initFlowbite()
    }, 500)
    return (
        <PageClass>
            <Section_1 />
            <Section_2 />
            <Section_3 />
            <Section_4 />
            <Section_5 />
            <Contact />
            <Section_6 />
        </PageClass>
    )
}

export default Home