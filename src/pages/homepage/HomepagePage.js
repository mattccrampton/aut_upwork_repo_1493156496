
import React, { Component } from 'react';
//import { Link, match } from 'react-router-dom';
//import HeaderContainer from '../containers/HeaderContainer.js';
//import AuthorsListContainer from './AuthorsListContainer.js';

import './homepage.css';

import LeftCol from './LeftCol';
import CenterCol from './CenterCol';
import RightCol from './RightCol';

//import TopBooks from './TopBooks';

/* <HeaderContainer type="posts_index"/> */

class HomepagePage extends Component {
  render() {
    return (
      <div className='container-fluid' id="homepageContainer">

        <div className="row">

          <div className="col-sm-3">
            <LeftCol />
          </div>
          <div className="col-md-6 col-sm-9">
            <CenterCol />
          </div>
          <div className="col-sm-3 hidden-sm">
            <RightCol />
          </div>


        </div>
            {/*
        <div className="row">

          <div className="col-sm-4">
            <TopBooks title="Top Cyberpunk Books" browse_node="9059887011" limit="3" />
          </div>
          <div className="col-sm-4">
            <TopBooks title="Top Space Opera Books" browse_node="271585011" limit="3" />
          </div>
          <div className="col-sm-4">
          </div>

        </div>
            */}

      </div>
    )
  }
}

export default HomepagePage;


