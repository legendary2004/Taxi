interface header {
    header: string
}
function SectionHeader(prop: header) {
    return (
        <h1 className="my-6 text-gray-900 text-2xl text-center font-bold tracking-tight leading-none dark:text-white md:text-3xl lg:text-4xl">{prop.header}</h1>
    )
}

export default SectionHeader