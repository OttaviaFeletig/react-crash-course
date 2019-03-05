import React from 'react';
import ReactDOM from 'react-dom';
 
import App from './App';
import * as serviceWorker from './serviceWorker';

//everything in the app gets rendered here
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
