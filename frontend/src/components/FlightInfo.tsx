import styles from '../css/FlightInfo.module.css'; //changed?
import Upload from '../components/Upload.tsx'; // Your upload component
import cloud1 from '../assets/images/cloud5.png';
import cloud2 from '../assets/images/cloud2.png';
import cloud3 from '../assets/images/cloud1.png';

const FlightInfo = () => {
    return(
        <div className={styles.parent}>

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