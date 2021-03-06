import React, { Component } from 'react';
import Toolbar from './components/navigation/nav/toolbar/toolbar';
import SideDrawer from './components/navigation/nav/sideDrawer/sideDrawer';
import BackDrop from './components/navigation/nav/backDrop/backDrop';
import Navegation from './components/navigation/nav/navegation';

class App extends Component{
    state = {
        sideDrawerOpen: false
      };
    
      drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
      };
    
      backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
      };
    
    render(){
        let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
                    return (
                    <div style={{height: '100%'}}>
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    <Navegation />
                    {backdrop}
                    
                    <main style={{marginTop: "64px"}}>
                        
                    </main>
                </div>
                
        )
    }
}
export default App;