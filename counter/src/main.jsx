import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './counter/app.jsx'
import { Provider } from 'react-redux'
import {store} from './counter/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
