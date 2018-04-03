import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux' // get
import { Provider } from 'react-redux' // get
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
