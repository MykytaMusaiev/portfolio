import s from "./styles.module.css";
import {Navbar} from "../../components";

const About = () => {
    return(
        <>
            <section className={s.subHeader}>
                <Navbar/>
                <h1>About Us</h1>
            </section>
            <section className={s.aboutUs}>
                <div className={s.row}>
                    <div className={s.aboutCol}>
                        <h1>We are the world's largest university</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut, commodi consectetur
                            cumque deserunt, dignissimos dolorem eaque est, fugiat labore omnis possimus quae quaerat
                            quasi quia quidem rem tempore totam.</p>
                        <a href="" className={s.heroBtn}>EXPLORE NOW</a>
                    </div>
                    <div className={s.aboutCol}>
                        <img src={require("../../assets/img/about.jpg")} alt="about"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;