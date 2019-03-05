import React, { Component } from 'react';
import TodosItem from './TodosItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  //mapping my props and assigning key to all of them. then i am passing the props to the TodosItem component. 
  //then i am receiving the prop called markComplete from TodosItem component, and i send it back to app
  render() {
    return this.props.todos.map(todo => (
        <TodosItem key={ todo.id } todo={ todo } markComplete ={ this.props.markComplete } delTodo={this.props.delTodo}/>
    ));
  }
}
//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;