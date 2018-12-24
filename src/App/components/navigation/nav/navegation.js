import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Client from '../button/client';
import Export from '../button/export';
import Import from '../button/import';
import NewDoc from '../button/newDocument';
import Vendor from '../button/vendor';

class Navegation extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Client} />
                <Route path="/vendor" component={Vendor} />
                <Route path="/import" component={Import} />
                <Route path="/export" component={Export} />
                <Route path="/newDocument" component={NewDoc} />
            </Switch>
        );
    }
}

export default Navegation;