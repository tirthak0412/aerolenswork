import React from "react";

interface IPagination {
  page: number;
  pageSize: number;
  totalRecords: number;
  updateThePagination: (type: string) => void;
}

const Pagination: React.FC<IPagination> = ({
  page,
  pageSize,
  totalRecords,
  updateThePagination,
}) => {
  return (
    <div className={"flex mb-10 justify-center"}>
      <button
        className={`flex items-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
          page === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => updateThePagination("previous")}
      >
        Previous
      </button>
      <button
        className={`flex items-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
          (page + 1) * pageSize >= totalRecords
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        onClick={() => updateThePagination("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
