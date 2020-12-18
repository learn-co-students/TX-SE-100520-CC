import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {this.props.bots.map(bot => {
          return <BotCard bot={bot} key={bot.name} manageBot={this.props.enlistBot}/>
          })}
        </div>
      </div>
    );
  }
}

export default BotCollection;
