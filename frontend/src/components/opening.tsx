import styles from "../css/opening.module.css"; 
import logo from "../assets/images/logo.png";
import car from "../assets/images/car.png";
// import cloud1 from "../assets/images/cloud1.png";
import Tag from "../components/tag";

const Opening = () => {
  return (
    <div className={styles.parentContainer}>
      <Tag /> 
      {/* <img src={cloud1} alt="cloud" className="absolute top-10 -left-20 w-100 h-100 z-0 opacity-60 animate-pulse"/>  */}
      <img src={car} alt="car" className="h-12 w-auto"/> 
        <div className={styles.outerContainer}>
        <img src={logo} alt="Logo" className="w-48 h-auto mb-4 mx-auto scale-280" />
          <p className={styles.normalFont}>From flight to rides - cutting carbon, one trip at a time.</p>
          <div className={styles.fuelFont}>467</div>
          <p className={styles.subtitle}>million tons of carbon saved</p>
          <div className={styles.buttonsContainer}>
            <button className={styles.loginButton}>Login</button>
            <button className={styles.signupButton}>Sign up</button>i
            </div>
          </div>
        </div>
  );
};

export default Opening;