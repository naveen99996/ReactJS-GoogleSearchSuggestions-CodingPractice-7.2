// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSearchSuggestions extends Component {
  state = {googleSearch: ''}

  displaySuggestion = suggestion => {
    this.setState({googleSearch: suggestion})
  }

  searchUserInput = event => {
    this.setState({googleSearch: event.target.value})
  }

  render() {
    const {googleSearch} = this.state
    const {suggestionsList} = this.props

    const filterSearchRes = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(googleSearch.toLowerCase()),
    )

    return (
      <div className="google-suggestion-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img"
        />
        <div className="google-suggestions-card">
          <div className="google-suggestions-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="google-suggestions-search-icon"
            />
            <input
              type="search"
              value={googleSearch}
              placeholder="Search Google"
              className="google-suggestions-input"
              onChange={this.searchUserInput}
            />
          </div>
          <ul className="suggestions-items-container">
            {filterSearchRes.map(suggestion => (
              <SuggestionItem
                eachItem={suggestion}
                displaySuggestion={this.displaySuggestion}
                key={suggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSearchSuggestions
