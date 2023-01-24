import styles from "./VoiceMenu.module.scss";

const VoiceMenu = ({ label, icon, setRoute, routeUrl }) => {
  return (
    <li onClick={() => setRoute(routeUrl)} className={styles.main}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </li>
  );
};

export default VoiceMenu;

/**
 * a riga 5 facciamo un evento che al click setta la route (setRoute) in base al routeUrl, ovvero la voce del menu da cliccare (item)
 * 
*/