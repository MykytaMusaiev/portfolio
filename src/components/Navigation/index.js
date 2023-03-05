import {Link} from "react-router-dom";
import s from "./styles.module.css"

const Navigation = () => {
    return (
        <>
            <div className={s.navBar}>
                <Link to="/">
                    <button>homepage</button>
                </Link>
                <Link to="/sluralpright">
                    <button>2</button>
                </Link>
                <Link to="/photography">
                    <button>3</button>
                </Link>
            </div>
        </>
    )
}

export default Navigation;