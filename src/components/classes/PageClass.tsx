import { PropsWithChildren, useContext, useEffect, useState } from "react";
import SildeToTop from "../buttons/SlideToTop";
import { ModalContext } from "../../contexts/ModalContext";
import BookingModal from "../modals/BookingModal";
import Footer from "../footer/Footer";
import DarkLight from "./DarkLight";
import MainNav from "../navbars/main_nav/Nav";

const PageClass: React.FC<PropsWithChildren> = ({children}) => {
    const [scroll, setScroll] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [classes, setClasses] = useState("")
    const modal = useContext(ModalContext)

    useEffect(() => {
        const unsub = () => {
            window.addEventListener("scroll", () => {
                setScroll(scrollY)
            })
        }

        unsub()
    }, [])

    useEffect(() => {
        if (scroll < 100) {
            setClasses("animate-out slide-out-to-bottom")
            if (isVisible) {
                setTimeout(() => {
                    setClasses("")
                    setIsVisible(false)
                }, 650)
            }
        }
        else if (scroll >= 100) {
            setIsVisible(true)
            setClasses("animate-in slide-in-from-bottom")
        }
    }, [scroll])
    
    return (
        <DarkLight>
            <div className="pb-5 min-h-screen bg-gray-100 dark:bg-gray-900">
                <MainNav />
                {children}
                {isVisible && <SildeToTop classes={classes}/>}
                {modal.isVisible && <BookingModal />}
                <Footer />
            </div>
        </DarkLight>
    )
}

export default PageClass