
import React, { Component } from 'react';
//import { Link, match } from 'react-router-dom';

import './Homepage.css';

import ThirdRow from './ThirdRow/ThirdRow'
import LeftNav from '../../shared/components/LeftNav/LeftNav'
import FeaturedContent from './FeaturedContent/FeaturedContent'
import TopBooks from './TopBooks/TopBooks'

/* <HeaderContainer type="posts_index"/> */

class Homepage extends Component {
  render() {
    return (

<div className="container-fluid" id="Homepage">
  <div className="col-fixed">
    <LeftNav />
  </div>
  <div className="row testRow">
    <div className="col-sm-8">
      <FeaturedContent />
    </div>
    <div className="col-sm-4">
      <TopBooks title="Top Books" browse_node="16272" limit="4" />
    </div>
  </div>
  <ThirdRow />
</div>

    )
  }
}

export default Homepage;


