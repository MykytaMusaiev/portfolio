import { Link } from "react-router-dom";
import s from "./styles.module.css"

const ProjectsGallery = () => {
    return (
        <div className={s.projGalleryGlobal}>
            <div className="clearfix" />
            <h2 className={s.header}>Landings</h2>
            <section className={s.sectionWrapper}>
                <div className={s.singleProject}>
                    <Link to="/portfolio/sluralpright" className={s.link}>
                        <img src={require("./img/slural_preview.jpg")} alt="Slural" />
                        <p className={s.textDescription}>Sluralpright login page</p>
                    </Link>
                </div>

                <div className={s.singleProject}>
                    <Link to="/portfolio/photography" className={s.link}>
                        <img src={require("./img/proto_preview.jpg")} alt="Photography" />
                        <p className={s.textDescription}>Photography portfolio site</p>
                    </Link>
                </div>

                <div className={s.singleProject}>
                    <Link to="/portfolio/eduford" className={s.link}>
                        <img src={require("./img/edu_preview.jpg")} alt="Education university" />
                        <p className={s.textDescription}>Multipaged Education University site</p>
                    </Link>
                </div>

            </section>

            <div className="clearfix" />
            <h2 className={s.header}>Apps</h2>
            <section className={s.sectionWrapper}>

                <div className={s.singleProject}>
                    <Link to="https://messenger-anotherrandomcoder.vercel.app/" className={s.link}>
                        <img src={require("./img/real_time_messenger.jpg")} alt="Real Time Messenger" />
                        <p className={s.textDescription}>Real Time Messenger</p>
                    </Link>
                </div>

                <div className={s.singleProject}>
                    <Link to="https://github.com/anotherrandomcoder/movies_recommendation" className={s.link}>
                        <img src={require("./img/movies_recommendation.jpg")} alt="Movies Recommendation App" />
                        <p className={s.textDescription}>Movies recommendation app</p>
                    </Link>
                </div>

                <div className={s.singleProject}>
                    <Link to="https://e-commerce-admin-anotherrandomcoder.vercel.app/" className={s.link}>
                        <img src={require("./img/e-commerce_admin.jpg")} alt="E-commerce admin panel" />
                        <p className={s.textDescription}>E-commerce admin panel</p>
                    </Link>
                </div>

                <div className={s.singleProject}>
                    <Link to="https://e-commerce-store-anotherrandomcoder.vercel.app/" className={s.link}>
                        <img src={require("./img/e-commerce_store.jpg")} alt="E-commerce Store" />
                        <p className={s.textDescription}>E-commerce Store</p>
                    </Link>
                </div>

            </section>
        </div>
    )
}

export default ProjectsGallery;