import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import {setProducts} from '../redux/actions/productActions'
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .then((response)=>{
        dispatch(setProducts(response.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
    fetchProducts()
  },[])
  console.log('Products: ',products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;