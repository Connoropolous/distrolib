import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import LibraryContainer from './LibraryContainer'
import BookContainer from './BookContainer'
import NewBookContainer from './NewBookContainer'

class App extends Component {
  render () {
    return (
      <div className='fluid-container'>
        <div className="row full-height menu">
          <div className="col-3 full-height">
            <Link to="/"><img src="/Logo.png" /></Link>
            <ul>
              <li>TITLE</li>
              <li>AUTHOR</li>
              <li>GENRE</li>
              <li>COLLECTIONS</li>
              <li>MY BOOKS</li>
              <li>BORROWED</li>
            </ul>
          </div>
          <div className="col-9 wood-bg full-height">
            <Route path='/' exact component={LibraryContainer} />
            <Route path='/new' exact component={NewBookContainer} />
            <Route path='/books/:hash' exact component={BookContainer} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
