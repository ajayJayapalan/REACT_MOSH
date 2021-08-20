import React, { Component } from "react";
import _ from "lodash";
import PropTypes from 'prop-types'

class Pagination extends Component {
  render() {
    const { itemsCount, pageSize, currentPage, onPageChange } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);

    if (pagesCount === 1) return null;

    const pages = _.range(1, pagesCount + 1);

    return (
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className={page=== currentPage ? "page-item active" : "page-item"}>
            <button 
            className="page-link"
            onClick={()=>onPageChange(page)}
            >{page}</button>
          </li>
        ))}
      </ul>
    );
  }
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;
