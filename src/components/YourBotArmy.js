import React from "react";
import BotCard from "./BotCard";
import { useRef } from "react";

function YourBotArmy({botArmy}) {
  //your bot army code here...
  
console.log(botArmy)
  return (
    <div className="ui segment inverted olive bot-army"  >
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {botArmy.map((bot)=>{
            return (
              <BotCard bot={bot}/>
            )
          })}
          Your Bot Army

        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
