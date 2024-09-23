import { PropsWithChildren, useContext } from "react";
import { DarkLightSwitchContext } from "../../contexts/DarkLightSwitchContext";

const DarkLight: React.FC<PropsWithChildren> = ({children}) => {
    const modeContext = useContext(DarkLightSwitchContext)
    const modeClass = modeContext.isChecked ? "dark" : "light"

    return (
        <div className={`${modeClass}`}>
            {children}
        </div>
    )
}

export default DarkLight