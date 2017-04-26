import React, { Component } from 'react';

import BookListItem from '../BookListItem/BookListItem'

class BookList extends Component {

  componentWillMount() {
  }

  render() {

    if(this.props["error"]){

      return (

        <div>
          <h3>{this.props["title"]}</h3>
          Sorry, we're having trouble loading results right now.
        </div>

      );

    } else if(this.props["loading"] || this.props["bookList"] === null){
      
      var placeholderBooks = [];

      var loops = 3;
      if(typeof this.props["limit"] !== "undefined"){
        loops = this.props["limit"];
      }

      for(var i=0;i<loops;i++){
        placeholderBooks.push(
          (
            <div className="media placeholderBooklist" key={i}>
              <div className="media-left media-top">
                <div className="placeholderBooklistImage">
                  <div className="placeholderBooklistImageInner"></div>
                </div>
              </div>
              <div className="media-body latest_book_text">
                <h4 className="media-heading">&nbsp;</h4>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </div>
            </div>
          )
        );  
      }


      return (

          <div>
            <h3>{this.props["title"]}</h3>
            {placeholderBooks}
          </div>

      );

    } else {
      
      return (

          <div>
            <h3>{this.props["title"]}</h3>
            {
              this.props["bookList"].map((book) => {
                return <BookListItem book={book} key={book.get("asin")} />
              })
            }
          </div>

      );
    }

  }


}

export default BookList

