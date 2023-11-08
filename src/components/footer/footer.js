import styles from "./footer.module.css"
import axios from "axios";
import { useEffect, useState } from "react";
import Column from "./columns/column";
import Bottom from "./bottom/bottom";
const Footer = ()=>{
    const [data , setData] = useState(null);
    useEffect(()=>{
        axios.get("http://localhost:1337/api/footer?populate[column][populate][link][populate]=*&populate[column][populate][image][fields][0]=name&populate[column][populate][image][fields][1]=url&populate[column][populate][heading][populate]=*&populate[column][populate][button][populate]=*&populate[bottom][populate][title][populate]=*&populate[bottom][populate][image][fields][0]=name&populate[bottom][populate][image][fields][1]=url&populate[bottom][populate][icons][populate][image][fields][0]=name&populate[bottom][populate][icons][populate][image][fields][1]=url")
        .then(res=>{
            setData(res.data.data.attributes)
          })
    },[])

    useEffect(()=>{
        console.log(data);
    },[data])
    return(
    <div className={styles.wrapper}>
        {
            data && 
            <><Column columns={data.column} />
            <Bottom data={data.bottom}></Bottom>
            </>
        }
        
    </div>)
}

export default Footer;