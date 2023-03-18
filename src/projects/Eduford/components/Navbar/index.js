import s from "./styles.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    const showMenu = () => {
        let el = document.getElementById("navPanel")
        el.style.right = "0";
    }

    const hideMenu = () => {
        let el = document.getElementById("navPanel")
        el.style.right = "-12.5rem";
    }
    return (
        <>
            <nav className={s.navBar}>
                <Link to="/eduford">
                    <img src={require("./img/logo.png")} alt=""/>
                </Link>
                <div className={s.navLinks} id="navPanel">
                    <i className={["fa fa-times", s.icon].join(" ")} onClick={hideMenu} aria-hidden="true"/>
                    <ul>
                        <li>
                            <Link to="/eduford">HOME</Link>
                        </li>
                        <li>
                            <Link to="/eduford/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/eduford/course">COURSE</Link>
                        </li>
                        <li>
                            <Link to="/eduford/blog">BLOG</Link>
                        </li>
                        <li>
                            <Link to="/eduford/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <i className={["fa fa-bars", s.icon].join(" ")} onClick={showMenu}/>
            </nav>
        </>
    )
}

export default Navbar;