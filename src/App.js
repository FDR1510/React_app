import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, Jumbotron, Button, MenuItem, NavDropdown, NavItem, Nav, ButtonToolbar } from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron className="App-header">
        <img className= "ninja" src="https://cdn4.iconfinder.com/data/icons/weapons-solid-icons-vol-3/72/124-512.png" width="100" height="100" />

            <h1 className="App-title">Welcome to React</h1>
          <p className="App-intro">
            This is React
          </p>
        </Jumbotron>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Brandy Brand</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Star
              </NavItem>
              <NavItem eventKey={2} href="#">
                Circle
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Sad Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Lonely Link
              </NavItem>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
      <h2 className="subheading">Hello World!</h2>
      <div className="background">

      <img src={logo} className="App-logo" alt="logo" />
      <p className="text">
      "An ocean (from Ancient Greek Ὠκεανός, transc. Okeanós, the sea of classical antiquity[1]) is a body of saline water that composes much of a planet's hydrosphere.[2] On Earth, an ocean is one of the major conventional divisions of the World Ocean. These are, in descending order by area, the Pacific, Atlantic, Indian, Southern (Antarctic), and Arctic Oceans.[3][4] The word sea is often used interchangeably with ocean. As the world ocean is the principal component of Earth's hydrosphere, it is integral to life, forms part of the carbon cycle, and influences climate and weather patterns. The world ocean is the habitat of 230,000 known species, but because much of it is unexplored, the number of species that exist in the ocean is much larger, possibly over two million.[10] The origin of Earth's oceans is unknown; oceans are thought to have formed in the Hadean eon and may have been the impetus for the emergence of life."</p>
      <ButtonToolbar className="buttonbar">
      <Button bsStyle="info">Here is a button</Button>
      <Button bsStyle="info">You can not have too many buttons</Button>
      <Button bsStyle="info">Look at all the buttons</Button>
      <Button bsStyle="info">Look at all the buttons</Button>
      </ButtonToolbar>


      </div>
      </div>


    );
  }
}

export default App;
