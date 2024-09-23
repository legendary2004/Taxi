import FooterLinkItem from "../listItems/FooterLinkItem";

function FooterNav() {
    return (
        <ul className="flex flex-wrap items-center mt-3 space-x-6 text-sm font-medium text-gray-500 sm:mb-0 sm:mt-0 dark:text-gray-400">
            <FooterLinkItem />
            <FooterLinkItem />
            <FooterLinkItem />
            <FooterLinkItem />
        </ul>
    )
}

export default FooterNav