import { visibility } from "../../interfaces/ShowHide"

function CityCard(props: visibility) {
    const classes = props.isVisible ? "bg-gradient-to-t from-yellow-300 top-1/2" : "bg-transparent top-full"
    const imgClasses = props.isVisible ? "scale-110" : "scale-100"

    return (
        <div className="relative w-full h-auto overflow-hidden hover:cursor-pointer" onMouseOver={() => props.onMouseOver()} onMouseLeave={() => props.onMouseLeave()}>
            <img className={`w-full h-full object-center ${imgClasses} duration-500`} src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/24/16/tirana-overview.jpg?quality=75&width=1368&auto=webp"/>
                <div className={`flex items-end justify-start w-full h-1/2 absolute left-0 ${classes} linear duration-500`}>
                    <h1 className="mb-2 text-2xl font-extrabold ps-3">Tirana</h1>
                </div>
        </div>
    )
}

export default CityCard