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
        <Link to="/"> Cliente </Link>
        </li>
        <li>
        <Link to="/vendor"> Vendedor </Link>
        </li>
        <li>
        <Link to="/import"> Importar </Link>
        </li>
        <li>
        <Link to="/export"> Exportar </Link>
        </li>
        <li>
        <Link to="/newDocument"> Nuevo Documento </Link>
        </li>
        </ul>
    </nav>
)};

export default SideDrawer