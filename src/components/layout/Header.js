//this is a functional component, so it doesn't have any state
//it also doesn't use the word render() but just a return statement
import React from 'react'

function Header() {
  return (
    <div>
      <header style={headerStyle}>
          <h1>TodoList</h1>
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
export default Header;
