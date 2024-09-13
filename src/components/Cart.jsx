import React from "react";
import { FiTrash } from "react-icons/fi";

const Cart = ({ cart, setCart, totalPrice, setShow, handleRemove }) => {
  const handleIncrement = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      handleRemove(item);
    } else {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCart(updatedCart);
    }
  };

  return (
    <div className="cart-container bg-white shadow-lg rounded-lg p-6 mx-auto max-w-lg relative">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
        Your Cart
      </h2>
      <div
        onClick={() => {
          setShow(true);
        }}
        className="cursor-pointer absolute p-2 rounded-md top-3 right-3 bg-slate-600 hover:bg-slate-800 text-white font-bold"
      >
        Close
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item flex items-center justify-between py-4 border-b border-gray-200"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg"
              />

              {/* Item Details */}
              <div className="item-details flex-1 ml-4">
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleIncrement(item)}
                    className="bg-green-500 w-8 h-8 text-white rounded-full"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleDecrement(item)}
                    className="bg-red-500 w-8 h-8 text-white rounded-full ml-2"
                  >
                    -
                  </button>
                </div>
                <p className="text-gray-700 font-bold">${item.price}</p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemove(item)}
                className="text-red-500 hover:text-red-600 transition duration-200"
              >
                <FiTrash className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Total Price Section */}
      {cart.length > 0 && (
        <div className="total-price mt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-gray-800">Total:</span>
            <span className="text-xl font-semibold text-gray-900">${totalPrice}</span>
          </div>

          {/* Checkout Button */}
          <button className="bg-green-500 w-full text-white py-3 rounded-lg hover:bg-green-600 transition duration-200">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
