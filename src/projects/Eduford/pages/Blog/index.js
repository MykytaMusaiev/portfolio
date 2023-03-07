import s from "./styles.module.css"
import {Navbar} from "../../components";

const Blog = () => {
    return (
        <>
            <section className={s.subHeader}>
                <Navbar/>
                <h1>Our Certificate & Online Programs For 2023</h1>
            </section>
            <section className={s.blogContent}>
                <div className={s.row}>

                    <div className={s.blogLeft}>
                        <img src={require("../../assets/img/certificate.jpg")} alt="certificate"/>
                        <h2>Our Certificate & Online Programs For 2023</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam consequuntur dolorum
                            earum eligendi exercitationem expedita harum iste laudantium necessitatibus nihil nobis
                            quaerat quia, quis quisquam recusandae repellat similique sit.</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut delectus doloribus eius
                            eligendi expedita fuga nemo numquam possimus, provident quam qui sit velit. Libero
                            reiciendis similique sint sit tempora!</p>

                        <div className={s.commentBox}>
                            <h3>Leave a comment</h3>
                            <form className={s.commentForm}>
                                <input type="text" placeholder="Enter Name"/>
                                <input type="email" placeholder="Enter Emaile"/>
                                <textarea rows="5" placeholder="Your comment"/>
                                <button type="submit" className={s.heroBtn}>POST COMMENT</button>
                            </form>
                        </div>

                    </div>

                    <div className={s.blogRight}>
                        <h3>Post Categories</h3>
                        <div>
                            <span>Business Analytics</span>
                            <span>21</span>
                        </div>
                        <div>
                            <span>Data Science</span>
                            <span>28</span>
                        </div>
                        <div>
                            <span>Machine Learning</span>
                            <span>15</span>
                        </div>
                        <div>
                            <span>Computer Science</span>
                            <span>34</span>
                        </div>
                        <div>
                            <span>AutoCAD</span>
                            <span>42</span>
                        </div>
                        <div>
                            <span>Journalism</span>
                            <span>22</span>
                        </div>
                        <div>
                            <span>Commerce</span>
                            <span>30</span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Blog;