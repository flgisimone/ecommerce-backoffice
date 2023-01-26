import React from 'react'
import { useState, useEffect } from 'react'
import { DELETE, GET } from '../../utils/http'
import SingleProd from '../SingleProd/SingleProd'
import styles from "./Products.module.scss"

const Products = () => {

    const [products, setProducts] = useState([])

    const reloadItems = () =>{
        GET("products").then(data => {
            setProducts(data)
        })
    }

    useEffect(() => {
      reloadItems()
    }, [])

    const deleteProduct = id =>{
        DELETE("products/", id).then(data => {
            if(data.status === 200) reloadItems()
        })
    }

  return (
    <div className={styles.containerProducts}>
        <h2 className={styles.textProduct}>Prodotti</h2>
        
        <ul className={styles.ulProducts}>
            {
                products.map((item, index) => (
                    <SingleProd
                    reloadItems={reloadItems}
                    deleteProduct={deleteProduct}
                    item={item}
                    key={index}
                    />
                ))
            }
        </ul>
    </div>
  )
}

export default Products