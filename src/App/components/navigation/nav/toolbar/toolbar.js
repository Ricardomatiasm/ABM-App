import React from'react';
import './toolbar.css';
import ToggleButton from '../sideDrawer/toggleButton';

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
                            <li><a href="/">Cliente/Vendedor</a></li>
                            <li><a href="/">Importar/Exportar</a></li>
                            <li><a href="/">Nuevo Documento</a></li>
                        </ul>
                    </div>
    </nav>
</header>
);

export default Toolbar;