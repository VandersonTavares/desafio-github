import React from 'react'
import './styles.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
        <div className="nav-title bg-primary">
            <Link to="/">Github API</Link>
        </div>
  )
}

export default Navbar