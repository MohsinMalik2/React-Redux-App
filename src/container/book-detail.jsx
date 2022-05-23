import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {


  render() {
      if(!this.props.books)
        {
            return (
                <div className="col-md-8">
                    <h4>Kindly select a book First</h4>
                </div>
            )
        }
        else{
            return (
                <div className='col-sm-8'>
                    <div className="card">
                        <div className="card-header text-center">
                            Card Details
                        </div>
                        <div className="card-body p-3 mt-3">
                            <ul style={{marginTop:"20px"}}>
                                <li>
                                    Title: {this.props.books.title}
                                </li>
                                <li>
                                    Pages: {this.props.books.pages}
                                </li>
                                <li>
                                    Author: {this.props.books.author}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    
  }

}

//Special Function to convert application state coming from reducers into props 
//Anything (pieces of states i.e. objects) returned from this function will work as a props

function mapStateToProps(state){
    return {
      books: state.selectedBook
    }
}

export default connect(mapStateToProps )(BookDetail);
 