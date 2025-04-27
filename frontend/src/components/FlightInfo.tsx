import styles from '../css/FlightInfo.module.css';
import Upload from '../components/Upload.tsx'; // Your upload component
import cloud1 from '../assets/images/cloud5.png';
import cloud2 from '../assets/images/cloud2.png';
import cloud3 from '../assets/images/cloud1.png';

const FlightInfo = () => {
    return(
        <div className={styles.parent}>
            <img src={cloud1} className="absolute top-10 -left-20 w-64 h-64 z-0 opacity-60 animate-pulse" alt="decor 1" />
            <img src={cloud2} className="absolute top-5 -right-10 w-48 h-48 z-0 opacity-60" alt="decor 2" />
            <img src={cloud3} className="absolute bottom-5 -right-32 w-72 h-72 z-0 opacity-50" alt="decor 3" />

            <div className={styles.contentWrapper}>
                <div className={styles.myfont}>New Trip</div>

                <div className={styles.FlightInfoContainer}>

                    <div className={styles.normalFont}>
                        Upload Flight Information
                    </div>

                    <div>
                        <Upload />
                    </div>

                    <div style={{marginTop: '2rem'}}>
                        <a href="/EnterManually" className={styles.enter}>Enter Manually</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FlightInfo;

/*                    <div className={styles.text}>or</div>
                    <EnterManually /> */