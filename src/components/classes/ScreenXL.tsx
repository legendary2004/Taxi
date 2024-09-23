import { PropsWithChildren } from "react";

const MaxScreenXl: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="max-w-screen-xl mx-auto">
            {children}
        </div>
    )
}

export default MaxScreenXl