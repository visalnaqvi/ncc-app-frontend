import { useEffect, useState } from "react";
import Cards from "./cards/cards";
import Tabs from "./tabs/tabs";
import styles from "./wrapper.module.css"

import ImageSlideShow from "./imageSlideShow/imageSlideShow";
const CardsSection = ({tabs , cards})=>{
    const [selectedCards , setSelectedCards] = useState(cards)
    const [activeCard , setActiveCard] = useState(null);
    const [activeCardIndex , setActiveCardIndex] = useState(null);
   const handleTabClick = (value)=>{
    if(value=="all"){
        setSelectedCards(cards)
        return;
    }
        let newCards = cards.filter(c => c.key == value)
        setSelectedCards(newCards)
   }

   const handleCardClick = (i)=>{
    if(i>=0 && i<selectedCards.length){
        setActiveCardIndex(i)
        setActiveCard(selectedCards[i]);
    }
  
   }

   const hideImage = ()=>{
    setActiveCard(null);
   }
    return (
        <div className={styles.wrapper}>
            {activeCard && <ImageSlideShow hideImage={hideImage} activeCard={activeCard} activeCardIndex={activeCardIndex} handleCardClick={handleCardClick}/>}
            <Tabs tabs={tabs} onTabClick = {handleTabClick}/>
            {selectedCards && <Cards handleClick={handleCardClick} data={selectedCards} />}
        </div>
    )
}

export default CardsSection;