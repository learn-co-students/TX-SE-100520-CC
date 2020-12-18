import React, { Component } from "react";
import BotCollection from "./BotCollection";
//import BotCard from "../components/BotCard";
//import BotSpecs from "../components/BotSpecs";
import YourBotArmy from "./YourBotArmy";


class BotsPage extends Component {
  state={
    bots:[],
    yourBots:[]
    
  }
  
  
  componentDidMount=()=>{
    fetch('http://localhost:6001/bots')
    .then(res=>res.json())
    .then(bots=>this.setState({bots}))
  }
   addBots=(bot)=>{
   
      this.setState({yourBots:[...this.state.yourBots,bot]})
    }

    removeBot=(deletedbot)=>{
      this.setState({yourBots:this.state.yourBots.filter(bot=>bot!==deletedbot)
        

      })

    }

    deleteBot=(deletedbots)=>{
      fetch('http://localhost:6001/bots.id',{
        method:'DELETE'
      })
      .then(()=>this.setState({deleteBot:'deleted'}))
    }
  
    render() {
      return (
        
        <div>  
        <div>   
        <YourBotArmy yourBots={this.state.yourBots} removeBot={this.removeBot}/>
        <BotCollection bots= {this.state.bots} addBots={this.addBots} deleteBot={this.deleteBot}/>
        
        
        </div>
        </div>
        
    )}
      
      
      
    
    
  }
export default BotsPage;
