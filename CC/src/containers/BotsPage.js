import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one

  state = {
    allBots: [],
    myBots: []
  } 

  componentDidMount = () =>  {
    fetch("http://localhost:6001/bots")
    .then(resp => resp.json())
    .then(bot => this.setState({
        allBots: bot
      })
    )
  }
  
  handleBotDelete = (bot) => {
    console.log(bot.id)
    fetch(`http://localhost:6001/bots/${bot.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify()
    })
    const myRobots = this.state.myBots.filter(robot => robot.id != bot.id )
    const allRobots = this.state.allBots.filter(robot => robot.id != bot.id )

    this.setState({
      allBots: allRobots,
      myBots: myRobots
    })
  }

  handleMyBots = (bot) => {
    this.state.myBots.includes(bot) ?
    console.log('cannot add')
    : 
    this.setState({
      myBots: [...this.state.myBots, bot]
    })
  }

  handleBotRemoval = (bot) => {
    // console.log(bot)
    const myRobots = this.state.myBots.filter(robot => robot.id != bot.id )
    this.setState({
      myBots: myRobots
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} handleMyBots={this.handleBotRemoval} handleBotDelete={this.handleBotDelete}/>
        <BotCollection allBots={this.state.allBots} handleMyBots={this.handleMyBots} handleBotDelete={this.handleBotDelete} />
      </div>
    )
  }
}

export default BotsPage;
