import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
<React.StrictMode>
    <BrowserRouter basename='/saivivek/'>
    <App />
    </BrowserRouter>
</React.StrictMode>,
document.getElementById('root'),
)