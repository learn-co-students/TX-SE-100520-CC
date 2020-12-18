import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots:

          {this.props.allBots.map(bot => <BotCard handleMyBots={this.props.handleMyBots} bot={bot} handleBotDelete={this.props.handleBotDelete}/>)}
          
        </div>
      </div>
    );
  }
}

export default BotCollection;
