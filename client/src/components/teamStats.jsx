import React from 'react';

const TeamStats = (props) => {
  
    const totalStats = (stat) => {
      let accumulator = 0;
      for (let i in props.team) {
        if(props.team[i]) {
          accumulator += props.team[i].ratings[0][stat];
        }
      }
      return Math.floor(accumulator / 5)
    }

    const statRunner = (indicies) => {
      return Math.floor(indicies.map(idx => totalStats(idx)).reduce((acc, val) => acc + val) / indicies.length);
    }

    return (
        <footer className='stats'>
          <h3> Physical: {statRunner(['hgt', 'stre', 'spd', 'jmp', 'endu'])} </h3>
          <h3> Offense: {statRunner(['ins', 'dnk', 'ft', 'fg', 'tp', 'oiq', 'pss'])} </h3>
          <h3> Defense: {statRunner(['diq', 'reb'])} </h3>
        </footer>
    )
}

export default TeamStats;