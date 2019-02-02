import React, { Component } from "react";
import "./Search.css";
import { API_URL } from "../../config";
import { handleResponse } from "../../helper";
import Loading from "./Loading";

export default class Search extends Component {
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
      .then(result => {
        console.log(result);
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="Search">
        <span className="Search-icon" />
        <input
          className="Search-input"
          type="text"
          placeholder="Currency name"
          onChange={this.handleChange}
        />
        {isLoading && (
          <div className="Search-loading">
            <Loading width="12px" height="12px" />
          </div>
        )}
      </div>
    );
  }
}
