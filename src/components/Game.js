import React from 'react';
import PropTypes from 'prop-types';


function Game(props){
  const gameStyles = {
    fontFamily: 'sans-serif',
    margin: '10px',
    padding: '5px',
    textAlign: 'left'
  }

  return (
    <React.Fragment>
      <div style={gameStyles} onClick = {() => props.whenGameClicked(props.id)}>
        <img src={props.img} alt={props.title} width='230px'/>
        <h2>{props.title}</h2>
        <h4>Rating <span role='img'>⭐</span> {props.rating}</h4>
        <p>$ {props.price}</p>
        <p>Platforms: {props.platforms}</p>
        {/* <button type='button' onClick='' className=''>Update</button>
        <button type='button' onClick='' className=''>Delete</button> */}
      </div>
    </React.Fragment>
  );
}

Game.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  featured: PropTypes.bool,
  platforms: PropTypes.string,
  id: PropTypes.string,
  whenGameClicked: PropTypes.func,
};

export default Game;