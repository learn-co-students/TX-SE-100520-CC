import React, { Component } from "react";
import BotCard from '../components/BotCard.js'

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(bot=>
            <BotCard 
            key={bot.id} 
            bot={bot} 
            manageBot={this.props.removeBots}
            deleteBot={this.props.deleteBot}/>)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
