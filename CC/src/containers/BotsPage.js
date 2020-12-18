import React, { Component } from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    bots: [],
    selectedBots: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
    .then(r => r.json())
    .then(bots => this.setState({bots}))
  }

  selectBot = (bot) => {
    if(this.state.selectedBots.includes(bot)) {
      let newSelectedBots = this.state.selectedBots.filter(b => b.id !== bot.id)
      this.setState({
        selectedBots: newSelectedBots
      })
    }
    else{
      this.setState({
      selectedBots: [...this.state.selectedBots, bot]
      })
    }
  }

  deleteBot = (deletedBot) => {
    let newBots = this.state.bots.filter(bot => bot.id !== deletedBot.id)
    this.setState({
    bots: newBots
  })
    fetch(`http://localhost:6001/bots/${deletedBot.id}`, {
      method: 'DELETE'
    })
  
  }

  render() {

    // console.log(this.state.bots)
    return (

    <div> 

        <YourBotArmy   selectedBots={this.state.selectedBots}
                       clickBot={this.clickBot}
                       selectBot={this.selectBot}
                       deleteBot={this.deleteBot}
                      />
      
        <BotCollection bots={this.state.bots}
                         selectBot={this.selectBot}
                         selectedBots={this.state.selectedBots}
                     
                         botClickStatus={this.state.clicked}
                         deleteBot={this.deleteBot}
                         />

    </div>
    );
  }
}

export default BotsPage;
