import s from "./styles.module.css"
import {Navbar} from "../../components";


const Contact = () => {
    return (
        <>
            <section className={s.subHeader}>
                <Navbar/>
                <h1>Contact Us</h1>
            </section>
            <section className={s.location}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                    width="600" height="450" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false"
                    tabIndex="0"/>

            </section>
            <section className={s.contactUs}>
                <div className={s.row}>
                    <div className={s.contactCol}>
                        <div>
                            <i className={["fa fa-home", s.icon].join(" ")}/>
                            <span>
                                <h5>XYZ Road, ABD building</h5>
                                <p>Kyiv, Ukraine</p>
                            </span>
                        </div>

                        <div>
                            <i className={["fa fa-phone", s.icon].join(" ")}/>
                            <span>
                                <h5>+1 23456789</h5>
                                <p>Monday to Saturday, 10AM to 6PM</p>
                            </span>
                        </div>

                        <div>
                            <i className={["fa fa-envelope-o", s.icon].join(" ")}/>
                            <span>
                                <h5>info@email.com</h5>
                                <p>Email us your query</p>
                            </span>
                        </div>
                    </div>

                    <div className={s.contactCol}>
                        <form>
                            <input type="text" placeholder="Enter Your name" required/>
                            <input type="email" placeholder="Enter Your email" required/>
                            <input type="text" placeholder="Enter Your subject" required/>
                            <textarea rows="10" placeholder="Message"/>
                            <button type="submit" className={s.heroBtn}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;