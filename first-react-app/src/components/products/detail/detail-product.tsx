import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import useDetailProductController from "./detail-product-controller";

const DetailProduct = () => {
  const { productDetail, updateDate, onBackToList } =
    useDetailProductController();

  return (
    <div>
      {productDetail && productDetail.isLoading ? (
        <div className="flex justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <FontAwesomeIcon icon={faArrowLeft} onClick={onBackToList} />

          <div className="grid grid-rows-2 grid-cols-2 w-screen">
            <div className="p-4">
              <img
                src={`${productDetail?.data?.images[0]}`}
                alt={productDetail?.data?.title}
              />
            </div>
            <div className="bg-gray-300 p-4">
              <span className="font-bold block">
                {`${productDetail?.data?.title} (${productDetail?.data?.sku})`}
              </span>
              <span className="mt-2 block">{`$ ${productDetail?.data?.price}`}</span>
              <div className="block mt-2">
                <span className="font-bold mr-2">Brand :</span>
                <span>{productDetail?.data?.brand}</span>
              </div>

              {productDetail?.data &&
                productDetail.data.tags &&
                productDetail.data.tags.length > 0 && (
                  <div className="block mt-2">
                    <span className="font-bold mr-2">Tags :</span>
                    <span>
                      {productDetail?.data?.tags
                        .map(
                          (tag) =>
                            String(tag).charAt(0).toUpperCase() +
                            String(tag).slice(1)
                        )
                        .join(" , ")}
                    </span>
                  </div>
                )}

              {productDetail?.data &&
                productDetail.data.reviews &&
                productDetail.data.reviews.length > 0 && (
                  <>
                    <span className="font-bold block">Review :</span>
                    <table className="table-auto border-separate p-4">
                      <tr>
                        <th>Reviewer Name</th>
                        <th>Review Date</th>
                        <th>Comment</th>
                      </tr>

                      {productDetail.data.reviews.map((review) => (
                        <tr>
                          <td>{review.reviewerName}</td>
                          <td>{updateDate(review.date)}</td>
                          <td>{review.comment}</td>
                        </tr>
                      ))}
                    </table>
                  </>
                )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailProduct;
