import styles from "./Modal.module.scss";
import CategoryForm from "../CategoryForm/CategoryForm";

const Modal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.modal}>
        <button onClick={() => setShowModal(false)}>Chiudi</button>
        
      </div>
    </div>
  );
};

export default Modal;