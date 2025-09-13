"use client";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  hasMore: boolean;
}

export default function Pagination({ page, setPage, hasMore }: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-6 mt-8">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className={`min-w-[120px] px-6 py-3 rounded-md text-lg font-medium ${
          page === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-orange-500 text-white hover:bg-orange-600"
        } transition-colors`}
      >
        Anterior
      </button>
      
      <span className="text-gray-700 font-medium text-lg">
        Página {page}
      </span>
      
      <button
        onClick={() => setPage(page + 1)}
        disabled={!hasMore}
        className={` min-w-[120px] px-6 py-3 rounded-md text-lg font-medium ${
          !hasMore
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-orange-500 text-white hover:bg-orange-600"
        } transition-colors`}
      >
        Próxima
      </button>
    </div>
  );
}