import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from "./Components/redux/store";

import { render } from 'react-dom';

import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
const app = (<Provider store={store} >
   <App />
  
</Provider>)

root.render(app);





