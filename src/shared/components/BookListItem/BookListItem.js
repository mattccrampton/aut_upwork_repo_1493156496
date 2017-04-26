import React, { Component } from 'react';

class BookListItem extends Component {

  componentWillMount() {
  }

  render() {
    var book = this.props["book"];

    //console.log("this.props", this.props);
      
    return (

      <div className="media">
        <div className="media-left media-top">
          <a href={book.get("amazon_url")} target="_BLANK">
            <img alt="" className="media-object thumbnail latest_book_thumbnail" src={book.get("image_url_thumb")} />
          </a>
        </div>
        <div className="media-body latest_book_text">
          <h4 className="media-heading">{book.getTruncatedTitle(50)}</h4>
          <p>Publication Date: {book.get("publication_date")}</p>
          <p><a href={book.get("amazon_url")} target="_BLANK">See on Amazon.com</a></p>
        </div>
      </div>

    );


  }
}

export default BookListItem
