import styles from '../css/login.module.css';
import UserLogin from '../components/login.tsx';
import cloud1 from '../assets/images/cloud1.png';
import cloud2 from '../assets/images/cloud2.png';
import cloud3 from '../assets/images/cloud3.png';
import cloud4 from '../assets/images/cloud4.png';

function Login() {
    return (
        <div className={styles.parent}>
            <img src={cloud1} className="absolute top-10 -left-20 w-md h-md z-0" alt='cloud 1'/>
            <img src={cloud2} className="absolute top-10 -right-5 w-md h-md z-0" alt='cloud 2'/>
            <img src={cloud3} className="absolute top-15 -left-15 w-md h-md z-0" alt='cloud 3'/>
            <img src={cloud4} className="absolute -bottom-30 right-40 w-md h-md z-0" alt='cloud4'/>
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