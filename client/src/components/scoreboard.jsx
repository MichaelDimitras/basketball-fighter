import React from 'react';

export default class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamOneScore: 0,
      teamTwoScore: 0,
      quarter: 0,
      displayText: '',
    };

    this.beginFight = this.beginFight.bind(this);
    this.processFight = this.processFight.bind(this);
    this.processQuarter = this.processQuarter.bind(this);
    this.getThreeIndicies = this.getThreeIndicies.bind(this);
  }

  beginFight() {
    this.setState({quarter: 1, displayText: 'The Battle Begins'}, () => {setTimeout(() => {this.processFight(1)}, 1000)});
  }

  processFight(quarter) {

    const increment =  () => {setTimeout(() => {this.processFight(quarter + 1)}, 500)};

    if (quarter <= 4) {
      
      if (quarter % 2 !== 0) {
        this.setState({quarter: quarter}, 
          this.processQuarter(this.props.teamOne, this.props.teamTwo, 'teamOneScore', increment))
      } else {
        this.setState({quarter: quarter}, 
          this.processQuarter(this.props.teamTwo, this.props.teamOne, 'teamTwoScore', increment))
      }
    }
  }

  processQuarter(attackTeam, defendTeam, scoreToIncrement, cb) {

    const context = this;
    let attackers = this.getThreeIndicies(attackTeam);
    let defenders = this.getThreeIndicies(defendTeam);

    const processTurn = function(turn = 0) {
      if (turn < 3) {
        let turnScore = getTurnScore(attackers[turn], defenders[turn]);
        context.setState({[scoreToIncrement] : context.state[scoreToIncrement] + turnScore, 
                          displayText: `${attackTeam[turn].name} attacked ${defendTeam[turn].name} for ${turnScore} damage`}, 
                          () => {setTimeout(() => {processTurn(turn + 1)}, 2000)})
      } else {
        cb();
      }
    }

    const getTurnScore = function(attacker, defender) {

      const skills = ["hgt","stre","spd","jmp","endu","ins","dnk","ft","fg","tp","diq","oiq","drb","pss","reb"];
      let chosenSkills = context.getThreeIndicies(skills);
      let turnScore = 0;

      for (let i = 0; i < chosenSkills.length; i++) {
        if (attacker.ratings[0][chosenSkills[i]] - defender.ratings[0][chosenSkills[i]] > 0) {
          turnScore += attacker.ratings[0][chosenSkills[i]] - defender.ratings[0][chosenSkills[i]];
        }
      }
      return turnScore;
    }

    processTurn();
  }

  getThreeIndicies(arr) {
    let availableIndicies = Array.apply(null, {length: arr.length}).map(Number.call, Number);
    let selectedIndicies = [];

    for (let i = 0; i < 3; i++) {
      selectedIndicies.push(availableIndicies.splice(Math.floor(Math.random() * availableIndicies.length), 1)[0]);
    }

    return selectedIndicies.map(item => arr[item]);
  }

  render() {
    return (
      <div className='scoreboardContainer'>
        <div className='scoreboardGrid'>
        <button onClick={this.beginFight}>FIGHT</button>
          <div className='score teamOneScore' >
            <h2>Team One</h2>
            <h1 className='scoreNumber'>{this.state.teamOneScore}</h1>
          </div>
          <div className='quarter'>
            <h2>Quarter</h2>
            <h1 className='scoreNumber'>{this.state.quarter}</h1>
          </div> 
          <div className='score teamTwoScore' >
            <h2>Team Two</h2>
            <h1 className='scoreNumber'>{this.state.teamTwoScore}</h1>
          </div>
        </div>
        <h3>{this.state.displayText}</h3>
      </div>
    )
  }
}