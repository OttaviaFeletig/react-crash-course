import React, { Component } from 'react';

//importing router
import { BrowserRouter as Router, Route } from 'react-router-dom';

//importing components
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {

  //creating state (object with any data we want)
  state = {
    todos: []  
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      );
  }

  //Add Todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] })); 
  }

  //get request only after the app component is mounted
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then (res => this.setState({ todos: res.data }))
  }

  render() {

    // how to access the state
    console.log(this.state.todos)

    return (
      //taking the router
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            {/* defining the route and rendering different components.
            Using the exact keyword to specify that it should not render that all the time it meets a / and maybe afterwards a word
            but only when it meets exactly only the /. */}
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                {/* passing datas through props (todos) and receiving prop called markComplete which is gonna run everything what we write in the {}
                inside the {} we run a method markComplete */}
                <Todos todos={ this.state.todos } markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
