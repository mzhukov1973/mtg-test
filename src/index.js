/*React*/
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import mainReducer                               from './reducers'
import initialState                       from './modules/initialState'
import * as serviceWorker from './serviceWorker'

let store = createStore(mainReducer, initialState)

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
     <App/>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()




