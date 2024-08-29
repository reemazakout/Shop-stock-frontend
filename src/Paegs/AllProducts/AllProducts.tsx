import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks/Hooks";
import Product from "../../Componants/Product/Product";
import { ThunkAllProduct } from "../../app/AllProducts/ThunkAllProduct";
import Skeleton from "react-loading-skeleton";
import { cleanUp } from "../../app/AllProducts/AllProductsSlice";
import { Helmet } from "react-helmet";

export default function AllProducts() {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.allProducts
  );

  useEffect(() => {
    // Clean up products before fetching new ones
    dispatch(cleanUp());

    // Fetch all products
    dispatch(ThunkAllProduct());
  }, [dispatch]); // Only dispatch on initial mount

  const renderSkeleton = () => {
    return Array.from({ length: 8 }).map((_, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center gap-5"
      >
        <Skeleton width={200} height={200}></Skeleton>
        <Skeleton width={80} height={20} style={{ marginTop: "1rem" }} />
      </div>
    ));
  };

  if (loading === "pending") {
    return (
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderSkeleton()}
      </div>
    );
  }

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  return (
    <>
      <Helmet>
        <meta name="  All products" content="All products" />
        <title> All products page</title>
      </Helmet>
      <div className="container  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {records.map((product) => (
          <Product key={product.id} Product={product} />
        ))}
      </div>
    </>
  );
}
