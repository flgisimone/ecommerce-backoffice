import styles from "./Table.module.scss"

const Table = ({categoriesState, getData, loading}) => {
  return (
    <div className={styles.main}>
            {categoriesState.
            filter(item => item.name === "Clothes" || item.name === "Electronics"  || (item.name === "Shoes" && item.id === 4)  || item.name === "Others")
            .map(item => (
                <div className={styles.containerCategories}>
                    <p className={styles.textCategories}>{item.name}</p>
                    <img src={item.image} className={styles.imgCategories}/>
                </div>
            ))}
    </div>
  )
}

export default Table