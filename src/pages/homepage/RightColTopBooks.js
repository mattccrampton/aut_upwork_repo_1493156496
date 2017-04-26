import React, { Component } from 'react';
//import { Link } from 'react-router';
import { connect } from 'react-redux';

//import actions
import {
  preLoadTopBooksAction,
  loadTopBooksAction,
  loadTopBooksSuccessAction,
  loadTopBooksFailureAction,
} from './RightColTopBooks.duck';

import BookListItem from '../../shared/components/BookListItem/BookListItem';

// Map what data will show up as props in the embedded component...
const mapStateToProps = (state) => {
  //console.log(state);
  return state.RightColTopBooks
}

// ????
const mapDispatchToProps = (dispatch) => {
  return {
    loadTopBooks: () => {
			//console.log("LOAD TOP BOOKS DISPATCH CALLED");
      dispatch(preLoadTopBooksAction())
      dispatch(loadTopBooksAction())
        .then((response) => {

          //Check for error here
          if(
              typeof response.payload.data["_metadata"] === "undefined" ||
              response.payload.data["_metadata"]["success_flag"] !== true ||
              response.payload.data.data.length < 1
          ){
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

class RightColTopBooksComponent extends Component {

  componentWillMount() {
    this.props.loadTopBooks();
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
          <h3>Top Ranked Books:</h3>
        </div>
      );

    } else if(this.props["error"]){

      //console.log("error to render:", this.props["error"]);

      //error in ajax call
      return (
        <div>
          <h3>Top Ranked Books:</h3>
          Sorry, we're having trouble loading results right now.
        </div>
      );

    } else {
      
      //We've loading the books from the ajax call
      return (
        <div>
          <h3>Top Ranked Books:</h3>

          {this.renderBooks(this.props["book_list"])}

        </div>

      );
    }

  }
}

const RightColTopBooks = connect(mapStateToProps, mapDispatchToProps)(RightColTopBooksComponent)

export default RightColTopBooks
