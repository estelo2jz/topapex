import React, { Component } from 'react';
import './player.css';

export default class Players extends Component {
  constructor() {
    super();

    this.state = {
      players: []
    }
  }
  componentDidMount() {
    fetch('/api/players')
      .then(res => res.json())
      .then(players => this.setState({ players }, () => console.log('Players fetcted...', players)));
  }
  render() {
    return (
      <div>
        <div>
          <h2>Top Player Rankings For Apex Legends</h2>
          <div>
            {this.state.players.map(player =>
              <div>
                <div className="container-flex" key={player.id}>
                  <div className="container-id">
                    <p>{player.id}</p>
                  </div>
                  <div className="container-tag">
                    <p>{player.gamerTag}</p> 
                  </div>
                  <div className="container-name">
                    <p>{player.playerName} </p>
                  </div>
                  <div className="container-total">
                    <p>$ {player.playerTotal} </p>
                  </div>
                  <div className="container-overall">
                    <p>$ {player.playerOverall}</p> 
                  </div>
                  <div className="container-percent">
                    <p>{player.percentTotal} %</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
