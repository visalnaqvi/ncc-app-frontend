import { useEffect } from "react";
import styles from "./column.module.css"
import {AiFillHeart} from "react-icons/ai"
const Column = ({columns})=>{
    useEffect(()=>{
        console.log("inside comp",columns)
    },[columns])
    return(
        <div className={styles.wrapper}>
            {
                columns && columns.map((column , i)=>(
                    <div className={`${styles.column} ${i==1 && styles.wide}`} key={i}>
                        {
                            column.image.data && <div className={styles.img}>
                                <img src={`http://localhost:1337${column.image.data?.attributes.url}`} />
                            </div>
                        }
                        {   
                            column.heading.length>0 && column.heading.map((heading,i)=>(
                                <p className=
                                {`
                                ${heading.isBold&&styles.bold}
                                ${heading.isTag&&styles.tag}
                                ${heading.isContent&&styles.content}
                                ${!heading.isBold && !heading.isTag && !heading.isContent && styles.heading}
                                `}>{heading.title}</p>
                            ))
                        }
                        {
                            column.link.length > 0 && <ul className={styles.list}>
                                {
                                    column.link.map((l,i)=>(
                                        <li key={i}>{l.title}</li>
                                    ))
                                }
                            </ul>
                        }
                        {
                            column.button && <button className={`${column.button.isPrimary ? styles.primaryBtn : styles.secondaryBtn}`}>{column.button.title}{column.button.isPrimary && <span className={styles.icon}><AiFillHeart /></span>}</button>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Column;