import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import HeroSection from './components/heroSection/heroSection';
import CardsSection from './components/cardsSection/wrapper';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
function App() {
  const [data , setData] = useState(null)
  const [cards , setCards] = useState(null)
  const [heroSection , setHero] = useState(null)
  const [tabs , setTabs] = useState(null)
  useEffect(()=>{
    axios.get("http://localhost:1337/api/landing-pages?populate[heroSection][populate][image][fields][0]=name&populate[heroSection][populate][image][fields][1]=url&populate[tabsRow][populate][0]=tabPill&populate[cards][populate][card][populate][image][fields][0]=name&populate[cards][populate][card][populate][image][fields][1]=url")
    .then(res=>{
      setData(res.data.data[0].attributes)
    })
  },[])

  useEffect(()=>{
    if(data){
      setCards(data.cards.card)
      setHero(data.heroSection)
      setTabs(data.tabsRow.tabPill)
    }
   
  },[data])
  return (
    <div className='wrapper'>
      <NavBar />
      {heroSection && <HeroSection data={heroSection} />}
      {tabs && cards && <CardsSection tabs={tabs} cards={cards}/>}
      <Footer />
    </div>
  );
}

export default App;
