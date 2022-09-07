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
      <div className='mb-3'>
        <label for='title' className='form-label'>Title: </label>
        <input type='text' className='form-control' name='title' />
      </div>
      <div className='mb-3'>
        <label for='img' className='form-label'>Image Link: </label>
        <input type='text' className='form-control' name='img' />
      </div>
      <div className='mb-3'>
        <label for='rating' className='form-label'>Rating: </label>
        <input type='number' className='form-control' name='rating' max='5' min='0'/>
      </div>
      <div className='mb-3'>
        <label for='price' className='form-label'>Price: </label>
        <input type='number' className='form-control' name='price' />
      </div>
      <div className='mb-3'>
      <label for='featured' className='form-label'>Featured: </label>
        <input type='boolean' className='form-control' name='featured' />
      </div>
      <div className='mb-3'>
      <label for='platforms' className='form-label'>Platforms: </label>
        <input type='text' className='form-control' name='platforms' />
      </div>
        <button type='submit' className='btn btn-success'>Add It!</button>
      </form>
    </React.Fragment>
  );
}

NewGameForm.propTypes = {
  onNewGameCreation: PropTypes.func,
};

export default NewGameForm;
