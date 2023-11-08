import styles from "./bottom.module.css"

const Bottom = ({ data }) => {
    return (
        <div className={styles.wrapper}>
            {
                data.map((row, i) => (
                    <div key={i} className={styles.row}>
                        <div className={`${styles.column} ${styles.flex}`}>
                       <div className={styles.column}>
                            <p className={styles.content}>{row.title}</p>
                        </div>
                        {
                        row.image.data && 
                        <img className={styles.logo} key={i} src={`http://localhost:1337${row.image.data?.attributes.url}`} />
                       }
                       </div><div className={styles.column}>
                       {
                        row.icons.length>0 && 
                            row.icons.map((icon,i)=>(
                                <img className={styles.icon} key={i} src={`http://localhost:1337${icon.image.data?.attributes.url}`} />
                            ))
                       }
                       </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Bottom;