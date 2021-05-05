import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// Custom-made reducers
import reducers from './reducers'

// Custom-made components
import App from './App'

// provide a global state accessible from within the app
const store = createStore(reducers, compose(applyMiddleware(thunk)))

// Render the app component connecting to the div that has an id of 'root'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)
