import React from 'react'
import styles from "./NavBar.module.scss"
import { navBarLinks } from "./../../constants/navbar.js";

import VoiceMenu from '../VoiceMenu/VoiceMenu';

const NavBar = () => {

    return (
      <ul className={styles.main}>
        <div className={styles.ulMenu}>
          {navBarLinks.map((item, index) => (
            <VoiceMenu icon={item.icon} key={item.id} label={item.label} />
          ))}
        </div>
      </ul>
    );
  };
  
  export default NavBar;