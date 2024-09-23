interface props extends React.PropsWithChildren {
    image: any;
    isRounded: boolean
}

const Card: React.FC<props> = ({image, isRounded, children}) => {
    return (
        <div className="w-full bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className={`${isRounded ? "rounded-lg" : "rounded-t-lg"} object-cover`} src={image} alt="" />
            </a>
            {children}
        </div>
    )
}

export default Card