import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { backend_url, server } from "../../../server";
import axios from "axios";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  useEffect(() => {

    // setIsLoading(true);
    axios.get(`${server}/product/get-all-products`).then((res) => {
        setData(res.data.products);
        // setIsLoading(false);
    }).catch((error) => {
        console.log(error);
        // setIsLoading(false);
    })

    // const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = data?.sort((a, b) => b.sold_out - a.sold_out);
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
    console.log("In BestDetails : ");
    console.log(data);
  }, [allProducts]);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {/* {data && */}
                {/* data.map((i, index) => <ProductCard data={i} key={index} />)} */}
                {Array.isArray(data) &&
                data.map((i, index) => (
                  <ProductCard data={i} key={index} isShop={true} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
