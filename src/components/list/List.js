import React, { Fragment } from "react";
import { handleResponse } from "../../helper";
import { API_URL } from "../../config";
import Loading from "../common/Loading";
import Table from "./Table";
import Pagination from "./Pagination";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      currencies: [],
      error: null,
      totalPages: 0,
      page: 1
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    this.setState({ loading: true });
    const { page } = this.state;

    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
      .then(handleResponse)
      .then(data => {
        const { currencies, totalPages } = data;
        this.setState({
          currencies,
          loading: false,
          totalPages
        });
      })
      .catch(error => {
        this.setState({ error: error.errorMessage, loading: false });
      });
  }

  handlePaginationClick = direction => {
    let nextPage = this.state.page;
    nextPage = direction === "next" ? nextPage + 1 : nextPage - 1;
    this.setState({ page: nextPage }, () => this.fetchCurrencies());
  };

  render() {
    const { loading, error, currencies, page, totalPages } = this.state;
    if (loading) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    }

    if (error) {
      return <div className="error">{error}</div>;
    }
    return (
      <Fragment>
        <Table currencies={currencies} />
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePaginationClick={this.handlePaginationClick}
        />
      </Fragment>
    );
  }
}

export default List;
