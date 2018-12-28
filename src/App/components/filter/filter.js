import React, { Component } from 'react';
import './filter.css';

class Filter extends Component {
    render(){
        return(
            <div className="div-select" align="center">
                <select>
                    <option>  Clientes </option>
                    <option>  Vendedores </option>
                </select>
            </div>
        )
    }
}

export default Filter;