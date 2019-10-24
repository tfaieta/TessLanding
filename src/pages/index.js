import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.svg'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stickyNav: false,
        }
    }

    _handleWaypointEnter = () => {
        this.setState(() => ({ stickyNav: false }))
    }

    _handleWaypointLeave = () => {
        this.setState(() => ({ stickyNav: true }))
    }

    render() {
        return (
            <div>
                <Helmet
                    title={get(this, 'props.data.site.siteMetadata.title')}
                />

                <Header />

                <Waypoint
                    onEnter={this._handleWaypointEnter}
                    onLeave={this._handleWaypointLeave}
                />
                <Nav sticky={this.state.stickyNav} />

                <div id="main">
                    <section id="intro" className="main special">
                        <div className="spotlight">
                            <div className="content">
                                <header className="major">
                                    <h2>
                                        A platform made for podcast lovers by
                                        podcast lovers.
                                    </h2>
                                </header>
                                <p>
                                    Tess started out with an intention to make a
                                    open podcasting app, free from startup-dom
                                    and entrusted to the open-source community
                                    of developers who would like to help build
                                    their dream product.
                                </p>
                            </div>
                        </div>
                        <span className="picture">
                            <img src={pic01} alt="" />
                        </span>
                    </section>

                    <section id="first" className="main special">
                        <header className="major">
                            <h2>Features</h2>
                        </header>
                        <ul className="features">
                            <li>
                                <span className="icon major style3 fa-magic" />
                                <h3>Use it Everywhere</h3>
                                <p>
                                    Tess works on iPhone, Android, and and the
                                    web, so you can listen to all your favorite
                                    podcasts wherever you are.
                                </p>
                            </li>
                            <li>
                                <span className="icon major style1 fa-bookmark-o" />
                                <h3>Highlight and Share</h3>
                                <p>
                                    Save highlights of podcasts to your library
                                    for later listening or share a highlight
                                    with others!
                                </p>
                            </li>
                            <li>
                                <span className="icon major style5 fa-code" />
                                <h3>Open Source</h3>
                                <p>
                                    Through open source, anyone can propose new
                                    features and make Tess better.
                                </p>
                            </li>
                        </ul>
                    </section>

                    <section id="second" className="main special">
                        <header className="major">
                            <h2>For developers</h2>
                            <p>
                                Tess uses React Native for it's iOS/Android app,
                                <br />
                                React for its Web player, and all backend is
                                managed through Firebase.
                            </p>
                        </header>
                        <ul className="statistics">
                            <li className="style1">
                                <span className="icon fa-code" />
                                <strong>35k</strong> Lines
                            </li>
                            <li className="style2">
                                <span className="icon fa-rss" />
                                <strong>200+</strong>Podcasts
                            </li>
                            <li className="style3">
                                <span className="icon fa-users" />
                                <strong>100+</strong>Users
                            </li>
                        </ul>
                        <p>
                            Tess is looking for a lot of help from podcast
                            lovers looking to make a better free podcast app. If
                            you would like to talk more about Tess or become a
                            maintainer you can join our Discord server below.
                        </p>
                        <footer className="major">
                            <ul className="actions" />
                        </footer>
                    </section>

                    <section id="cta" className="main special">
                        <header className="major">
                            <h2>Check out Tess!</h2>
                            <p>
                                Please feel free to checkout the code bases!
                            </p>
                        </header>
                        <footer className="major">
                            <ul className="actions">
                                <li>
                                    <a
                                        href="https://github.com/tfaieta/TessMobile"
                                        className="button mobile"
                                    >
                                        Mobile Repo
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/tfaieta/TessWebPlayer"
                                        className="button web"
                                    >
                                        Web Repo
                                    </a>
                                </li>
                            </ul>
                        </footer>
                    </section>
                </div>
            </div>
        )
    }
}

Index.propTypes = {
    route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
