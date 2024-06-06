import styles from "./Logo.module.css";

function Logo() {
  return (
    <>
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}></div>
        <h1 className={styles.logoName}>PurpleHaze</h1>
      </div>
    </>
  );
}

export default Logo;
