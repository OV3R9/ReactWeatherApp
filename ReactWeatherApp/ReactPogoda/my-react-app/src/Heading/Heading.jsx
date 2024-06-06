import Logo from "../Logo/Logo.jsx";
import styles from "./Heading.module.css";

function Heading() {
  return (
    <>
      <header className={styles.headerContainer}>
        <Logo />
      </header>
    </>
  );
}

export default Heading;
