import NavBar from "../NavBar/NavBar";
import styles from "./Container.module.scss";

const Container = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sxColumn}>
        <NavBar />
      </div>
      <div className={styles.dxColumn}></div>
    </div>
  );
};

export default Container;