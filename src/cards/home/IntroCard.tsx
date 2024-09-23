import Card from "../../components/classes/Card";
import CardHeader from "../../components/headers/CardHeader";
import CardSubheader from "../../components/headers/CardSubheader";

interface card {
    text: string;
    subtext: string;
    image: any
}

function IntroCard(prop: card) {
    return (
        <Card isRounded={true} image={prop.image}>
            <div className="pt-5">
                <a href="#">
                    <CardHeader header={prop.text} />
                </a>
                
            </div>
            <CardSubheader subheader={prop.subtext} />
            
        </Card>
    )
}

export default IntroCard