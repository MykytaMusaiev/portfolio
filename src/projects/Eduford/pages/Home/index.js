import s from "./styles.module.css";
import {Navbar} from "../../components";

const Home = () => {
    return (
        <>
            <section className={s.header}>
                <Navbar/>

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
                        <img src={require("../../assets/img/london.png")} alt="london"/>
                        <div className={s.layer}>
                            <h3>LONDON</h3>
                        </div>
                    </div>
                    <div className={s.campusCol}>
                        <img src={require("../../assets/img/newyork.png")} alt="london"/>
                        <div className={s.layer}>
                            <h3>NEW YORK</h3>
                        </div>
                    </div>
                    <div className={s.campusCol}>
                        <img src={require("../../assets/img/washington.png")} alt="london"/>
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
                        <img src={require("../../assets/img/library.png")} alt="library"/>
                        <h3>World Class Library</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at consequuntur delectus eaque
                            et in
                            quaerat voluptatibus. Aliquam commodi consequatur, corporis exercitationem, fuga itaque
                            maiores
                            mollitia odio ratione vel voluptas!
                        </p>
                    </div>

                    <div className={s.facilitiesCol}>
                        <img src={require("../../assets/img/basketball.png")} alt="Playground"/>
                        <h3>Largest Playground</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at consequuntur delectus eaque
                            et in
                            quaerat voluptatibus. Aliquam commodi consequatur, corporis exercitationem, fuga itaque
                            maiores
                            mollitia odio ratione vel voluptas!
                        </p>
                    </div>

                    <div className={s.facilitiesCol}>
                        <img src={require("../../assets/img/cafeteria.png")} alt="cafeteria"/>
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
                        <img src={require("../../assets/img/user1.jpg")} alt="student1"/>
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
                        <img src={require("../../assets/img/user2.jpg")} alt="student2"/>
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
        </>

    )
}

export default Home;