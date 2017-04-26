import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LeftNav.css';

class LeftNav extends Component {
  handleMailingListSignup(e){
    e.preventDefault();
    alert("Mailing list signups coming soon!");
  }

  csAlert() {
    alert("Coming soon")
  }

  render() {
    return (
      <div id="Homepage-LeftNav">

        <Link to={`/`}>
          <img src="/images/top_banner_logo.png" id="SBL_logo" alt="SCI-FI BOOK LOVE" />
        </Link>

        <h1 className="leftColDescription">We are a fan-run book and graphic novel review site.</h1>

            {/*
        <div className="panel panel-default" id="navPanel">
          <div className="panel-heading">
            <strong>Browse books by...</strong>
          </div>

          <div className="list-group">

            <a href="#" onClick={this.csAlert} className="list-group-item">Book Series</a>
            <a href="#" onClick={this.csAlert} className="list-group-item">Authors</a>
            <a href="#" onClick={this.csAlert} className="list-group-item">Generes</a>

            <Link to={`/CART`} className="list-group-item">Book Series</Link>
            <Link to={`/book/xxx`} className="list-group-item">Authors</Link>
            <Link to={`/book/xxx`} className="list-group-item">Generes</Link>

          </div>
        </div>
            */}



        <div className="panel panel-warning" id="mailing_list_signup_panel">
          <div className="panel-heading">
						<form name="mailing_list_signup" id="mailing_list_signup" onSubmit={this.handleMailingListSignup}>
							<div className="form-group">
								<label>Join our mailing list:</label>
								<input type="email" className="form-control" name="email_address" placeholder="name@email.com" />
							</div>
							<button type="submit" className="btn btn-default">Join Mailing List</button>
						</form>
					</div>
				</div>


      </div>
    )
  }
}

export default LeftNav;
