import CategoryForm from "../CategoryForm/CategoryForm";
import styles from "./EditModal.module.scss";

const EditModal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.modal}>
        <button onClick={() => setShowModal(false)}>Chiudi</button>
        <CategoryForm
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default EditModal;