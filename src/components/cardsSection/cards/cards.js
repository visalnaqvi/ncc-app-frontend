import styles from "./cards.module.css"
import {MdOutlineDateRange} from "react-icons/md"
const Cards = ({ data , handleClick }) => {

    return (

        <div className={styles.wrapper}>
            {
                data.map((card, i) => (

                    <div onClick={()=>{handleClick(i)}} className={styles.card} key={i}>
                        <div className={styles.img}>
                            <img src={`http://localhost:1337${card.image.data?.attributes.url}`} />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{card.title}</h3>
                            <div className={styles.dateContainer}>
                            <span className={styles.icon}><MdOutlineDateRange /></span><p className={styles.date}>{card.date}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default Cards;