import styles from '../css/login.module.css';
import UserLogin from '../components/login.tsx';
import cloud1 from '../assets/images/cloud1.png';
import cloud2 from '../assets/images/cloud2.png';

function Login() {
    return (
        <div className={styles.parent}>
            <img src={cloud1} className="absolute top-10 -left-20 w-md h-md z-0" alt='decor 1'/>
            <img src={cloud2} className="absolute top-5 -right-5 w-md h-md z-0" alt='decor2'/>
            <div className={styles.container}>
                <div className={styles.loginContainer}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Cloud2Campus</h1>
                        <p className={styles.description}>insert factoid about co2 emissions / call from gemini api </p>
                    </div>
                    <div className={styles.body}>
                        <UserLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login