import React, { Component } from "react";
import BotCard from '../components/BotCard'


class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.myBots.map(bot => <BotCard bot={bot} handleMyBots={this.props.handleMyBots} handleBotDelete={this.props.handleBotDelete}/>)}
            
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
