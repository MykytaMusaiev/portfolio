import s from "./styles.module.css"
import {Navbar} from "../../components";

const Course = () => {
    return (
        <>
            <section className={s.subHeader}>
                <Navbar/>
                <h1>Out Courses</h1>
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
        </>
    )
}

export default Course;