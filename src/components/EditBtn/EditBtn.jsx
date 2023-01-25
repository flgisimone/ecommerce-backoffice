import React from 'react'
import { TbEdit } from "react-icons/tb";
import styles from "./EditBtn.module.scss"
import EditModal from '../EditModal/EditModal';
import { useState } from "react";

const EditBtn = ({ data, getData }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <EditModal getData={getData} data={data} setShowModal={setShowModal} />
      )}

      <button onClick={() => setShowModal(true)} className={styles.EditBtn}>
        <TbEdit />
      </button>
    </>
  );
};

export default EditBtn;