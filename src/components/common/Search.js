import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Search.css";
import { API_URL } from "../../config";
import { handleResponse } from "../../helper";
import Loading from "./Loading";

class Search extends Component {
  state = {
    searchResults: [],
    searchQuery: "",
    isLoading: false
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ searchQuery: value });

    if (!value) {
      return "";
    }
    this.setState({ isLoading: true });
    fetch(`${API_URL}/autocomplete?searchQuery=${value}`)
      .then(handleResponse)
      .then(searchResults => {
        this.setState({ isLoading: false, searchResults });
      });
  };

  handleRedirect = currencyId => {
    this.setState({
      searchQuery: "",
      searchResults: []
    });

    this.props.history.push(`/currency/${currencyId}`);
  };

  renderSearchResults() {
    const { searchResults, searchQuery, isLoading } = this.state;
    if (!searchQuery) {
      return "";
    }

    if (searchResults.length > 0) {
      return (
        <div className="Search-result-container">
          {searchResults.map(result => (
            <div
              key={result.id}
              className="Search-result"
              onClick={() => this.handleRedirect(result.id)}
            >
              {result.name} ({result.symbol})
            </div>
          ))}
        </div>
      );
    }

    if (!isLoading) {
      return (
        <div className="Search-result-container">
          <div className="Search-no-result">No results</div>
        </div>
      );
    }
  }

  render() {
    const { isLoading, searchQuery } = this.state;
    return (
      <div className="Search">
        <span className="Search-icon" />
        <input
          className="Search-input"
          type="text"
          placeholder="Currency name"
          value={searchQuery}
          onChange={this.handleChange}
        />
        {isLoading && (
          <div className="Search-loading">
            <Loading width="12px" height="12px" />
          </div>
        )}
        {this.renderSearchResults()}
      </div>
    );
  }
}

export default withRouter(Search);
