
import React, { Component } from 'react';
//import {
  //Link,
//} from 'react-router-dom'

import './BookDetail.css';

import LeftNav from '../../shared/components/LeftNav/LeftNav'
import BookDetailContent from './BookDetailContent/BookDetailContent'

class BookDetail extends Component {
  render() {

    var bookID = this.props.match.params.id;

    return (

<div className="container-fluid" id="BookDetail">
  <div className="col-fixed">
    <LeftNav />
  </div>
  <div className="row testRow">
    <div className="col-sm-12">
      <BookDetailContent book_id={bookID}/>
    </div>
  </div>
</div>

    )
  }
}

export default BookDetail;



