import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SelectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {

  renderList(){
      return this.props.books.map((book) => {
          return (
              
              <li key={book.title} className='list-group-item'>

                  {book.title}
                  
              </li>

          )
      })
  }

  render() {
    return (
      
      <ul className='list-group'>
          
          {this.renderList()}

      </ul>

    )
  }

}

//Special Function to convert application state coming from reducers into props 
//Anything (pieces of states i.e. objects) returned from this function will work as a props

function mapStateToProps(state){
    return {
      
      books: state.books

    }
}


//Special Function to convert action creator coming from actions folder into props 
//Anything i.e. action creator (function) returned from this function will work as a props 

function mapDispatchToProps(dispatch){
  
  //this will equals the SelectBook (Action creator function to the SelectBook object ) which'll then used as a props in this component
  return bindActionCreators( { SelectBook: SelectBook } , dispatch)

}

export default connect(mapStateToProps , mapDispatchToProps )(BookList);
 