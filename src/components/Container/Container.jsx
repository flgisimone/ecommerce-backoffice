import NavBar from "../NavBar/NavBar";
import styles from "./Container.module.scss";
import { useState } from 'react';
import Categories from "../Categories/Categories"

const Container = () => {

  const [route, setRoute] = useState("home") //impostatiamo home come route predefinita

  return (
    <div className={styles.main}>
      <div className={styles.sxColumn}>
        <NavBar setRoute={setRoute} /> {/*passiamo come props setRoute da padre in figlio fino ad arrivare a VoiceMenu, passando da NavBar*/}
      </div>
      <div className={styles.dxColumn}>
        {route === "categories" && <Categories />}
        {route === "home" && <div>Home</div>}
        {route === "categories"}
        {route === "products" && <div>Prodotti</div>}
        {route === "orders" && <div>Ordini</div>}
      </div>
    </div>
  );
};

export default Container;