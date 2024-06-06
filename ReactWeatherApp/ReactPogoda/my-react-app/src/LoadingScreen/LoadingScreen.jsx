import Logo from "../Logo/Logo.jsx";
import styles from "./LoadingScreen.module.css"

function LoadingScreen() {
  return (
    <>
      <div className={styles.loading}>
        <Logo />
      </div>
    </>
  );
}

export default LoadingScreen;
