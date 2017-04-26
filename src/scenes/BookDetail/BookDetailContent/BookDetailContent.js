import React, { Component } from 'react';
//import { Link } from 'react-router';
import { connect } from 'react-redux';

//import actions
import {
  preLoadBookDetailContentAction,
  loadBookDetailContentAction,
  loadBookDetailContentSuccessAction,
  loadBookDetailContentFailureAction,
} from './BookDetailContent.duck';

import BookDetailContentModel from '../../../models/BookDetailContent';
//import BookListModel from '../../../models/BookList';
//import BookList from '../../../shared/components/BookList/BookList';

// Map what data will show up as props in the embedded component...
const mapStateToProps = (state) => {
  //console.log("STATE:", state);
  return {...state["BookDetail_Content"], "XXX":"ZZZ"}
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadBookDetailContent: (book_id) => {
      //console.log("LOAD TOP BOOKS DISPATCH CALLED");
      dispatch(preLoadBookDetailContentAction())
      dispatch(loadBookDetailContentAction(book_id))
        .then((response) => {

          //Check for error here
          if(
              typeof response.payload.data["_metadata"] === "undefined" ||
              response.payload.data["_metadata"]["success_flag"] !== true ||
              response.payload.data.data.length < 1
          ){
            return dispatch(loadBookDetailContentFailureAction("Server Error"));
          };

          const bookDetailContent = new BookDetailContentModel(response.payload.data.data);
          //console.log("fetchTopBooks response:", response.payload.data.data);
          return dispatch(loadBookDetailContentSuccessAction(bookDetailContent));

        })
        .catch((error) => {
          console.log("AJAX FAILURE:", error);
          
          //ajax failed I guess
          return dispatch(loadBookDetailContentFailureAction(error));

        });
    }
  }
}

class BookDetailContentComponent extends Component {

  componentWillMount() {
    this.props.loadBookDetailContent(this.props.book_id);
  }

  render() {
      if(this.props.bookDetailContent === null){
        return (
          <div>
            loading...
          </div>
        );
      };

      var bookDetailContent = this.props.bookDetailContent;
      //console.log(bookDetailContent.getReviewCount(), bookDetailContent.get("reviews"));

      //bookDetailContent.get("reviews").map(function(review, i){
        //console.log(review["Content"]);
      //})


      return (
        <div>
          <div className="row">
            <div className="col-sm-3">
              <img src={bookDetailContent.get("image_url")} className="img-responsive" role="presentation"/>
            </div>
            <div className="col-sm-9">
              <h3>{bookDetailContent.get("title")}</h3>
              <p>Author: {bookDetailContent.get("author")}</p>
              <p>Publication Date: {bookDetailContent.get("publication_date")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {bookDetailContent.get("reviews").map(function(review, i){
                return (<div key={i}><h4>{review["Source"]}</h4><p dangerouslySetInnerHTML={{__html: review["Content"]}} /></div>);
              })}
            </div>
          </div>
        </div>
      );
  }

}

const BookDetailContent = connect(mapStateToProps, mapDispatchToProps)(BookDetailContentComponent)

export default BookDetailContent
