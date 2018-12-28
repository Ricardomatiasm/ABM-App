import React from 'react';
import './sideDrawer.css';
import { Link } from 'react-router-dom';

    const SideDrawer = props => {
        let drawerClasses = 'Side-Drawer';
        if (props.show) {
          drawerClasses = 'Side-Drawer open';
        }
return(
        <nav className={drawerClasses}>
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
    </nav>
)};

export default SideDrawer