import React, { Component } from 'react';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Collaboration from './Collaboration';
import Food from './Food';
import Fashion from './Fashion';
import Lifestyle from './Lifestyle';
import Contact from './Contact';
import About from './About';

class App extends Component {
  constructor(props) {
    let date = new Date();
    super(props);
    this.state = {
      collapsed: true,
      year: date.getFullYear()
    };
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className='App'>
        <Navbar color='faded' light>
          <NavbarBrand href='/' className='mr-auto' style={{ fontSize: '3em' }}> <b> Blazing Freak </b> </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar style={{ fontSize: '1.5em' }}>
              <NavItem>
                <NavLink href='/about'> <b> About </b> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/collaboration'> <b> Collaboration </b> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/food'> <b> Food </b> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/fashion'> <b> Fashion </b> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/lifestyle'> <b> Lifestyle </b> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/contact'> <b> Contact </b> </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route path='/collaboration' component={Collaboration} />
            <Route path='/food' component={Food} />
            <Route path='/fashion' component={Fashion} />
            <Route path='/lifestyle' component={Lifestyle} />
            <Route path='/contact' component={Contact} />
          </div>
        </Router>
        <footer className='footer' style={{ fontSize: '1.3em' }}>
          <span className='text-dark'> <b> Website Designed by </b>
            <u> <a className='text-dark' href='https://priyanka-portfolio.netlify.com' target='_blank' rel='noopener noreferrer'> <b> Priyanka Suresh </b> </a> </u>
            <b> &copy; {this.state.year} </b>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;