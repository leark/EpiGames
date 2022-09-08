import React from "react";
import PropTypes from "prop-types";

function GameDetail(props) {
  const { game } = props;

  return (
    <React.Fragment>
      <h3>Game Detail</h3>
      <h4>Title: {game.title}</h4>
      <img src={game.img} width ='300px' alt={game.title} />
      <h5>Rating {game.rating}</h5>
      <p>$ {game.price}</p>
      <p>Platforms: {game.platforms}</p>
      <hr />
    </React.Fragment>
  );
}

GameDetail.propTypes = {
  game: PropTypes.object
};

export default GameDetail;