import React from "react";
import "./styles.css"; // Assurez-vous d'importer votre fichier CSS

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (pageIndex) => {
    onPageChange(pageIndex + 1);
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index)}
          className={`pagination-button ${index + 1 === currentPage ? 'active' : ''}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
