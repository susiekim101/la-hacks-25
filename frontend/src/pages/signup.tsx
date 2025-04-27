import styles from '../css/login.module.css';
import HStack from '../components/HStack';
import UserSignUp from '../components/signup.tsx';
import cloud1 from '../assets/images/cloud1.png';
import cloud2 from '../assets/images/cloud2.png';
import star from "../assets/images/star.png";
import NavBar from "../components/navbar";

const Spacer = ({ width = '1rem' }: { width?: string }) => {
    return (
      <div style={{ width }} />
    );
  };

function SignUp() {
    return (
        <>
            <div className={styles.parent}>
            <NavBar/> 
                <img src={cloud1} className="absolute top-10 -left-20 w-md h-md z-0" alt='decor 1'/>
                <img src={cloud2} className="absolute top-5 -right-5 w-md h-md z-0" alt='decor2'/>
                <img src={star} alt="star" className="absolute top-10 left-10 w-1/8 z-o opacity-100 animate-pulse object-contain rotate-180" />
      <img src={star} alt="star" className="absolute top-10 right-10 w-1/8 z-o opacity-100 animate-pulse object-contain" />
      <img src={star} alt="star" className="absolute bottom-100 left-40 w-1/8 z-o opacity-100 animate-pulse object-contain rotate-90" />
      <img src={star} alt="star" className="absolute top-5 right-80 w-1/6 z-o opacity-100 animate-pulse object-contain rotate-330" />
      <img src={star} alt="star" className="absolute top-0 left-100 w-1/13 z-o opacity-100 animate-pulse object-contain rotate-50" />
      <img src={star} alt="star" className="absolute bottom-100 right-30 w-1/13 z-o opacity-100 animate-pulse object-contain rotate-40" />

                <div className={styles.container}>
                    <div className={styles.loginContainer}>
                    <HStack
            spacing="4 rem" // Set the gap between the text block and the signup block
            alignItems="center" // Vertically align the centers of the text block and signup block
            // justifyContent could be added here if needed, e.g. "center"
          >
                        <div className={styles.textContainer}>
                            
                            <h1 className={styles.title}>Cloud2Campus</h1>
                            <p className={styles.description}>Did you know? The average person today emits more than 4 tons of CO2 each year just from transportation and electricity use. </p>
                        </div>
                        <Spacer width="50px" />
                        <div className={styles.body}>
                            <UserSignUp/>
                        </div>
                        </HStack>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;