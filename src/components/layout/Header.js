//this is a functional component, so it doesn't have any state
//it also doesn't use the word render() but just a return statement
import React from 'react'

//importing the Link element to navigate
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header style={headerStyle}>
          <h1>TodoList</h1>
          <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
      </header>
    </div>
  )
}

const headerStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
}
export default Header;
