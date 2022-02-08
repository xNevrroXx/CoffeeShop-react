import { Fragment } from "react"

import Divider from "../../blocks/divider/divider";

import "./our-works.scss";
import "../../blocks/titles/titles.scss";
import "../../blocks/description/description.scss";

function OurWorks() {
    return (
        <div className="our-works">
            <h3 className="subtitle">About Us</h3>
            <Divider color="black" mb40/>

            <div className="description">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
                <br /><br />
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
            </div>
        </div>
    )
}

export default OurWorks;