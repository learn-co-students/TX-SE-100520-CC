import React, { Component } from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'


class BotsPage extends Component {
  //start here with your code for step one
  state = {
    allBots: [],
    myBots: []
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        allBots: data
      })
    })
  }

  addBotToMyBots = (bot) => {
    if (this.state.myBots.find(setBot => setBot.id === bot.id)){
      console.log("Cannot add same bot to army more than once")
    } else {
      this.setState({
        ...this.state,
        myBots: [...this.state.myBots, bot]
      })
    }

  }

  removeBotFromMyBots = (bot) => {
    let newMyBots = this.state.myBots.filter(setBot => setBot.id !== bot.id)
    this.setState({
      ...this.state,
      myBots: newMyBots
    })
  }

  removeBotFromAllBots = (bot) => {
    let newMyBots = this.state.myBots.filter(setBot => setBot.id !== bot.id)
    let newAllBots = this.state.allBots.filter(setBot => setBot.id !== bot.id)
    this.setState({
      allBots: newAllBots,
      myBots: newMyBots
    })
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    // .then(res => res.json())
    // .then(data => console.log(data))
  }

  render() {
    return <div>
      <YourBotArmy myBots={this.state.myBots} removeBotFromArmy={this.removeBotFromMyBots} deleteBot={this.removeBotFromAllBots}/>
      <BotCollection bots={this.state.allBots} addBotToArmy={this.addBotToMyBots} deleteBot={this.removeBotFromAllBots}/>
    </div>;
  }
}

export default BotsPage;
