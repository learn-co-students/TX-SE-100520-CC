import React from "react";
import BotCard from "../components/BotCard"
// import BotSpecs from "../components/BotSpecs"

const BotCollection = (props) => {

  return (
    <div className="ui four column grid">
      <div className="row">
        {
          props.bots.map(bot => {
            return <BotCard 
                key={bot.id}
                isYourArmyCollection={false}
                bot={bot} 
                handleClick={props.addBotToArmy}/>
          })
        }
        
      </div>
    </div>
  );

}

export default BotCollection;
