import React, { Component } from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'
class BotsPage extends Component {

state = {
  bots:[],
  botArmy:[]
}

componentDidMount = () =>{
  fetch('http://localhost:6001/bots')
  .then(res=>res.json())
  .then(bots=> this.setState({bots: bots}))
}

addBots = (newBot) => {
  // console.log('its working')
if (!this.state.botArmy.find((bot)=> bot === newBot)){
  this.setState({botArmy:[...this.state.botArmy, newBot]})
}
}

removeBots = (removedbot) => {
  // console.log('its working')
this.setState({botArmy: this.state.botArmy.filter((bot)=> bot !== removedbot)})
}

deleteBot = (id) => {
  fetch(`http://localhost:6001/bots/${id}`,{
    method: 'DELETE'
  }
  )
  let updatedBots = [...this.state.bots].filter(bot=> bot.id !== id)
  this.setState({bots: updatedBots})
  let updatedBotArmy = [...this.state.botArmy].filter(bot=> bot.id !== id)
  this.setState({botArmy: updatedBotArmy})
}

  render() {
    return(
      <div>
      <div>{
        <YourBotArmy 
        bots={this.state.botArmy} 
        removeBots={this.removeBots}
        deleteBot={this.deleteBot} />
      }</div>,

     <div>{
      <BotCollection 
      bots={this.state.bots} 
      addBots={this.addBots} 
      deleteBot={this.deleteBot} />
    }</div>
    </div>);
  }
}

export default BotsPage;
