import styles from '../css/login.module.css';
import UserLogin from '../components/login.tsx';

function Login() {
    return (
        <div className={styles.body}>
            <UserLogin/>
        </div>
    );
}

export default Login