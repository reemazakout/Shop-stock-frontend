import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks/Hooks";
import { Thunk } from "../../app/Categories/Thunk";
import Category from "../../Componants/Category/Category";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Categories() {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (records.length === 0 && loading === "idle") {
      dispatch(Thunk());
    }
  }, [dispatch, records.length, loading]);

  const renderskelton = () => {
    return Array.from({ length: 8 }).map((_, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center gap-5"
      >
        <Skeleton circle={true} width={64} height={64} />
        <Skeleton width={200} height={20} style={{ marginTop: "1rem" }} />
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
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {records.map((category) => (
        <div key={category.id} className="col-span-1">
          <Category category={category} />
        </div>
      ))}
    </div>
  );
}
