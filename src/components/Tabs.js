import React ,{useState}from 'react'
import '../App.css';


function TabsC() {
    const[toggleState,setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <div>
       <div className="bloc-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}> Reliance Industries </button>
        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}> Chart </button>
        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}> Analysis </button>
        <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}> Peers </button>
        <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}> Quaters </button>
        <button className={toggleState === 6 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(6)}> Profit & Loss </button>
        <button className={toggleState === 7 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(7)}> Balance Sheet </button>
        <button className={toggleState === 8 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(8)}> Cash FLow </button>
        <button className={toggleState === 9 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(9)}> Ratios </button>
        <button className={toggleState === 10 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(10)}> Investors </button>
        <button className={toggleState === 11 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(11)}> Documents </button>

      </div>
    </div>
  )
}

export default TabsC
