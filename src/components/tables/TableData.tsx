interface data {
    data: string
}

const TableData = (props: data) => {
    return (
        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {props.data}
        </td>
    )
}

export default TableData