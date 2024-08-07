import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks/Hooks";
import { fetchWishlist } from "../../app/WishList/WishListSlice";
import { Link } from "react-router-dom";

export default function WishListPage() {
  const dispatch = useAppDispatch();
  const { productsFullInfo, loading, error } = useAppSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (productsFullInfo.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center text-5xl font-semibold text-black">
          Your WishList is empty!
        </div>
        <Link to="/home" className="btn-primary mt-5">
          Back to home page
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      {productsFullInfo.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between p-4 border-b border-gray-200"
        >
          <div className="grid grid-cols-3 gap-4 items-center w-2/3">
            <div className="col-span-1">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600">${product.price}</p>
              <div className="pt-5">
                <button
                  onClick={() => dispatch(ThunkLikeToggle(product.id))}
                  className="btn-primary bg-red-500 hover:bg-red-600 mr-4"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
