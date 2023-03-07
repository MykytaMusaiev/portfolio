import s from "./styles.module.css";

const Footer = () => {
    return (
        <>
            <section className={s.footer}>
                <h4>About Us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur iste nesciunt nobis quasi velit.
                    <br/>
                    Commodi cupiditate eaque itaque magnam maiores quae quaerat
                    <br/>
                    repudiandae similique ullam voluptas.
                </p>
                <div className={s.footerIconsWrapper}>
                    <i className={["fa fa-facebook", s.icon].join(" ")}/>
                    <i className={["fa fa-twitter",s.icon].join(" ")}/>
                    <i className={["fa fa-instagram",s.icon].join(" ")}/>
                    <i className={["fa fa-linkedin",s.icon].join(" ")}/>
                </div>
            </section>
        </>
    )
}

export default Footer;