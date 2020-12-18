import React, { Component } from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
let botsUrl = "http://localhost:6001/bots/"

class BotsPage extends Component {
  state = {
    allBots: [],
    myBots: []
  }

  componentDidMount = () => {
    fetch(botsUrl)
    .then(resp => resp.json())
    .then(allBots => this.setState({allBots}))
  }

  enlistBot = (newBot) => { 
    if (!this.state.myBots.find(bot => bot === newBot)) {
      this.setState({myBots: [...this.state.myBots, newBot]
      })
    }
  }

  releaseBot = (minusBot) => {
    this.setState({
      myBots: this.state.myBots.filter(bot => bot !== minusBot)
    })
  }

  // frontEndDischarge = (botId) => {
  //   let newBotCollection = this.state.allBots.filter(bot => bot.id != botId)
  //   this.setState({allBots:newBotCollection})
  // }

  // backEndDischarge = (botId) => {
  //   let deleteOption = {
  //     method: "DELETE"
  //   }

  //   fetch(botsUrl+botId, deleteOption)
  //   .then(this.frontEndDischarge(botId))
  // }
  

  render() {
    return <div>
      <YourBotArmy
        bots={this.state.myBots}
        releaseBot = {this.releaseBot}
        backEndDischarge = {this.backEndDischarge} 
      />

      <BotCollection 
        bots={this.state.allBots} 
        enlistBot = {this.enlistBot}
      /> 
      </div>;
  }
}

export default BotsPage;
