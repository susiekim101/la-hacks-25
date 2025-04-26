import styles from '../css/login.module.css';
import UserLogin from '../components/login.tsx';

function Login() {
    return (
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
    );
}

export default Login