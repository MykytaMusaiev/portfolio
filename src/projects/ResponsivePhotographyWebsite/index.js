import styles from "./styles.module.css"
import {useEffect} from "react";
import {BackToHomeArrow} from "../../components";

const ResponsivePhotographyWebsite = () => {
    useEffect(() => {
        document.title = 'Photography';
    }, []);
    return (
        <div className={styles.photographyGlobal}>
            <section className={styles.intro}>
                <BackToHomeArrow/>
                <nav className={styles.navBar}>
                    <a href="#" className={styles.menuIcon}/>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#port">Portfolio</a></li>
                        <li><a href="#serv">Services</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </nav>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h1>Photography</h1>
                        <p>my pictures.</p>
                    </div>
                </div>
            </section>

            <a name="about"/>
            <div className={styles.clearfix}/>
            <section className={styles.leftCol}>
                <h2>About Me</h2>
                <p className={styles.textIndent}>I am so grateful for each and every experience that life has had to
                    offer me and i'm honesty humbled to be part of each and every wedding. I am right there documenting
                    this amazing moment...it is crazy bananas when you really stop and think about it! While I take this
                    responsibility of very seriously I do strive to create a comfortable, relaxed atmosphere so you are
                    free to be you.</p>
            </section>
            <section className={styles.sidebar}>
                <img src="https://static.pexels.com/photos/50567/girl-female-model-pretty-50567.jpeg" alt=""/>
            </section>

            <div className={styles.clearfix}/>
            <a name="port"/>
            <h2>My Portfolio</h2>
            <section className={styles.oneThirdPort}>
                <a href="https://static.pexels.com/photos/246368/pexels-photo-246368.jpeg" target="_blank"><img
                    src={require("./assets/img/photography-1.png")} alt="photography-1"/></a>
            </section>
            <section className={styles.oneThirdPort}>
                <a href="https://static.pexels.com/photos/90368/pexels-photo-90368.jpeg" target="_blank">
                    <img src={require("./assets/img/photography-2.png")} alt="photography-2"/>
                </a>
            </section>
            <section className={styles.oneThirdPort}>
                <a href="https://static.pexels.com/photos/241555/pexels-photo-241555.jpeg" target="_blank">
                    <img src={require("./assets/img/photography-3.png")} alt="photography-3"/>
                </a>
            </section>
            <section className={styles.oneThirdPort}>
                <a href="https://www.galileonet.it/wp-content/uploads/1999/04/piqsels.com-id-fswcr-scaled-e1597751069917.jpg"
                   target="_blank">
                    <img src={require("./assets/img/photography-4.png")} alt="photography-4"/>
                </a>
            </section>
            <section className={styles.oneThirdPort}>
                <a href="https://pavlov.psyciencia.com/2016/07/pexels-photo-65121.jpeg" target="_blank">
                    <img src={require("./assets/img/photography-5.png")} alt="photography-5"/>
                </a>
            </section>
            <section className={styles.oneThirdPort}>
                <a href="https://static.tildacdn.com/tild6238-3766-4265-b830-626534613264/China.jpg" target="_blank">
                    <img src={require("./assets/img/photography-6.png")} alt="photography-6"/>
                </a>
            </section>

            <div className={styles.clearfix}/>
            <a name="serv"/>
            <section className={styles.leftCol}>
                <h2>My Services</h2>
                <p className={styles.textIndent}>Since I started to offer my photography services. I`ve become a
                    respected leader on the art of
                    photographs. I believe that the quality of work has only one judge - our customers. That's why we
                    offer a client satisfaction guarantee for every project. I`m not happy if my clients aren't
                    happy
                </p>
            </section>
            <section className={styles.sidebar}>
                <section className={styles.contact}>
                    <p>
                        Wedding <br className={styles.break}/>
                        Portraits <br className={styles.break}/>
                        Engagements <br className={styles.break}/>
                        Social Events <br className={styles.break}/>
                        Artistic Modeling <br className={styles.break}/>
                        School Photos <br className={styles.break}/>
                        Family Portraits
                    </p>
                </section>
            </section>
            
            <div className={styles.clearfix}/>
            <a name="contact"/>
            <section className={styles.parallax}>
                <div className={styles.parallaxInner}>
                </div>
            </section>
            <div className={styles.clearfix}/>
            <h2>Contact Me</h2>
            <section className={styles.contact}>
                <p>My Name <br className={styles.break}/> <a href="mailto:me@photography.com">me@photography.com</a> <br className={styles.break}/>1-800-888-8888</p>
                <p>1000 Street <br className={styles.break}/>Road My City <br className={styles.break}/>State 19000</p>
            </section>
            <div className={styles.clearfix}/>
            <footer>
                <ul className={styles.social}>
                    <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"/></a></li>
                    <li><a href="https://www.google.com" target="_blank"><i className="fa fa-google-plus"/></a></li>
                    <li><a href="https://twitter.com/home" target="_blank"><i className="fa fa-twitter"/></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank"><i className="fa fa-youtube"/></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"/></a></li>
                </ul>

            </footer>
            <footer className={styles.secondFooter}>
                <p>&copy; Photography.</p>
            </footer>
        </div>
    );
};
export default ResponsivePhotographyWebsite;