import React, { Component } from 'react';

//importing components
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {

  //creating state (object with any data we want)
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]  
  }

  //Toggle complete
  //using arrow function because otherwise we change scope and we have to bind the calling method.
  //as our state is in App.js, so if we want to access it and change it we have to send back this onChange event back to where the state is
  markComplete = (id) => {
    //in build react method setState
    this.setState({
      //accessing the todos and mapping through them
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          //simply saying the new todo is gonna be equal to his opposite (if it's false change it to true and if it's true change it to false)
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  };

  //deleting the todo that gets clicked on the red x button 
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {

    // how to access the state
    console.log(this.state.todos);
    
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <AddTodo />
          {/* passing datas through props (todos) and receiving prop called markComplete which is gonna run everything what we write in the {}
          inside the {} we run a method markComplete */}
          <Todos todos={ this.state.todos } markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
