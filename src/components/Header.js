import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';
import github from '../assets/images/github.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <p>An open source podcast player for <br/>
         iOS, Android, and the Web.</p>
    </header>
)

export default Header
