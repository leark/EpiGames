import React from 'react';
import Game from './Game';
import PropTypes from 'prop-types';

function GameList(props) {
  const gameListStyles = {
    margin: '10px',
    padding: '10px',
  }
  const cardStyles = {
    margin: '10px',
  }
  return (
    <React.Fragment>
      <br />
      <div className='row'>
        <div style={gameListStyles}>
        {props.gameList.map((game) => (
            <div className='card' stle={cardStyles}>
              <Game
                title={game.title}
                rating={game.rating}
                price={game.price}
                platforms={game.platforms}
                key={game.id}
              />
          </div>
        ))}
        </div>
      </div>
    </React.Fragment>
  );
}

GameList.propTypes = {
  gameList: PropTypes.array,
};

export default GameList;
