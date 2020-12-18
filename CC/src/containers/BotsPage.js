import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  render() {
    return (
    <div>
      <YourBotArmy bots={this.props.myBots} handleClick={this.props.handleRemove} />
      <BotCollection bots={this.props.bots} handleClick={this.props.handleAdd} handleDelete={this.props.handleDelete} />
    </div>
    )
  }
}

export default BotsPage;
