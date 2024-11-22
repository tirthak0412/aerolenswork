import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

interface IProductData {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  weight: number;
  dimensions: { width: number; height: number; depth: number };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

const useDetailProductController = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const [productDetail, setProductDetail] = useState<{
    data: IProductData | undefined;
    isLoading: boolean;
    isError: boolean;
  }>();

  useEffect(() => {
    setProductDetail({ data: undefined, isError: false, isLoading: true });

    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          setProductDetail({
            data: res.data,
            isError: false,
            isLoading: false,
          });
        })
        .catch(() => {
          setProductDetail({
            data: undefined,
            isError: true,
            isLoading: false,
          });
        });
    }
  }, [id]);

  const updateDate = (date: string) => {
    const tempDate = new Date(date);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      tempDate.getDate() +
      " " +
      monthNames[tempDate.getMonth()] +
      " " +
      tempDate.getFullYear()
    );
  };

  const onBackToList = () => {
    history.push("/products");
  };

  return { productDetail, updateDate, onBackToList };
};

export default useDetailProductController;
