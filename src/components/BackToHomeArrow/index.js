import {Link} from "react-router-dom";
import styles from "./styles.module.css"

const BackToHomeArrow = () => {
    return (
        <Link to="/">
            <i className={["fa fa-arrow-left", styles.backIcon].join(' ')} aria-hidden="true"></i>
        </Link>
    )
}

export default BackToHomeArrow;