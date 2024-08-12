import React, { useState } from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

  function handleAddClick(){
    console.log(bot);
    if(!botArmy.some((soldier)=>soldier.id===bot.id)){
      handleBotArmy([...botArmy,bot])
      console.log(botArmy);
      
    }
    else{
      alert("BOT IS ALREADY ADDED")
    }
    
  }
  function deletebot(){
    fetch(`http://localhost:8002/bots/${bot.id}`,{
      method:"DELETE",
      headers:{
        "content-type":"application/json"
      }
        
      
    })
    .then (res=>{
  }
    return (

    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        // onClick={()=>{
        //   handleClick(bot)}
        // }
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini green button"
                onClick={handleAddClick}
                >
              ADD
              </button>

              <button
                className="ui mini red button"
                onClick={deletebot}
                >
              DELETE
              </button>

            </div>
          </span>
        </div>
      </div>
    </div>
  )
  ;
}

export default BotCard;
