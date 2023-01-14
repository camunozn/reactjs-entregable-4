import React from "react";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="btn btn--prev-page">Prev Page</button>
      <div className="pages-buttons">
        <button className="btn btn--page">1</button>
      </div>
      <button className="btn btn--next-page">Next Page</button>
    </div>
  );
};

export default Pagination;
