import { initCarousels } from "flowbite"
import MaxScreenXl from "../../components/classes/ScreenXL"
import SectionHeader from "../../components/headers/SectionHeader"
import UserReviewItem from "../../components/lists/listItems/UserReviewItem"
import SlideX from "../../components/buttons/SlideX"

function Section_4() {
    setTimeout(() => {
        initCarousels()
    }, 500)

    return (
        <MaxScreenXl>
            <SectionHeader header="What our clients say?" />
            <div className="relative mx-3">
                <SlideX />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-12 mx-16">
                    <UserReviewItem />
                    <UserReviewItem />
                    <UserReviewItem />
                </div>
            </div>
        </MaxScreenXl>
    )
}

export default Section_4