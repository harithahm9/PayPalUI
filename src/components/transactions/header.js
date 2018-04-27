import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto right">
          <li class="nav-item active">
            <NavLink to="/transaction" className="nav-link" activeClassName="is-active" exact={true}>Transactions</NavLink>
          </li>
          <li class="nav-item active">
            <NavLink to="/sendmoney" className="nav-link" activeClassName="is-active" exact={true}>Final Screen</NavLink>
          </li>
        </ul>
      </div>
  </header>
)

export default Header

