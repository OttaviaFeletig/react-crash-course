import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

export default class AddTodo extends PureComponent {
  state = {
    title: ''
  }

  //here we are saying that if the event's target name(param in the input form) is equal to the state's name, then set is value to the target's value
  onChange = (event) => this.setState({ [event.target.name]: event.target.value });
  
  //taking the event submit and passing it to App.js, then setting the state back to nothing
  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
          <input 
            type='text'
            name='title'
            placeholder='Add Todos...'
            style={{flex: '10', padding: '5px'}}
            value={this.state.title}
            onChange={this.onChange}
          />
          <input 
            type='submit'
            name='Submit'
            className='btn'
            style={{flex: '1'}}
          />
      </form>
    )
  }
}

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}
