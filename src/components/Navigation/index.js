import {Link} from "react-router-dom";
import {useState} from "react";

const Navigation = () => {
    const [homePage, setHomePage] = useState(false);
    return (
        <>
            <div>
                <Link to="/">
                    <button>1</button>
                </Link>
                <Link to="/sluralpright">
                    <button>2</button>
                </Link>
            </div>
        </>
    )
}

export default Navigation;