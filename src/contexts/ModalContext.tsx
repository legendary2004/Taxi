import React, { createContext, PropsWithChildren, useState } from "react";
import { modal } from "../interfaces/ShowHide";

export const ModalContext = createContext<modal>({
    isVisible: false,
    classes: "",
    open: () => {},
    close: () => {}
})

const ModalContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [classes, setClasses] = useState("")

    const open = () => { 
        setIsVisible(true)
        setClasses("animate-in slide-in-from-top")
        document.body.style.overflow = "hidden"
    }

    const close = () => {
        setClasses("animate-out slide-out-to-top")
        setTimeout(() => {
            setIsVisible(false)
            setClasses("")
            document.body.style.overflow = "unset"
        }, 500)
    }
    return (
        <ModalContext.Provider value={{isVisible, classes, open, close}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider