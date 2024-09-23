import { PropsWithChildren } from "react";

const TableHead: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {children}
            </tr>
        </thead>
    )
}

export default TableHead