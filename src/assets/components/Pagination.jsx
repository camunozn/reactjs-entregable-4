import React from 'react';

const Pagination = () => {
  return (
    <div className="pagination flex">
      <button className="btn btn--page btn--prev-page">
        <i className="fa-solid fa-caret-left"></i>
      </button>
      <div className="pages-buttons">
        <button className="btn btn--page btn--curr-page">1</button>
      </div>
      <button className="btn btn--page btn--next-page">
        <i className="fa-solid fa-caret-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
