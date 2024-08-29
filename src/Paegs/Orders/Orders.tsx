// Orders.jsx
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/Hooks/Hooks";
import CartItems from "../CartItems/CartItems";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

export default function Orders() {
  const { items, productFullInfo } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const cartProducts = productFullInfo.filter((product) => items[product.id]);

  const handlePayNowClick = () => {
    // Show toast message
    toast.info("Please login to make your payment");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <>
      <CartItems />
      <Helmet>
        <meta name="description" content="Orders page" />
        <title>Orders Page</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center ">
        {cartProducts.length > 0 && (
          <button
            onClick={handlePayNowClick}
            className="btn-primary text-center  w-full container bg-green-500 hover:bg-green-600 "
          >
            Pay Now!
          </button>
        )}
      </div>
    </>
  );
}
