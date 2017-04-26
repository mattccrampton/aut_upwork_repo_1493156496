import React, { Component } from 'react';
//import { Link } from 'react-router';
import { connect } from 'react-redux';

//import actions
import {
  preLoadTopBooksAction,
  loadTopBooksAction,
  loadTopBooksSuccessAction,
  loadTopBooksFailureAction,
} from './CenterList.duck';

import BookListModel from '../../../../models/BookList';

import BookList from '../../../../shared/components/BookList/BookList';

// Map what data will show up as props in the embedded component...
const mapStateToProps = (state) => {
  //console.log("STATE:", state);

  return {...state["Homepage_ThirdRow_CenterList"], "XXX":"ZZZ"}
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopBooks: (browse_node, limit) => {
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
            return dispatch(loadTopBooksFailureAction("Server Error"));
          };

          const bookList = new BookListModel(response.payload.data.data);
          //console.log("fetchTopBooks response:", response.payload.data.data);
          return dispatch(loadTopBooksSuccessAction(bookList));

        })
        .catch((error) => {
          console.log("AJAX FAILURE:", error);
          
          //ajax failed I guess
          return dispatch(loadTopBooksFailureAction(error));

        });
    }
  }
}

class CenterListTopBooksComponent extends Component {

  componentWillMount() {
    this.props.loadTopBooks(this.props.browse_node, this.props.limit);
  }

  render() {
      return (
        <div>
          <BookList {...this.props} />
        </div>
      );
  }
}

const CenterListTopBooks = connect(mapStateToProps, mapDispatchToProps)(CenterListTopBooksComponent)

export default CenterListTopBooks
