import React, { useEffect, useState,useRef } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import Bootcontext from "./Contextcomponent";

function BotsPage() {
  //start here with your code for step one
  const [bots,setBots]=useState([])
  const [botArmy,handleBotArmy]=useState([])
  let value=React.useContext(Bootcontext)
  console.log(botArmy)

  let currentDiv=useRef(null)
  const value1={currentDiv}
  console.log(value1)

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
  .then(res=>res.json())
  .then(data=>setBots(data))
  },[])
//   function EventHandlers(bot){
//     let myIndex=botArmy.indexOf(bot)
//     if(myIndex>=0){
//     }
//     else if(value1.current===null){console.log('great now')}
//     else {
//             handleBotArmy([...botArmy,bot])


//   // return null
// }

//   }


  return (
    <div>
      <YourBotArmy botArmy={botArmy} setBots={setBots} handleBotArmy={handleBotArmy}/>
      <BotCollection bots={bots} setBots={setBots} botArmy={botArmy} handleBotArmy={handleBotArmy}/>
    </div>
  )
}

export default BotsPage;
