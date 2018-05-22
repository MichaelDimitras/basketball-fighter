import React from 'react';
import Popup from "reactjs-popup";
import PlayerSelectItem from './playerSelectItem.jsx'
import PlayerPic from './playerPic.jsx'
  
const PlayerSelect = (props) => {
return (
  <Popup
    trigger={<div className='button'> Create Team {props.teamName} </div>}
    modal
    closeOnDocumentClick
  >

    <section className='selectContainer'>
      <div>
        {props.team.map((player, index) => 
          <PlayerPic player={player} 
                     key={index} 
                     id={index}
                     removePlayer={props.removePlayer} 
                     context={'selector'} 
                     teamName={props.teamName}/>)}
      </div>
      <div className='selectItemsContainer'>
        {window.players.map((player, idx) => 
          <PlayerSelectItem addPlayer={props.addPlayer}
                            team={props.team} 
                            teamName={props.teamName} 
                            player={player} 
                            id={idx} 
                            key={idx} />)}
      </div>
    </section>
  </Popup>
)
}

export default PlayerSelect;