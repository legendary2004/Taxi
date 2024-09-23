import { createContext, FormEvent, PropsWithChildren, useEffect, useState } from "react";

interface darkLight {
    isChecked: boolean;
    switch: Function;
}

export const DarkLightSwitchContext = createContext<darkLight>({
    isChecked: false,
    switch: () => {}
})

const DarkLightSwitchContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        const res = JSON.parse(window.localStorage.getItem('isChecked')?.toLowerCase() || "false")
        if (res) setIsChecked(res)
    }, [])

    useEffect(() => {
        window.localStorage.setItem('isChecked', JSON.stringify(isChecked))
    }, [isChecked])

    function switchMode(e: FormEvent<HTMLInputElement>) {
        setIsChecked(e.currentTarget.checked)
    }

    return (
        <DarkLightSwitchContext.Provider value={{isChecked, switch: switchMode}}>
            {children}
        </DarkLightSwitchContext.Provider>
    )
}

export default DarkLightSwitchContextProvider