import { Fragment } from "react"

import "./header.scss";

import logo from "../../../icons/header/logo.png";

function Header() {
    return (
        <div className="header">
            <nav className="header__menu">
                <ul>
                    <li>q
                        <img src={logo} alt="logo coffee beans" />
                        <div className="header__link-wrapper">
                            <a className="header__menu-link" href="#">Coffee house</a>
                            <a className="header__menu-link" href="#">Our coffee</a>
                            <a className="header__menu-link" href="#">For your pleasure</a>
                        </div>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Header;