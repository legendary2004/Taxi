interface label {
    label: string
}

function TaxiItem(label: label) {
    return (
        <li className="w-full px-4 py-3 border-b border-gray-200 dark:border-gray-600">{label.label}</li>
    )
}

export default TaxiItem