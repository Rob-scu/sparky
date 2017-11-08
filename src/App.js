import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Header, Menu, Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import CamperList from './modules/campers/ConnectedCamperList'
import { NavLink } from 'redux-first-router-link'

const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item
        as={NavLink}
        exact
        to="/"
        active
        activeStyle={{ color: 'red' }}
      >
        Home
      </Menu.Item>
      <Menu.Item
        as={NavLink}
        to="/alltime"
        active
        exact
        activeStyle={{ color: 'red' }}
      >
        ALL TIME
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item className="item">
          <Button as="a">Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" primary>
            Sign Up
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export class App extends Component {
  render() {
    return (
      <div className="App">
        <FixedMenu />
        {/*<p className="App-intro">*/}
        {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        <CamperList />
      </div>
    )
  }
}

export default connect(function(state) {
  return state
})(App)
