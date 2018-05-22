import React from 'react';
import TeamStats from './teamStats.jsx'
import PlayerPic from './playerPic.jsx'

const Team = (props) => {
return (
  
  <div className='picContainer'>
    <div>
      <img className='playerPic' 
         onClick={props.context === 'selector' ? () => props.removePlayer(props.id, props.teamName) : null}
         src={props.player ? props.player.imgURL : null} />
    </div>
    <h2>{(props.context !== 'team' && props.player) ? props.player.name.split(' ')[1] : ''}</h2>
  </div>

)
}

export default Team;