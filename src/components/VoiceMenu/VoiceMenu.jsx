import styles from "./VoiceMenu.module.scss";

const VoiceMenu = ({ label, icon }) => {
  return (
    <li className={styles.main}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </li>
  );
};

export default VoiceMenu;