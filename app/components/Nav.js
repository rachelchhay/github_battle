var React = require('react');
// Use if you just want an anchor
// var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'>
          Popular
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
