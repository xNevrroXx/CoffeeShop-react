import { Component, Fragment } from "react";

import white from "../../../icons/mainPage/white.png";
import black from "../../../icons/mainPage/black.png";

import "./divider.scss";

class Divider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imgBean;
        if(this.props.color == "white") {
            imgBean = (
                <img className="divider divider__img" src={white} alt="coffee beans image" />
            );
        } else {
            imgBean = (
                <img src={black} alt="coffee beans image" />
            )
        }


        return (
            <div className="divider">
                <div className="divider divider__wrappper-img">
                    {imgBean}
                </div>
            </div>
        )
    }
}

export default Divider;