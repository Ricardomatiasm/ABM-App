import React from 'react';
import { render } from 'react-dom';
import App from './src/App/app';
import { BrowserRouter as Router} from 'react-router-dom';

const app =  document.getElementById('app')


render(<Router>
            <App />
        </Router>, 
        app);