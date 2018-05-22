import React from 'react';
import TeamStats from './teamStats.jsx'
import PlayerPic from './playerPic.jsx'
import PlayerSelect from './playerSelect.jsx';

const Team = (props) => {
return (
  <section className='teamContainer'>
    <div>
    <div className='team'>
      {props.team.map((player, index) => <PlayerPic player={player} key={index} />)}
    </div>
    </div>
    <TeamStats team={props.team} />
  </section>
)
}

export default Team;