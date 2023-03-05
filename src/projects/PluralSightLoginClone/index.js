import {useEffect} from "react";
import style from "./style.module.css"
import {BackToHomeArrow} from "../../components";

const PluralSightLoginClone = () => {
    useEffect(() => {
        document.title = 'PluralSightLoginClone';
    }, []);
    return (
        <div className={style.wrapper}>
            <BackToHomeArrow/>
            <div className={style.left}>
                <div className={style.signIn}>
                    <div className={style.signLogo}>
                        <img src="https://image.ibb.co/hW1YHq/login-logo.png" className={style.signLogoImg} alt="Sluralpright"/>
                    </div>
                    <form className={style.signForm}>
                        <div>
                            <label htmlFor="loginInput" className={style.signLabel}>Email or username</label>
                            <input type="text" className={style.signInput} id="loginInput"/>
                        </div>
                        <div>
                            <label htmlFor="passwordInput" className={style.signLabel}>password</label>
                            <input type="password" className={style.signInput} id="passwordInput"/>
                        </div>
                        <button type="submit" className={[style.primaryBtn, style.signBtn].join(' ')}>Sigh In</button>
                    </form>

                    <div className={style.links}>
                        <a href="#">Forgot Password</a>
                        <a href="#">Sigh in with company or school</a>
                    </div>
                    <div className={style.or}>
                        <hr className={style.bar}/>
                        <span>OR</span>
                        <hr className={style.bar}/>
                    </div>
                    <a href="#" className={style.secondaryBtn}>Create an account</a>

                </div>

                <footer className={style.mainFooter}>
                    <p>Copyright &copy; 2018, Sluralprights All Rights Reserved</p>
                    <div>
                        <a href="#">Terms of use</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </footer>
            </div>
            <div  className={style.right}>
                <div className={style.showcase}>
                    <div className={style.showcaseContent}>
                        <h1 className={style.showcaseText}>
                            Let's create the future <strong>together</strong>
                        </h1>
                        <a href="#" className={style.secondaryBtn}>Start a FREE 10-day trial</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PluralSightLoginClone;