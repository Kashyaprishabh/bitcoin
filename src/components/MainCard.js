import { SiBitcoinsv } from 'react-icons/si';
import { BsChevronCompactDown } from 'react-icons/bs';
import { useState } from 'react';
import GraphCard from './GraphCard';


const MainCard = () => {
  const [currentData,setCurrentData] = useState ({
    Lower: "$4.887",
    Higher: "$7.888",
    BTC: "$5.432",
    graph:[
      { name: '1 BTC', $: 5.483 },
      { name: '1.25 BTC', $: 5.483 * 1.25 },
      { name: '1.1 BTC', $: 5.483 * 1.1 },
      { name: '1.5 BTC', $: 5.483 * 1.5 },
    ],
    stroke:"#ffa500", 
    fill:"#fff6e6"
  })
  const [active,setActive] = useState ("Days")
  const [isMenuOpen,setIsMenuOpen] = useState (false)
  const data= [{
    Lower: "$4.887",
    Higher: "$7.888",
    BTC: "$5.432",
    graph:[
      { name: '1 BTC', $: 5.483 },
      { name: '1.25 BTC', $: 5.483 * 1.25 },
      { name: '1.1 BTC', $: 5.483 * 1.1 },
      { name: '1.5 BTC', $: 5.483 * 1.5 },
    ],
    stroke:"#ffa500", 
    fill:"#fff6e6"
  },{
    Lower: "$6.887",
    Higher: "$5.6788",
    BTC: "$9.432",
    graph:[
      { name: '1 BTC', $: 5.483 },
      { name: '1.25 BTC', $: 5.483 * 1.15 },
      { name: '1.1 BTC', $: 5.483 * 1.12 },
      { name: '1.5 BTC', $: 5.483 * 1.5 },
    ],
    stroke:"blue", 
    fill:"lightblue"
  },{
    Lower: "$3.887",
    Higher: "$8.888",
    BTC: "$4.432",
    graph:[
      { name: '1 BTC', $: 5.483 },
      { name: '1.25 BTC', $: 5.483 * 1.35 },
      { name: '1.1 BTC', $: 5.483 * 1.5},
      { name: '1.5 BTC', $: 5.483 * 1 },
    ],
    stroke:"green", 
    fill:"lightgreen"
  },{
    Lower: "$4.887",
    Higher: "$7.888",
    BTC: "$6.432",
    graph:[
      { name: '1 BTC', $: 5.483 },
      { name: '1.25 BTC', $: 5.483 * 1.25 },
      { name: '1.1 BTC', $: 5.483 * 1 },
      { name: '1.5 BTC', $: 5.483 * 1.2 },
    ],
    stroke:"grey", 
    fill:"lightgrey"
  }]
 
  const handleChangeData= (e) => {
    switch (e.target.id) {
      case "Days":
        setActive("Days")
        setCurrentData(data[0])
        break;
      case "Weeks":
        setActive("Weeks")
        setCurrentData(data[1])
        break;
      case "Months":
        setActive("Months")
        setCurrentData(data[2])
        break;
      case "Years":
        setActive("Years")
        setCurrentData(data[3])
        break;
    
      default:
        break;
    }
  }
  return (  
    <>
      <div className="main-card one">
        <header>
          <div>
            <SiBitcoinsv size={40} color="gold" />
            <p>Bitcoin</p>
          </div>
          <span>BTC</span>
        </header>

        <h1>3.529020 BTC</h1>

        <footer>
          <h4>$19.153 USD</h4>
          <span>- 2.32%</span>
        </footer>

        <div className="bottom-btn" id='toggleBtn' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
          <BsChevronCompactDown color="#4c5968" size={20} />
        </div>
      </div>
      
      {isMenuOpen && (<div className="menu-options one" id='menuOptions'>
        <button id='Days' onClick={handleChangeData} className= {active==="Days" && "active"}>Days</button>
        <button id='Weeks' onClick={handleChangeData} className= {active==="Weeks" && "active"}>Weeks</button>
        <button id='Months' onClick={handleChangeData} className= {active==="Months" && "active"}>Months</button>
        <button id='Years' onClick={handleChangeData} className= {active==="Years" && "active"}>Years</button>
      </div>)}
      <GraphCard currentData={currentData}/> 

    </>
  );
};
export default MainCard;

