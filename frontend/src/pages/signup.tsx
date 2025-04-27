import { useState } from "react";
import axios from "axios";
import styles from '../css/login.module.css';
import UserSignUp from '../components/signup.tsx';
import cloud1 from '../assets/images/cloud1.png';
import cloud2 from '../assets/images/cloud2.png';

function SignUp() {
    return (
        <>
            <div className={styles.parent}>
                <img src={cloud1} className="absolute top-10 -left-20 w-md h-md z-0" alt='decor 1'/>
                <img src={cloud2} className="absolute top-5 -right-5 w-md h-md z-0" alt='decor2'/>
                <div className={styles.container}>
                    <div className={styles.loginContainer}>
                        <div className={styles.textContainer}>
                            <h1 className={styles.title}>Cloud2Campus</h1>
                            <p className={styles.description}>text text text </p>
                        </div>
                        <div className={styles.body}>
                            <UserSignUp/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;