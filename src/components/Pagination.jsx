function Pagination({ currentPage, totalPages, onChange }) {
    const maxVisiblePages = 2;
    const startPage = Math.max(1, currentPage - maxVisiblePages);
    const endPage = Math.min(totalPages, currentPage + maxVisiblePages);
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const baseButton =
        "w-8 h-8 flex items-center justify-center rounded-md text-sm transition-colors";
    const activeButton = "bg-orange-500 text-white font-bold";
    const inactiveButton = "bg-gray-200 hover:bg-gray-300 text-gray-700";

    const navButton =
        "w-8 h-8 flex items-center justify-center rounded-md text-sm";
    const navEnabled = "bg-gray-200 hover:bg-gray-300 text-gray-700";
    const navDisabled = "bg-gray-200 text-gray-400 cursor-not-allowed";

    return (
        <div className="flex justify-center items-center rounded-md space-x-1 mt-8 select-none">
            {/* << First */}
            <button
                onClick={() => onChange(1)}
                disabled={isFirstPage}
                className={`${navButton} ${isFirstPage ? navDisabled : navEnabled}`}
            >
                &laquo;
            </button>

            {/* < Prev */}
            <button
                onClick={() => onChange(currentPage - 1)}
                disabled={isFirstPage}
                className={`${navButton} ${isFirstPage ? navDisabled : navEnabled}`}
            >
                &lt;
            </button>

            {/* Page Numbers */}
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onChange(page)}
                    className={`${baseButton} ${currentPage === page ? activeButton : inactiveButton
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* > Next */}
            <button
                onClick={() => onChange(currentPage + 1)}
                disabled={isLastPage}
                className={`${navButton} ${isLastPage ? navDisabled : navEnabled}`}
            >
                &gt;
            </button>

            {/* >> Last */}
            <button
                onClick={() => onChange(totalPages)}
                disabled={isLastPage}
                className={`${navButton} ${isLastPage ? navDisabled : navEnabled}`}
            >
                &raquo;
            </button>
        </div>
    );
}

export default Pagination;
