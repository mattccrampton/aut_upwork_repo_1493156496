import React, { Component } from 'react';
//import { Link, match } from 'react-router-dom';


/* <HeaderContainer type="posts_index"/> */

import LeftList from './LeftList/LeftList'
import CenterList from './CenterList/CenterList'
import RightList from './RightList/RightList'

class ThirdRow extends Component {
  render() {
    return (

        <div className="row">

          <div className="col-sm-4">
            <LeftList title="Cyberpunk" browse_node="9059887011" limit="6" />
          </div>
          <div className="col-sm-4">
            <CenterList title="Space Opera" browse_node="271585011" limit="6" />
          </div>
          <div className="col-sm-4">
            <RightList title="Dystopian" browse_node="3559311011" limit="6" />
          </div>

        </div>

    )
  }
}

export default ThirdRow;


