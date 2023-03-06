import {useEffect} from "react";
import {BackToHomeArrow} from "../../components";
import s from "./styles.module.css"

const Eduford = () => {
    useEffect(() => {
        document.title = 'Education University';
    }, []);

    const showMenu = () => {
        let el = document.getElementById("navPanel")
        el.style.right = "0";
    }

    const hideMenu = () => {
        let el = document.getElementById("navPanel")
        el.style.right = "-12.5rem";
    }
    return (
        <div className={s.edufordGlobal}>
            <BackToHomeArrow/>

            <section className={s.header}>
                <nav className={s.navBar}>
                    <a href="#"><img src={require("./img/logo.png")} alt=""/></a>
                    <div className={s.navLinks} id="navPanel">
                        <i className={["fa fa-times", s.icon].join(" ")} onClick={hideMenu} aria-hidden="true"/>
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">ABOUT</a></li>
                            <li><a href="">COURSE</a></li>
                            <li><a href="">BLOG</a></li>
                            <li><a href="">CONTACT</a></li>
                        </ul>
                    </div>
                    <i className={["fa fa-bars", s.icon].join(" ")} onClick={showMenu}/>
                </nav>
                <div className={s.textBox}>
                    <h1>World's Biggest university</h1>
                    <p>Making websites is now one of the easiest thing in the world. You just need to learn: <br/> HTML,
                        CSS, Javascript, and you good to go.
                    </p>
                    <a href="#" className={s.heroBtn}>Visit Us to learn more.</a>
                </div>
            </section>

            <section className={s.course}>
                <h1>Courses we offer.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias architecto consequatur
                    eaque eos ex facilis labore, maxime modi necessitatibus nisi quasi quisquam quo. Aperiam consequatur
                    explicabo minus suscipit voluptatem!
                </p>

                <div className={s.row}>
                    <div className={s.courseCol}>
                        <h3>Intermediate</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium alias, amet
                            architecto aut commodi, consequatur est fugiat illo inventore itaque iusto libero non
                            perferendis, quae quasi quod suscipit?
                        </p>
                    </div>
                    <div className={s.courseCol}>
                        <h3>Degree</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium alias, amet
                            architecto aut commodi, consequatur est fugiat illo inventore itaque iusto libero non
                            perferendis, quae quasi quod suscipit?
                        </p>
                    </div>
                    <div className={s.courseCol}>
                        <h3>Post Graduation</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium alias, amet
                            architecto aut commodi, consequatur est fugiat illo inventore itaque iusto libero non
                            perferendis, quae quasi quod suscipit?
                        </p>
                    </div>
                </div>
            </section>

            <section className={s.campus}>
                <h1>Our Global Campus</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque incidunt laudantium
                    obcaecati odit possimus sit soluta? Dolores et eveniet facere hic inventore minima non nulla officia
                    optio sequi, vel.
                </p>
                <div className={s.row}>
                    <div className={s.campusCol}>
                        <img src={require("./img/london.png")} alt="london"/>
                        <div className={s.layer}>
                            <h3>LONDON</h3>
                        </div>
                    </div>
                    <div className={s.campusCol}>
                        <img src={require("./img/newyork.png")} alt="london"/>
                        <div className={s.layer}>
                            <h3>NEW YORK</h3>
                        </div>
                    </div>
                    <div className={s.campusCol}>
                        <img src={require("./img/washington.png")} alt="london"/>
                        <div className={s.layer}>
                            <h3>WASHINGTOR</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.facilities}>
                <h1>Out Facilities</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi architecto autem consequuntur
                    cumque dicta dolorum ea fugiat inventore iusto labore nihil praesentium quidem quos recusandae sequi
                    soluta, ut veritatis?</p>
                <div className={s.row}>

                    <div className={s.facilitiesCol}>
                        <img src={require("./img/library.png")} alt="library"/>
                        <h3>World Class Library</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at consequuntur delectus eaque
                            et in
                            quaerat voluptatibus. Aliquam commodi consequatur, corporis exercitationem, fuga itaque
                            maiores
                            mollitia odio ratione vel voluptas!
                        </p>
                    </div>

                    <div className={s.facilitiesCol}>
                        <img src={require("./img/basketball.png")} alt="Playground"/>
                        <h3>Largest Playground</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at consequuntur delectus eaque
                            et in
                            quaerat voluptatibus. Aliquam commodi consequatur, corporis exercitationem, fuga itaque
                            maiores
                            mollitia odio ratione vel voluptas!
                        </p>
                    </div>

                    <div className={s.facilitiesCol}>
                        <img src={require("./img/cafeteria.png")} alt="cafeteria"/>
                        <h3>Tasty and Healthy Food</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at consequuntur delectus eaque
                            et in
                            quaerat voluptatibus. Aliquam commodi consequatur, corporis exercitationem, fuga itaque
                            maiores
                            mollitia odio ratione vel voluptas!
                        </p>
                    </div>

                </div>
            </section>

            <section className={s.testimonials}>
                <h1>What Our Students Says</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi debitis est exercitationem
                    fugiat fugit iusto maxime minus natus necessitatibus officiis quia sed sit tempora, totam veritatis
                    voluptatibus. Reiciendis, voluptas!</p>
                <div className={s.row}>
                    <div className={s.testimonialsCol}>
                        <img src={require("./img/user1.jpg")} alt="student1"/>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aut autem
                                excepturi expedita maxime nemo, nihil nobis nulla odit optio perferendis qui quidem
                                suscipit veniam! Autem consequatur officia praesentium.
                            </p>
                            <h3>Christine Berkley</h3>
                            <i className={["fa fa-star", s.icon].join(" ")}/>
                            <i className={["fa fa-star", s.icon].join(" ")}/>
                            <i className={["fa fa-star", s.icon].join(" ")}/>
                            <i className={["fa fa-star", s.icon].join(" ")}/>
                            <i className={["fa fa-star-o", s.icon].join(" ")}/>
                        </div>
                    </div>
                    <div className={s.testimonialsCol}>
                        <img src={require("./img/user2.jpg")} alt="student2"/>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aut autem
                                excepturi expedita maxime nemo, nihil nobis nulla odit optio perferendis qui quidem
                                suscipit veniam! Autem consequatur officia praesentium.
                            </p>
                            <h3>David Byer</h3>
                            <i className={["fa fa-star", s.icon].join(" ")}/>
                            <i className={["fa fa-star", s.icon].join(" ")}/>
                            <i className={["fa fa-star", s.icon].join(" ")}/>
                            <i className={["fa fa-star", s.icon].join(" ")}/>
                            <i className={["fa fa-star-half-o", s.icon].join(" ")}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.cta}>
                <h1>Enroll For Out Various Online courses <br/> Anywhere from the World</h1>
                <a href="#" className={s.heroBtn}>CONTACT US</a>
            </section>

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
        </div>
    )
}

export default Eduford;