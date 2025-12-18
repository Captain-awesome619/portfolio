import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from "./Context"

ReactDOM.render(
<ThemeProvider>
     
    <div>
        
<App/>
</div>
</ThemeProvider>,

document.getElementById("root"));