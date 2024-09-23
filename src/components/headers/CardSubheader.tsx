interface subheader {
    subheader: string;
}

function CardSubheader(prop: subheader) {
    return (
        <p className="mb-3 text-md font-normal text-gray-700 dark:text-gray-400">{prop.subheader}</p>
    )
}

export default CardSubheader