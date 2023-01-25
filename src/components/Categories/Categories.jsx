import React from 'react'
import { useEffect, useState } from 'react'
import { GET } from '../../utils/http'
import styles from "./Categories.module.scss"
import Table from '../Table/Table'
import Modal from '../Modal/Modal'

const Categories = () => {
  const [showModal, setShowModal] = useState(false);

    const categoriesStateInit = {
        categories: [],
        loading: true,
    }

    const [categoriesState, setCategoriesState] = useState(categoriesStateInit)

    const getData = () => {
        setCategoriesState({...categoriesState, loading: true})
        GET("categories").then(data => 
            setCategoriesState({
                loading: false,
                categories: data,
            })
        )
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className={styles.main}>
      
    <h1>Categories</h1>
    <Table
      categoriesState={categoriesState.categories}
      loading={categoriesState.loading}
      getData={getData}
      setShowModal={setShowModal}
    />
  </div>
  )
}

export default Categories