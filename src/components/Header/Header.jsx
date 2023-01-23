import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <h1>E-Commerce Dashboard</h1>
      </div>
      <div className={styles.btnSet}></div>
    </div>
  );
};

export default Header;