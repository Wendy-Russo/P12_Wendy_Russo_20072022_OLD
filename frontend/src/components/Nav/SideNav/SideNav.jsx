import React from 'react';
import { Link } from 'react-router-dom'
import './SideNav.scss';
import Weight from "../../../data/icons/weight.svg"
import Bike from "../../../data/icons/bike.svg"
import Swim from "../../../data/icons/swim.svg"
import Meditate from "../../../data/icons/meditate.svg"


/**
 * Creates a responsive side navbar with copyright and icons (see maquette)
 * @returns {object} returns the created JSX object 
 */
function SideNav() {

  return(
    <>
      <nav className="sideBar">
        <ul>

          <li>
            <Link to="/" className='nav-icon' >
              <img src={Meditate} />
            </Link>
          </li>

          <li>
            <Link to="/" className='nav-icon' >
              <img src={Swim} />
            </Link>
          </li>

          <li>
            <Link to="/" className='nav-icon' >
              <img src={Bike} />
            </Link>
          </li>

          <li>
            <Link to="/" className='nav-icon' >
              <img src={Weight} />
            </Link>
          </li>

          <li>
            <Link to="/" className='nav-copyright'>
              Copyright, SportSee 2022
            </Link>
          </li>

        </ul>
      </nav>
    </>
  )
}

export default SideNav
