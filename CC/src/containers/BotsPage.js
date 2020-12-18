import React, { Component } from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends Component {
  state = {
    yourBotArmy: [],
    botCollection: []
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
      .then(resp => resp.json())
      .then(bots => this.setState({botCollection: bots}))
  }

  addBotToArmy = (bot) => {
    if (this.state.yourBotArmy.includes(bot)) {
      return console.log('this bot is already in your army')
    }
    const updatedArmy = [...this.state.yourBotArmy, bot]
    this.setState({yourBotArmy: updatedArmy})
  }

  removeBotFromYourArmy = (bot) => {
    const updatedBotArmy = this.state.yourBotArmy.filter(b => b.id !== bot.id)
    this.setState({
      yourBotArmy: updatedBotArmy
    })
  }

  removeBot = (id) => {
    fetch(`http://localhost:6001/bots/${id}`,{
      method:"DELETE",
      headers: {'Content-Type':'application/json'}
    })
      .then(resp => resp.json())
      .then(console.log('Bot has been deleted from the server'))
    const updatedBots = this.state.botCollection.filter(b => b.id !== id)
    const updatedBotArmy = this.state.yourBotArmy.filter(b => b.id !== id)
    this.setState({
      botCollection: updatedBots,
      yourBotArmy: updatedBotArmy
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy 
            yourBotArmy={this.state.yourBotArmy}
            removeBotFromYourArmy={this.removeBotFromYourArmy} 
            removeBotForever={this.removeBot} />

        <BotCollection 
            bots={this.state.botCollection} 
            addBotToArmy={this.addBotToArmy} />
      </div>
    );
      
  }
}

export default BotsPage;
