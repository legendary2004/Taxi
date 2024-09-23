import { PropsWithChildren } from "react";

const TableRow: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <tr className="odd:bg-white odd:dark:bg-gray-800 even:bg-gray-50 even:dark:bg-gray-700">
            {children}
        </tr>
    )
}

export default TableRow