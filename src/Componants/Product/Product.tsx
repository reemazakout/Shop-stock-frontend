import { useState } from "react";
import { addToCart } from "../../app/Cart/CartSlice";
import { useAppDispatch } from "../../app/Hooks/Hooks";
import { TProduct } from "../../types/product";
import { toast } from "react-toastify";

export default function Product({ Product }: { Product: TProduct }) {
  if (!Product) {
    return <div>Loading...</div>;
  }

  const { title, img, price, cat_prefix, id } = Product;
  console.log("Product Data is :", Product);

  const dispatch = useAppDispatch();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsButtonDisabled(true);

    setTimeout(() => {
      setIsButtonDisabled(false);
      toast.success("Item added to cart");
    }, 200);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
        <div className="relative w-full h-auto group">
          <img
            src={img}
            alt="Product"
            className="w-full h-auto rounded-t-xl object-cover"
            onError={(e) =>
              (e.currentTarget.src = "https://via.placeholder.com/150")
            }
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="text-lg font-semibold line-clamp-1" title={title}>
            {title}
          </h2>
          <p className="text-gray-600">{price} $</p>
          <p className="text-gray-600">{cat_prefix}</p>
        </div>
        <button
          className={`mt-4 px-4 py-2 btn-primary flex items-center space-x-2 ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={addToCartHandler}
          disabled={isButtonDisabled}
        >
          <i className="fas fa-shopping-cart"></i>
          <span>{isButtonDisabled ? "Please wait..." : "Add to cart"}</span>
        </button>
      </div>
    </>
  );
}
