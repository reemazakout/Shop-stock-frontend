import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks/Hooks";
import { ThunkCart } from "../../app/Cart/ThunkCart";
import {
  removeItem,
  quantityIncrement,
  quantityDecrement,
} from "../../app/Cart/CartSlice";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function CartItems() {
  const dispatch = useAppDispatch();
  const { items, productFullInfo, Loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(ThunkCart());
  }, [dispatch]);

  if (Loading === "pending") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const cartProducts = productFullInfo.filter((product) => items[product.id]);

  if (cartProducts.length === 0) {
    return (
      <>
        <Helmet>
          <meta name="Cart items" content=" Cart items" />
          <title> Cart page</title>
        </Helmet>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-center  text-5xl font-semibold  text-black">
            Your cart is empty !{" "}
          </div>
          <Link to="/home" className="btn-primary mt-5">
            back to home page{" "}
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        {cartProducts.map((product) => (
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
                <p className="text-sm text-gray-600">
                  Quantity: {items[product.id] || 0}
                </p>
                <div className="pt-5">
                  <button
                    onClick={() => dispatch(quantityIncrement(product.id))}
                    className="btn-primary bg-green-500 hover:bg-green-600 mr-4"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(quantityDecrement(product.id))}
                    className="btn-primary"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 w-1/3 justify-end">
              <button
                onClick={() => dispatch(removeItem(product.id))}
                className="btn-primary"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
