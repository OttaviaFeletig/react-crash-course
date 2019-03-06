import React from 'react'

export default function About() {
  return (
    //React.Fragment is like a ghost element. You always need to wrap your content into something but maybe you don't want it to be a div
    <React.Fragment>
        <h1>About</h1>
        <p>This is the about page of a React app from a crash course.</p>
    </React.Fragment>
  )
}
