import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks/Hooks";
import Product from "../../Componants/Product/Product";
import { ThunkProduct } from "../../app/Products/ThunkProduct";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { cleanProductFullInfo } from "../../app/Cart/CartSlice";

export default function Products() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    // Dispatch ThunkProduct only once on mount
    if (records.length === 0 && loading === "idle") {
      dispatch(ThunkProduct(params.prefix as string));
    }

    // Clean up product info on unmount
    return () => {
      dispatch(cleanProductFullInfo());
    };
  }, [dispatch, params.prefix]);

  const renderskelton = () => {
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
      <div className="container py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderskelton()}
      </div>
    );
  }

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  return (
    <div className="container py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {records.map((product) => (
        <Product key={product.id} Product={product} />
      ))}
    </div>
  );
}
