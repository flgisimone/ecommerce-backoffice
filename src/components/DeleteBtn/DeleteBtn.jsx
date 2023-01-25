import React from 'react'
import { TbTrash } from "react-icons/tb";
import styles from "./DeleteBtn.module.scss"
import { DELETE } from '../../utils/http';

const DeleteBtn = ({ id, getData }) => {

    const deleteElement = () => {
        DELETE("categories", "/" + id).then(data => {
            console.log(data)
          getData();
        });
    }

  return (
    <button onClick={() => deleteElement()} className={styles.DeleteBtn}>
        <TbTrash />
    </button>
  )
}

export default DeleteBtn