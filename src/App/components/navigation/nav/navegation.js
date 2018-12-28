import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Inicio from '../button/inicio';
import Document from '../button/document';
import NewDoc from '../button/newDocument';

class Navegation extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route path="/document" component={Document} />
                <Route path="/newDocument" component={NewDoc} />
            </Switch>
        );
    }
}

export default Navegation;