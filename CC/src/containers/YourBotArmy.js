import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {

         // {props.botClickStatus ? null 
          // :
          // }


  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {
          this.props.selectedBots.map(bot => 
                                  <BotCard bot={bot} 
                                  key={bot.id}
                                  check={this.props.selectedBots.includes(bot)}
                                  selectBot={this.props.selectBot}
                                 
                                  deleteBot={this.props.deleteBot}
                                  />)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
