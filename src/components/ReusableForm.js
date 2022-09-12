import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit' className='btn btn-success'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
