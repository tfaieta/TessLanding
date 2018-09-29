import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <p>Tess was a project started by Tony Faieta and Nick Ruspantini during our junior year of college at 
            the University of Florida. Currently, it is maintained by Tony and we are open to pull requests.
            <br/>
            <br/>If you would like to get in contact with us, please email: 
            <br/>tfaieta@gmail.com.
            </p>
        </section>
        <section>
            <ul className="icons">
                <p>Check out Tess on:</p>
                <li><a href="https://twitter.com/tfaieta" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/tfaieta" className="icon fa-github"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Tony Faieta.</p>
    </footer>
)

export default Footer


