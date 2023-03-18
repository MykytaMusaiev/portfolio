import {useEffect} from "react";
import {BackToHomeArrow} from "../../components";
import s from "./styles.module.css"
import Footer from "./components/Footer";
import {Home} from "./pages";

const Eduford = () => {
    useEffect(() => {
        document.title = 'Education University';
    }, []);


    return (
        <div className={s.edufordGlobal}>
            <BackToHomeArrow/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default Eduford;