import styles from "./heroSection.module.css"

const HeroSection = ({data})=>{
    return(
        <div style={{ backgroundImage: `url(http://localhost:1337${data.image.data.attributes.url})` }} className={styles.heroSection}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.content}>{data.description}</p>
        </div>
    );
}

export default HeroSection;