import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  renderBots() {
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick} handleDelete={this.props.handleDelete} />
    })
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
