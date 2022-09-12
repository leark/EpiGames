import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

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
      <ReusableForm
      formSubmissionHandler={handleNewGameFormSubmission}
      buttonText='Add Game'/>
      
    
    </React.Fragment>
  );
}

NewGameForm.propTypes = {
  onNewGameCreation: PropTypes.func,
};

export default NewGameForm;
