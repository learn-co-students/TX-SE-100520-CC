import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {


  

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {
          this.props.selectedBots.map(bot => 
                                  <BotCard bot={bot} 
                                  key={bot.id}
                                  selectBot={this.props.selectBot}
                                  deleteBot={this.props.deleteBot}
                     
                                  />)}
       
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
