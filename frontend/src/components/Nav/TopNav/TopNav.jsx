import React from 'react';
import { Link } from 'react-router-dom'
import './TopNav.scss';
import Logo from "../../../data/Group.png"

//import { Link } from 'react-router-dom';


function Nav(props) {

  return(
    <>
      <nav className="topBar">
        <ul>

          <li>
            <Link to="/" className='li-logo'>
              <img  src={Logo} className="img-logo" />
              SportSee
            </Link>
          </li>

          <li>
            <Link to="/">
              Accueil
            </Link>
          </li>

          <li>
            <Link to="/">
              Profil
            </Link>
          </li>

          <li>
            <Link to="/">
              Réglage
            </Link>
          </li>

          <li>
            <Link to="/">
              Communauté
            </Link>
          </li>

        </ul>
      </nav>
    </>
  )
}

export default Nav
