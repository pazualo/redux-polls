import React from 'react'
import Img from '../github.svg'

import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">
            Add Poll
          </NavLink>
        </li>
        <li>
          <a
            href={'https://github.com/pazualo'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="20px" src={Img} alt="GitHub Logo" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
