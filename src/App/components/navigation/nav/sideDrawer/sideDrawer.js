import React from 'react';
import './sideDrawer.css';

    const SideDrawer = props => {
        let drawerClasses = 'Side-Drawer';
        if (props.show) {
          drawerClasses = 'Side-Drawer open';
        }
return(
        <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Cliente/Vendedor</a></li>
            <li><a href="/">Importar/Exportar</a></li>
            <li><a href="/">Nuevo Documento</a></li>
        </ul>
    </nav>
)};

export default SideDrawer