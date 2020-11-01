import React from 'react'
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: 'Feed',
    path: '/feed'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'Portfolio',
    path: '/portfolio'
  },
  {
    title: 'Resources',
    path: '/resources'
  },
  {
    title: 'Contact',
    path: '/contact'
  }
]

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-light shadow-soft navbar-theme-primary mb-4">
      <div className="container position-relative">
        <Link to="/feed" className="navbar-brand mr-lg-5">Justin P Barnett</Link>
        <div className="navbar-collapse collapse" id="navbar-default-primary">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <Link to="/feed" className="navbar-brand mr-lg-5">Justin P Barnett</Link>
              </div>
              <div className="col-6 collapse-close">
                <i className="fas fa-times" data-toggle="collapse" role="button"
                  data-target="#navbar-default-primary" aria-controls="navbar-default-primary"
                  aria-expanded="false" aria-label="Toggle navigation"></i>
              </div>
            </div>
          </div>
          <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
            { navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <Link to={link.path} className="nav-link">{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <Link to="#" className="btn btn-primary text-dark mb-0">Subscribe!</Link>
          <button className="navbar-toggler ml-2" type="button" data-toggle="collapse"
            data-target="#navbar-default-primary" aria-controls="navbar-default-primary"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header