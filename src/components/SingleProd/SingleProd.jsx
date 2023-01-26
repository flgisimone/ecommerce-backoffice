import { useState } from "react";
import styles from "./SingleProd.module.scss"
import { PUT } from "../../utils/http";

const SingleProd = ({item, deleteProduct, reloadItems}) => {

    const[formData, setFormData] = useState({
        title: item.title,
        price: item.price,
        description: item.description,
        categoryId: item.category.id,
        images: [item.images[0]]
    })

    const [showForm, setShowForm] = useState(false)

    const handleForm = (input, e) =>{
        let inputValue = e.target.value ? e.target.value : 0;
        if (input === "price" || input === "categoryId"){
            inputValue = parseInt(inputValue)
        }

        if(input === "images"){
            inputValue = [inputValue]
        }

        setFormData({
            ...formData,
            [input]:inputValue,
        })
    }

        const submitForm = e =>{
            e.preventDefault()
            PUT("products/", formData, item.id)
            .then(res => res.json())
            .then(res => {
                setShowForm(false)
                reloadItems()
            })
        }

  return (
    <div className={styles.mainProduct}>
        <h2 className={styles.liProduct}>{item.title}</h2>
        <img src={item.images} alt="imgProd" className={styles.images} />
        <div className={styles.btnContainer}>
            <button onClick={() => setShowForm(!showForm)} className={styles.btnEdit}><i class="fa-solid fa-pen-to-square"></i></button>
            <button onClick={() => deleteProduct(item.id)} className={styles.btnDelete}><i class="fa-solid fa-trash-can"></i></button>
        </div>
        {
            showForm && (
                <form onSubmit={e => submitForm(e)} className={styles.formEditProd}>
                    <div className={styles.inputContainer}>
                        <input type="text" value={formData.title} onChange={e => handleForm("title", e)}/>
                        <input type="text" value={formData.price} onChange={e => handleForm("price", e)}/>
                        <input type="text" value={formData.description} onChange={e => handleForm("description", e)}/>
                        <input type="text" value={formData.categoryId} onChange={e => handleForm("categoryId", e)}/>
                        <input type="text" value={formData.images} onChange={e => handleForm("images", e)}/>
                    </div>
                    <button type="submit"><i class="fa-solid fa-share-from-square"></i></button>
                </form>
            )
        }
    </div>
  )
}

export default SingleProd