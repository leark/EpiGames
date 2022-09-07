import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewGameForm(props) {
  function handleNewGameFormSubmission(event) {
    event.preventDefault();
    props.onNewGameCreation({
      title: event.target.title.value,
      img: event.target.img.value,
      rating: parseInt(event.target.rating.value),
      price: parseInt(event.target.price.value),
      featured: event.target.featured.value,
      platforms: event.target.platforms.value,
      id: v4(),
    });
    console.log('You created a new game: ' + event.target.title.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewGameFormSubmission}>
        <input type='text' name='title' />
        <input type='text' name='img' />
        <input type='number' name='rating' />
        <input type='number' name='price' />
        <input type='boolean' name='featured' />
        <input type='text' name='platforms' />
        <button type='submit'>Add Game</button>
      </form>
    </React.Fragment>
  );
}

NewGameForm.propTypes = {
  onNewGameCreation: PropTypes.func,
};

export default NewGameForm;
