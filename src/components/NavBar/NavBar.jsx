import React from 'react'
import styles from "./NavBar.module.scss"
import { navBarLinks } from "./../../constants/navbar.js";
import VoiceMenu from '../VoiceMenu/VoiceMenu';

const NavBar = ({setRoute}) => {

    return (
      <ul className={styles.main}>
        <div className={styles.ulMenu}>
          {navBarLinks.map((item, index) => (
            <VoiceMenu
            setRoute={setRoute}  
            routeUrl={item.route} 
            icon={item.icon} 
            key={item.id} 
            label={item.label} />
          ))}
        </div>
      </ul>
    );
  };
  
  export default NavBar;

/**
  * Riga 14: passiamo come props setRoute (che al suo interno contiene lo stato di route) da NavBar a VoiceMenu
  * Riga 15: passiamo come props routeUrl (che corrisponde alla voce (item) del menu da selezionare) da NavBar a VoiceMenu
*/