import React, { Component } from "react";
import BotCard from "../components/BotCard"

const YourBotArmy = props => {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {
              props.yourBotArmy.map(bot => {
                return <BotCard 
                    key={bot.id}
                    bot={bot}
                    isYourArmyCollection={true}
                    handleClick={() => props.removeBotFromYourArmy(bot)}
                    removeBotForever={() => props.removeBotForever(bot.id)}
                    />
              })
            }
          </div>
        </div>
      </div>
    );
}

export default YourBotArmy;
