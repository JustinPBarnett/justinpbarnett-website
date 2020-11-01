import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-auto d-flex pb-5 pt-6 pt-md-7 border-top border-light bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <p>
              Description of the website
            </p>
            <ul className="d-flex list-unstyled mb-5 mb-lg-0">
              <li className="mr-2">
                <Link to="#" className="btn btn-icon-only btn-pill btn-primary"></Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-lg-0">
            <h5>Justin P Barnett</h5>
            <ul className="footer-links list-unstyled mt-2">
              <li className="mb-1">
                <Link to="#" className="p-2">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-lg-0">
            <h5>Other</h5>
            <ul className="footer-links list-unstyled mt-2">
              <li className="mb-1">
                <Link to="#" className="p-2">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 mb-lg-0">
            <h5>Subscribe</h5>
            <p className="text-grey font-small mt-2">Join my mailing list. I write rarely, but only the best content.</p>
            <form action="#">
              <div className="form-row mb-2">
                <div className="col-12">
                  <label className="h6 font-weight-normal d-none" htmlFor="inputEmail3">Email address</label>
                  <input type="email" className="form-control mb-2" placeholder="example@email.com" name="email" id="inputEmail3" required />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block" data-loading-text="Sending">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row">
          <div className="col">
            <Link to="#" className="d-flex justify-content-center">Logo</Link>
            <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
              <p className="font-weight-normal font-small mb-0">
                Copyright © Justin P Barnett&nbsp;
                <span className="current-year">2020</span>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer