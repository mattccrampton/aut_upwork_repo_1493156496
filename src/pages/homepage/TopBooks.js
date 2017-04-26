import React, { Component } from 'react';
//import { Link } from 'react-router';
import { connect } from 'react-redux';

//import actions
import {
  preLoadTopBooksAction,
  loadTopBooksAction,
  loadTopBooksSuccessAction,
  loadTopBooksFailureAction,
} from './TopBooks.duck';

import BookListItem from '../../shared/BookListItem';

// Map what data will show up as props in the embedded component...
const mapStateToProps = (state) => {
  return state.TopBooks
}

// ????
const mapDispatchToProps = (dispatch) => {
  return {
    loadTopBooks: (browse_node,limit) => {
			//console.log("LOAD TOP BOOKS DISPATCH CALLED");
      dispatch(preLoadTopBooksAction())

      dispatch(loadTopBooksAction(browse_node,limit))
        .then((response) => {

          //Check for error here
          if(
              typeof response.payload.data["_metadata"] === "undefined" ||
              response.payload.data["_metadata"]["success_flag"] !== true ||
              response.payload.data.data.length < 1
          ){
            console.log("error check failed:", response.payload);
            return dispatch(loadTopBooksFailureAction("Server Error"));
          };

          const book_list = response.payload.data.data; //pulls book data from axios response
          //console.log("fetchTopBooks response:", response.payload.data.data);
          return dispatch(loadTopBooksSuccessAction(book_list));

        })
        .catch((error) => {
          
          //ajax failed I guess
          return dispatch(loadTopBooksFailureAction(error));

        });
    }
  }
}

class TopBooksComponent extends Component {

  componentWillMount() {
    console.log("this.props.loadTopBooks(", this.props["browse_node"] , this.props["limit"] );
    this.props.loadTopBooks(this.props["browse_node"],this.props["limit"]);
  }

  renderBooks(book_list) {
    return book_list.map((book) => {
      return (
        <BookListItem book={book} key={book.asin} />
      );
    });
  }

  render() {

    if(this.props["loading"]){
      
      //We're in the middle of an AJAX call
      return (
        <div>
          <h3>{this.props["title"]}:</h3>
        </div>
      );

    } else if(this.props["error"]){

      console.log("error to render:", this.props["error"]);

      //error in ajax call
      return (
        <div>
          <h3>{this.props["title"]}:</h3>
          Sorry, we're having trouble loading results right now.
        </div>
      );

    } else {
      
      //We've loading the books from the ajax call
      return (
        <div>
          <h3>{this.props["title"]}:</h3>

          {this.renderBooks(this.props["book_list"])}

        </div>

      );
    }

  }
}

const TopBooks = connect(mapStateToProps, mapDispatchToProps)(TopBooksComponent)

export default TopBooks
