import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

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

const useListProductsController = () => {
  const history = useHistory();

  const [productData, setProductData] = useState<{
    isLoading: boolean;
    data: IProductData[];
    isError: boolean;
    totalRecords: number;
  }>({
    isLoading: false,
    data: [],
    isError: false,
    totalRecords: 0,
  });
  const [page, setPage] = useState<number>(0);
  const PAGE_SIZE = 20;
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => {
        setCategories(["All", ...res.data]);
      })
      .catch(() => {
        setCategories([]);
      });
  }, []);

  useEffect(() => {
    setProductData({
      data: [],
      isError: false,
      isLoading: true,
      totalRecords: 0,
    });

    if (selectedCategory && selectedCategory !== "All") {
      axios
        .get(`https://dummyjson.com/products/category/${selectedCategory}`, {
          params: {
            skip: page * PAGE_SIZE,
            limit: PAGE_SIZE,
            sortBy: sortBy,
            order: orderBy,
          },
        })
        .then((res) => {
          setProductData({
            data: res.data.products,
            isError: false,
            isLoading: false,
            totalRecords: res.data.total,
          });
        })
        .catch(() => {
          setProductData({
            data: [],
            isError: true,
            isLoading: false,
            totalRecords: 0,
          });
        });
    } else {
      axios
        .get(`https://dummyjson.com/products`, {
          params: {
            skip: page * PAGE_SIZE,
            limit: PAGE_SIZE,
            sortBy: sortBy,
            order: orderBy,
          },
        })
        .then((res) => {
          setProductData({
            data: res.data.products,
            isError: false,
            isLoading: false,
            totalRecords: res.data.total,
          });
        })
        .catch(() =>
          setProductData({
            data: [],
            isError: true,
            isLoading: false,
            totalRecords: 0,
          })
        );
    }
  }, [page, PAGE_SIZE, selectedCategory, sortBy, orderBy]);

  const onRedirectToProductDetail = (id: number) => {
    history.push(`/products/${id}`);
  };

  const updateThePagination = (type: string) => {
    if (type === "previous") {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };

  const onCategoryUpdate = (category: string) => {
    setSelectedCategory(category);
    setPage(0);
  };

  const onSortData = (fieldName: string, type: string) => {
    setSortBy(fieldName);
    setOrderBy(type);
  };

  return {
    productData,
    onRedirectToProductDetail,
    page,
    pageSize: PAGE_SIZE,
    totalRecords: productData.totalRecords,
    updateThePagination,
    categories,
    onCategoryUpdate,
    selectedCategory,
    onSortData,
    sortBy,
    orderBy,
  };
};

export default useListProductsController;
