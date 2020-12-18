import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

const API = 'http://localhost:6001/bots'

class App extends Component {
  state = {
    allBots: [],
    myBots: [],
  }

  handleAdd = (bot) => {
    if (this.state.myBots.includes(bot)) {
      
    } else {
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    }
  }

  handleRemove = (bot) => {
    let bots = this.state.myBots.filter(bots => {
      return bots !== bot
    })
    this.setState({
      myBots: bots
    })
  }

  handleDelete = (bot) => {
    const reqMethod = {
      method: 'DELETE'
    }
    fetch(`${API}/${bot.id}`, reqMethod)
    let bots = this.state.allBots.filter(bots => {
      return bots !== bot
    })
    this.setState({
      allBots: bots
    })
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({
      allBots: data
    }))
  }

  render() {
    return (
      <div className="App">
        <BotsPage 
          bots={this.state.allBots}
          myBots={this.state.myBots}
          handleAdd={this.handleAdd} 
          handleRemove={this.handleRemove} 
          handleDelete={this.handleDelete} 
        />
      </div>
    );
  }
}

export default App;
