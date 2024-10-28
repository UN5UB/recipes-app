const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 7) {
        pages.push(...Array.from({ length: 7 }, (_, i) => i + 1));
        pages.push("...", totalPages);
      } else if (currentPage > 7 && currentPage < totalPages - 6) {
        pages.push(
          1,
          "...",
          currentPage - 3,
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          currentPage + 3,
          "...",
          totalPages
        );
      } else {
        pages.push(1, "...");
        for (let i = totalPages - 6; i <= totalPages; i++) {
          pages.push(i);
        }
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-300 disabled:opacity-50"
      >
        {"<"}
      </button>

      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-1">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page ? "bg-red-600 text-white" : "bg-gray-300"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-300 disabled:opacity-50"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
