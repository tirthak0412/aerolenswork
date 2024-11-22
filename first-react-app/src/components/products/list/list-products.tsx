import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";

import useListProductsController from "./list-products-controller";
import Pagination from "../../pagination";

const ListProducts = () => {
  const {
    productData,
    onRedirectToProductDetail,
    page,
    pageSize,
    totalRecords,
    updateThePagination,
    categories,
    onCategoryUpdate,
    selectedCategory,
    onSortData,
    orderBy,
    sortBy,
  } = useListProductsController();

  return (
    <div className="block">
      {productData.isLoading ? (
        <div className="flex justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="relative h-16 w-16">
            <div className="absolute right-0 h-16 w-16">
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryUpdate(e.target.value)}
              >
                {categories.map((category) => (
                  <option value={category}>
                    {category.charAt(0).toUpperCase() +
                      category.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <table className="w-full min-w-max table-auto text-center">
              <tr>
                <th>
                  <span>Image</span>
                </th>
                <th>
                  <span className="mr-2">Title</span>
                  <>
                    {sortBy !== "title" ? (
                      <FontAwesomeIcon
                        icon={faSort}
                        onClick={() => onSortData("title", "asc")}
                      />
                    ) : (
                      <>
                        {sortBy === "title" && orderBy === "asc" ? (
                          <>
                            <FontAwesomeIcon
                              icon={faSortUp}
                              onClick={() => onSortData("title", "desc")}
                            />
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon
                              icon={faSortDown}
                              onClick={() => onSortData("", "")}
                            />
                          </>
                        )}
                      </>
                    )}
                  </>
                </th>
                <th>
                  <span className="mr-2">Category</span>
                  <>
                    {sortBy !== "category" ? (
                      <FontAwesomeIcon
                        icon={faSort}
                        onClick={() => onSortData("category", "asc")}
                      />
                    ) : (
                      <>
                        {sortBy === "category" && orderBy === "asc" ? (
                          <>
                            <FontAwesomeIcon
                              icon={faSortUp}
                              onClick={() => onSortData("category", "desc")}
                            />
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon
                              icon={faSortDown}
                              onClick={() => onSortData("", "")}
                            />
                          </>
                        )}
                      </>
                    )}
                  </>
                </th>
                <th>
                  <span className="mr-2">Brand</span>
                  <>
                    {sortBy !== "brand" ? (
                      <FontAwesomeIcon
                        icon={faSort}
                        onClick={() => onSortData("brand", "asc")}
                      />
                    ) : (
                      <>
                        {sortBy === "brand" && orderBy === "asc" ? (
                          <>
                            <FontAwesomeIcon
                              icon={faSortUp}
                              onClick={() => onSortData("brand", "desc")}
                            />
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon
                              icon={faSortDown}
                              onClick={() => onSortData("", "")}
                            />
                          </>
                        )}
                      </>
                    )}
                  </>
                </th>
                <th>
                  <span>Tags</span>
                </th>
              </tr>

              {productData.data.map((product) => (
                <tr>
                  <td>
                    <img
                      height="80"
                      width="80"
                      src={`${product.thumbnail}`}
                      alt={product.title}
                    />
                  </td>
                  <td
                    className="text-black hover:text-blue-600"
                    onClick={() => onRedirectToProductDetail(product.id)}
                  >
                    {product.title}
                  </td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>{product.tags.join(",")}</td>
                </tr>
              ))}
            </table>
          </div>

          <Pagination
            page={page}
            pageSize={pageSize}
            totalRecords={totalRecords}
            updateThePagination={updateThePagination}
          />
        </>
      )}
    </div>
  );
};

export default ListProducts;
