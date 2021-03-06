import React from'react';
import './toolbar.css';
import ToggleButton from '../sideDrawer/toggleButton';
import { Link } from 'react-router-dom';

const Toolbar = props => (
<header className="Toolbar">
    <nav className="Toolbar-navigation">
        <div className="Toolbar-Toggle-Button" style={{height: "100%"}}>
            <ToggleButton click={props.drawerClickHandler} />
        </div>
            <div className="Toolbar-logo"><a href="/"></a><b>SEGUROS</b>APP</div>
                <div className="spacer"></div>
                    <div className="Toolbar-item">
                        <ul>
                            <li>
                                <Link to="/"> Inicio </Link>
                            </li>
                            
                            <li>
                                <Link to="/document"> Documentos </Link>
                            </li>

                            <li>
                                <Link to="/newDocument"> Crear nuevo </Link>
                            </li>
                        </ul>
                    </div>
    </nav>
</header>
);

export default Toolbar;