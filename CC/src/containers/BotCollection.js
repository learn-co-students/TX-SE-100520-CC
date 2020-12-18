import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid" id="bot-collection">
        <div className="row">
          {this.props.bots.map(bot => {return <BotCard key={bot.id} bot={bot} moveBot={this.props.addBotToArmy} deleteBot={this.props.deleteBot} />})}
        </div>
      </div>
    );
  }
}

export default BotCollection;
