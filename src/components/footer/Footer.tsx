import MaxScreenXl from "../classes/ScreenXL";
import FooterNav from "../lists/lists/FooterLinks";
import NavBrand from "../navbars/main_nav/NavBrand";
import NavLink from "../navbars/main_nav/NavLink";

function Footer() {
    return (
        <MaxScreenXl>
            <footer className="bg-white rounded-lg shadow dark:bg-gray-800 mx-3">
            <div className="w-full max-w-screen-xl mx-auto p-4">
                <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between px-2">
                    <div className="text-gray-900 dark:text-white">
                    <NavBrand />
                    </div>
                    <FooterNav />
                </div>
                <hr className="mb-6 mt-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2023 Flowbite™. All Rights Reserved.</span>
            </div>
        </footer>
        </MaxScreenXl>
    )
}

export default Footer