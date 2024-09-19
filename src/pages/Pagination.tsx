import React from 'react';

interface PaginationProps {
  total: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(total / 25);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;