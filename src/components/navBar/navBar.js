import { useEffect, useState } from "react";
import styles from "./navBar.module.css"
import axios from "axios";
import {AiFillHeart} from "react-icons/ai"
import {FiMenu} from "react-icons/fi";
import {RxCross2} from "react-icons/rx";
const NavBar = ()=>{
    const [data , setData] = useState(null);
    const [isNavVisible , setIsNavVisible] = useState();
    useEffect(()=>{
        
        axios.get("http://localhost:1337/api/nav-bar?populate[logo][fields][0]=name&populate[logo][fields][1]=url&populate[link][populate]=*&populate[button][populate]=*")
        .then(res=>{
            setData(res.data.data.attributes)
          })
    },[])

    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
          window.removeEventListener('resize', setWindowDimensions)
        }
      }, [])

    const setWindowDimensions = ()=>{
        if(window.screen.width > 1135){
            setIsNavVisible(true);
        }else{
            setIsNavVisible(false)
        }
    }

    const toggleNav = ()=>{
        setIsNavVisible(!isNavVisible)
    }



    return(
        <>
       { data &&
        <div className={styles.navWrapper}>
         <div className={styles.img}>
                <img src={`http://localhost:1337${data.logo.data?.attributes.url}`} />
            </div>
            <div className={styles.mobileMenu}>
            {isNavVisible?<RxCross2 onClick={toggleNav}/>:<FiMenu onClick={toggleNav} />}
            </div>
           {isNavVisible && <ul className={styles.list}>
           {
            data.link.map((link,i)=>(
                <li className={styles.listItem} key={i}>{link.title}</li>
            ))
           } 
           </ul>}
           <div className={styles.btnWrapper}>
           {
            data.button.map((btn , i)=>(
                <button className={`${btn.isPrimary ? styles.primaryBtn : styles.secondaryBtn}`}>{btn.title}{btn.isPrimary && <span className={styles.icon}><AiFillHeart /></span>}</button>
            ))
           }
           </div>
        </div>}
        </>
    )
}

export default NavBar;