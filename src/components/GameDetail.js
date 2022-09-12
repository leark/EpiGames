import React from "react";
import PropTypes from "prop-types";

function GameDetail(props) {
  const { game, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>Game Detail</h3>
      <h4>Title: {game.title}</h4>
      <img src={game.img} width ='300px' alt={game.title} />
      <h5>Rating {game.rating}</h5>
      <p>$ {game.price}</p>
      <p>Platforms: {game.platforms}</p>
      <button onClick = { props.onClickingEdit }> Update Game </button>
      <button onClick={()=> onClickingDelete(game.id)}>Delete Game</button>

      <hr />
    </React.Fragment>
  );
}

GameDetail.propTypes = {
  game: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default GameDetail;