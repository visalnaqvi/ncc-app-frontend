import styles from "./imageSlideShow.module.css"
import { GrPrevious, GrNext } from "react-icons/gr"
import {RxCross2} from "react-icons/rx"
const ImageSlideShow = ({ activeCard,
                        activeCardIndex, 
                        handleCardClick, 
                        hideImage }) => {
    return (
        <div className={styles.wrapper}>
            
            
            <div className={styles.icon} onClick={() => {
                handleCardClick(activeCardIndex - 1)
            }}> <GrPrevious /></div>
            <div>
            <div className={styles.img}>
            <RxCross2 onClick={()=>{
                hideImage();
            }}/>
                 <img src={`http://localhost:1337${activeCard.image.data?.attributes.url}`} /></div>
            
                 <div className={styles.content}>
                <p className={styles.title}>{activeCard.title}</p>
                <p className={styles.date}>{activeCard.date}</p>
            </div>
            </div>
            <div className={styles.icon} onClick={() => {
                handleCardClick(activeCardIndex + 1)
            }}>
                <GrNext />
            </div>
  
            
        
        </div>
    )
}

export default ImageSlideShow;