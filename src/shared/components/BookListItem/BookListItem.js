import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'


class BookListItem extends Component {

  componentWillMount() {
  }

  render() {
    var book = this.props["book"];

    //console.log("this.props", this.props);
    //console.log("book", book);
    /*
     */
      
    var bookURL = "/book/" + book.get("asin");
    return (

      <div className="media">
        <div className="media-left media-top">
          <Link to={bookURL}>
            <img alt="" className="media-object thumbnail latest_book_thumbnail" src={book.get("image_url_thumb")} />
          </Link>
        </div>
        <div className="media-body latest_book_text">
          <h4 className="media-heading"><Link to={bookURL}>{book.getTruncatedTitle(50)}</Link></h4>
          <p>Publication Date: {book.get("publication_date")}</p>
          {/*
          <p><a href={book.get("amazon_url")} target="_BLANK">See on Amazon.com</a></p>
          */}
        </div>
      </div>

    );


  }
}

export default BookListItem
