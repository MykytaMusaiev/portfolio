import {Link} from "react-router-dom";
import s from "./styles.module.css"

const ProjectsGallery = () => {
    return (
        <>
            <div className="clearfix"/>
            <h2>Landings</h2>
            <section className={s.sectionWrapper}>

                <div className={s.singleProject}>
                    <Link to="/sluralpright" className={s.link}>
                        <img src={require("./img/slural_preview.jpg")} alt="slural"/>
                        <p className={s.textDescription}>Sluralpright login page</p>
                    </Link>
                </div>

                <div className={s.singleProject}>
                    <Link to="/photography" className={s.link}>
                        <img src={require("./img/proto_preview.jpg")} alt="photography"/>
                        <p className={s.textDescription}>Photography portfolio site</p>
                    </Link>
                </div>

            </section>

            <div className="clearfix"/>
            <h2>Apps</h2>
            <section>

            </section>
        </>
    )
}

export default ProjectsGallery;