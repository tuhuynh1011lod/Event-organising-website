import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar'>
        <input type='text' placeholder='Search for events' />
        <button className='three-line'></button>
      </div>
    )
  }
}

export default SearchBar
