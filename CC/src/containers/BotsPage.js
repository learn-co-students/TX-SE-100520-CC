import React, { Component } from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
// import BotSpecs from '../components/BotSpecs'
import SortBar from "../components/SortBar";

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    allBots: [],
    myBots: [],
    specBot: {},
    botFilter: "",
    secondBotFilter: "",
    preFilterBots: []
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        ...this.state,
        allBots: data,
        preFilterBots: data
      })
    })
  }

  addBotToMyBots = (bot) => {
    if (this.state.myBots.find(setBot => setBot.bot_class === bot.bot_class)){
      console.log("Cannot add more than one bot of each class")
    } else {
      let newAllBots = this.state.allBots.filter(setBot => setBot.id !== bot.id)
      this.setState({
        ...this.state,
        myBots: [...this.state.myBots, bot],
        allBots: newAllBots
      })
    }

  }

  removeBotFromMyBots = (bot) => {
    let newMyBots = this.state.myBots.filter(setBot => setBot.id !== bot.id)
    this.setState({
      ...this.state,
      myBots: newMyBots,
      allBots: [bot, ...this.state.allBots]
    })
  }

  removeBotFromAllBots = (bot) => {
    let newMyBots = this.state.myBots.filter(setBot => setBot.id !== bot.id)
    let newAllBots = this.state.allBots.filter(setBot => setBot.id !== bot.id)
    this.setState({
      ...this.state,
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

  // viewBotSpecs = (bot) => {

  // }

  sortBy = (keyName) => {
    let newAllBots = this.state.allBots.sort((a, b) => a[keyName] - b[keyName])
    this.setState({
      ...this.state,
      allBots: newAllBots
    })
  }

  changeBotFilter = (filter) => {
    // The way to apply multpile filters at the same time would be to change preFilter bots in the line below this into "allBots", but no bot has more than one class
    let newAllBots = this.state.preFilterBots.filter(setBot => setBot.bot_class === filter)
    this.setState({
      ...this.state,
      allBots: newAllBots,
      botFilter: filter
    })
  }

  secondaryBotFilter = (filter) => {
    let newAllBots = this.state.preFilterBots.filter(setBot => setBot.bot_class === filter)
    this.setState({
      ...this.state,
      allBots: [...newAllBots, ...this.state.allBots],
      botFilter: filter
    })
  }

  render() {
    return <div>
      <YourBotArmy myBots={this.state.myBots} removeBotFromArmy={this.removeBotFromMyBots} deleteBot={this.removeBotFromAllBots}/>
      <SortBar sortBy={this.sortBy} botFilter={this.state.botFilter} changeFilter={this.changeBotFilter} secondFilter={this.secondaryBotFilter}/>
      <BotCollection bots={this.state.allBots} addBotToArmy={this.addBotToMyBots} deleteBot={this.removeBotFromAllBots}/>
      {/* <BotSpecs bot={this.state.specBot}/> */}
    </div>;
  }
}

export default BotsPage;
