import { Fragment } from "react"

import Header from "../../blocks/header/header"
import Divider from "../../blocks/divider/divider";

import "./banner.scss";
import "../../blocks/titles/titles.scss";

function Banner() {
    return (
        <div className="banner">
            <Header/>

            <h1 className="title">Everything You Love About Coffee</h1>
            <Divider color="white"/>
            <h2 className="subtitle">We makes every day full of energy and taste</h2>
            <h2 className="subtitle">Want to try our beans?</h2>

            <button>More</button>
        </div>
    )
}

export default Banner;