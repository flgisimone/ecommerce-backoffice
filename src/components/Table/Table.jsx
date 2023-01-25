import styles from "./Table.module.scss"
import EditBtn from "../EditBtn/EditBtn"
import DeleteBtn from "../DeleteBtn/DeleteBtn"

const Table = ({categoriesState, getData, loading}) => {
  return (
    <div className={styles.main}>
            {categoriesState.map(item => (
              <>
                <div className={styles.containerCategories} key={item.id}>
                    <p className={styles.textCategories}>{item.name}</p>
                    <img src={item.image} className={styles.imgCategories}/>
                    <div className={styles.containerBtn}>
                      <EditBtn getData={getData} data={{ name: item.name, image: item.image, id: item.id }}/>
                      <DeleteBtn getData={getData} id={item.id}/>
                    </div>
                </div>
                
                </>
            ))}
            
    </div>
  )
}

export default Table