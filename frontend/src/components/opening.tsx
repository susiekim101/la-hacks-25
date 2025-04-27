import styles from "../css/opening.module.css"; 
import logo from "../assets/images/logo.png";
import car from "../assets/images/car.png";
import NavBar from "./navbar";
import cloud1 from "../assets/images/cloud1.png";
import cloud2 from "../assets/images/cloud2.png";
import cloud3 from "../assets/images/cloud3.png";
import cloud4 from "../assets/images/cloud4.png";
import cloud5 from "../assets/images/cloud5.png";
import blob from "../assets/images/blob.png"; 
import circle from "../assets/images/circle.png";
import oval from "../assets/images/oval.png";

const Opening = () => {
  return (
    <div className={styles.parentContainer}>
      <NavBar/> 
      {/* Cloud 1 */}
        <img src={cloud1} alt="cloud1" className="absolute top-10 left-10 w-1/4 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* Cloud 2 */}
      <img src={cloud2} alt="cloud2" className="absolute top-16 left-3/4 w-1/5 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* Cloud 3 */}
      <img src={cloud3} alt="cloud3" className="absolute bottom-30 right-1/15 w-1/4 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* Cloud 4 */}
      <img src={cloud4} alt="cloud4" className="absolute top-60 left-2/3 w-1/5 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* Cloud 5 */}
      <img src={cloud5} alt="cloud5" className="absolute top-80 left-10 w-1/4 z-0 opacity-60 animate-pulse object-contain" />
      
      {/* BOTTOM BLOBS */}
      <img src={oval} alt="left blob" className="absolute bottom-[-550px] left-[800px] w-1/2 h-auto z-0 transform rotate-50" />
      <img src={blob} alt="left blob" className="absolute bottom-[-250px] left-[500px] w-1/3 h-auto z-0 transform rotate-0" />
      <img src={oval} alt="left blob 2" className="absolute bottom-[-250px] left-30 w-[35%] h-auto z-0 transform rotate-190" />
      <img src={circle} alt="center blob" className="absolute bottom-[-200px] left-[-100px] w-1/4 h-auto z-0 transform rotate-300" />
      <img src={circle} alt="center blob" className="absolute bottom-[-150px] right-[-100px] w-1/4 h-auto z-0 transform rotate-300" />  
     

        {/* CAR */}
        <img src={car} alt="car" 
        className="absolute bottom-18 left-[69%] w-20 h-auto z-10 transform rotate-[0deg]" 
      /> 
       <div className={styles.outerContainer}>
        <img src={logo} alt="Logo" className="w-48 h-auto mb-4 mx-auto scale-280" />
          <p className={styles.normalFont}>From flight to rides - cutting carbon, one trip at a time.</p>
          <div className={styles.fuelFont}>467</div>
          <p className={styles.subtitle}>million tons of carbon saved</p>
          <div className={styles.buttonsContainer}>
            <button className={styles.loginButton}>Login</button>
            <button className={styles.signupButton}>Sign up</button>
            </div>
          </div>
        </div>
  );
};

export default Opening;