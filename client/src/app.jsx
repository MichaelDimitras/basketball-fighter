import React from 'react';
import ReactDom from 'react-dom';
import Team from './components/team.jsx';
import PlayerSelect from './components/playerSelect.jsx';
import Scoreboard from './components/scoreboard.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamOne: [null, null, null, null, null],
      teamTwo: [null, null, null, null, null],
      // teamOne: window.players.slice(0,5),
      // teamTwo: window.players.slice(10,15),
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  addPlayer(id, teamName) {

    let idx = this.state[teamName].indexOf(null) 
      if (idx !== -1  &&  this.state[teamName].filter(item => item !== null && item.name === window.players[id].name).length === 0) {
        let nulls = Array.apply(null, {length: 4 - idx}).map(item => null);
        this.setState({[teamName] : this.state[teamName].slice(0, idx).concat([window.players[id]]).concat(nulls)})
      }
  }

  removePlayer(idx, teamName) {
    this.setState({[teamName] : this.state[teamName].filter((item, index) => index !== idx).concat([null])})
  }

  render() {
    return (
      <div>
        <Scoreboard teamOne={this.state.teamOne} teamTwo={this.state.teamTwo} />
        <Team team={this.state.teamOne} addPlayer={this.addPlayer} removePlayer={this.removePlayer} team={this.state.teamOne} teamName='teamOne'/>
        <Team team={this.state.teamTwo} addPlayer={this.addPlayer} removePlayer={this.removePlayer} team={this.state.teamTwo} teamName='teamTwo' />
        <PlayerSelect addPlayer={this.addPlayer} removePlayer={this.removePlayer} team={this.state.teamOne} teamName='teamOne'/>
        <PlayerSelect addPlayer={this.addPlayer} removePlayer={this.removePlayer} team={this.state.teamTwo} teamName='teamTwo'/>
      </div>
    )
  }
}

ReactDom.render(React.createElement(App), document.getElementById('app'));