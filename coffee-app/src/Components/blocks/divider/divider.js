import { Component, Fragment } from "react";

import white from "../../../icons/mainPage/white.png";
import black from "../../../icons/mainPage/black.png";

import "./divider.scss";

// const DividerWrap = styled.div`
//     .divider__wrappper-img {
//         position: relative;
//         width: 40px;
//         height: 40px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         margin: 0 auto;
//         margin-bottom: 35px;
//         &::before {
//             position: absolute;
//             right: -65px;
//             content: "";
//             display: block;
//             width: 60px;
//             height: 1px;
//             background: ${props => props.color === "white" ? "white" : "black"};
//         }
//         &::after {
//             position: absolute;
//             left: -65px;
//             content: "";
//             display: block;
//             width: 60px;
//             height: 1px;
//             background: ${props => props.color === "white" ? "white" : "black"};
//         }

//     }
// `;


class Divider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let dividerWrapperClass, imgBeanSrc;
        const {color, mb40} = this.props;

        if(this.props.color == "white") {
            dividerWrapperClass = "divider__wrappper-img_white ";
            imgBeanSrc = white;
        } else {
            imgBeanSrc = black;
            dividerWrapperClass = "divider__wrappper-img_black ";
        }

        

        return (
            <div className="divider" color={color}>
                <div className={"divider divider__wrappper-img " + dividerWrapperClass + (mb40 ? "divider__wrappper-img_mb40 " : "")}>
                    <img className="divider divider__img" src={imgBeanSrc} alt="coffee beans image" />
                </div>
            </div>
        )
    }
}

export default Divider;