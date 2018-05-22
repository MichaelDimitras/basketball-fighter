import React from 'react';
import PlayerPic from './playerPic.jsx'
  
const PlayerSelect = (props) => {
return (
  <div className='playerSelectItem' onClick={() => props.addPlayer(props.id, props.teamName)}>
    <PlayerPic player={props.player} context='team'/>
      <h2 className='playerName'>{props.player.name} </h2>
  </div>
)
}

export default PlayerSelect;