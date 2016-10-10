import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import './index.css';

// wrong way

// const appRawMarkup = ReactDOMServer.renderToString(<App helpMessage='To get started, edit <code>src/App.js</code> and save to reload.' />);
//
// console.log('appRawMarkup', appRawMarkup);
//
// document.getElementById('root').innerHTML = appRawMarkup;

// correct way with VirtualDom optimization

ReactDOM.render(
  <App helpMessage='To get started, edit <code>src/App.js</code> and save to reload.' />,
  document.getElementById('root')
);
