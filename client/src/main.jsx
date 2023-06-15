import React from 'react'
import ReactDOM from 'react-dom/client' 
import { BrowserRouter  as Router} from 'react-router-dom'
import {AnimatePresence} from "framer-motion"
import App from './App'
import './index.css'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import myReducers from './context/reducers';

const myStore = createStore (myReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AnimatePresence>
        <Provider store={myStore}>
          
        <App />
        </Provider>
      </AnimatePresence>
    </Router>
  </React.StrictMode>,
)
