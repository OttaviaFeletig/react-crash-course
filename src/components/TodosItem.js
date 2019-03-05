import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodosItem extends Component {

    //in this method we can add CSS property with camelCase
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {

        //destructuring (accessing the props and saving the single property of the object)
        const { id, title } = this.props.todo;

        return (
            //changing style with a method
            <div style={ this.getStyle() }>     
                <p>
                    {/* creating checkBox and defining a function change where i pass my props which now include a new one called
                     markComplete. i also bind it so that i can pass back my id */}
                    <input type='checkBox' onChange={this.props.markComplete.bind(this, id)} /> {' '} 
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes (good practice??)
TodosItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'red',
    color: 'white',
    padding: '5px 9px',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer',
    border: 'none'
}

