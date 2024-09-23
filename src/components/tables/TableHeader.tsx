interface header {
    header: string;
}

const TableHeader = (props: header) => {
    return (
        <th scope="col" className="px-6 py-3">
            {props.header}
        </th>
    )
}

export default TableHeader