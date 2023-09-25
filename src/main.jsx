import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import httpInit from './services/http/httpInit.js'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
httpInit()

/**
 @tanstack/react-query @tanstack/react-query-devtools
 QueryCLient, QueryCLientProvider

 const queryCLient = new QueryCLieny();
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
