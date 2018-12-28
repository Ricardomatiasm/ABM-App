import React, { Component } from 'react';
import Grid from '../../grid/grid';
import Search from '../../search/search';
import Filter from '../../filter/filter';

class Inicio extends Component {
    render() {
        return(
            <div style={{marginTop: "64px"}}>
            <Filter />
            <Search />
            <Grid />
            </div>
        );
    }
 }

 export default Inicio;