import React, { PureComponent } from 'react'

export default class AddTodo extends PureComponent {
  render() {
    return (
      <form style={{display: 'flex'}}>
          <input 
            type='text'
            name='title'
            placeholder='Add Todos...'
            style={{flex: '10', padding: '5px'}}
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
