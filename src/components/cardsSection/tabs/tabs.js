import { useState } from "react";
import styles from "./tabs.module.css"

const Tabs = ({tabs , onTabClick})=>{
    const [active , setActive] = useState("all")
    return ( 
        <div className={styles.wrapper}>
            {
                tabs.map((tab,i)=>(
                    <div 
                    key={i} 
                    id={tab.value} 
                    onClick={()=>{
                        setActive(tab.value)
                        onTabClick(tab.value)
                    }}
                    className={`${styles.pill} ${active==tab.value && styles.active}`}
                    >{tab.title}</div>
                ))
            }
        </div>
    )
}

export default Tabs;