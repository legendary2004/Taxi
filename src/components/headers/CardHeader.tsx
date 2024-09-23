interface header {
    header: string;
}

function CardHeader(prop: header) {
    return (
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prop.header}</h5>
    )
}

export default CardHeader