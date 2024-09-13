import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    let isPresent = false;
    const updatedCart = cart.map((element) => {
      if (element.id === item.id) {
        isPresent = true;
        return { ...element, quantity: element.quantity + 1 };
      }
      return element;
    });

    if (isPresent) {
      setCart(updatedCart);
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);
      return;
    }

    setCart([...cart, { ...item, quantity: 1 }]);
    console.log(item.title + " is added");
  };

  const handleRemove = (item) => {
    console.log("Remove button clicked");
    setCart(cart.filter((element) => element.id !== item.id));
  };

  // Calculate total price based on quantity
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Shop handleClick={handleClick} />
      ) : (
        <Cart
          cart={cart}
          setCart={setCart}
          totalPrice={totalPrice}
          handleRemove={handleRemove}
          setShow={setShow}
        />
      )}

      {/* Warning Notification */}
      {warning && (
        <div className="fixed top-20 right-4 bg-yellow-600 text-yellow-100 border border-yellow-700 rounded-lg p-4 flex items-center space-x-3 shadow-lg">
          <svg
            className="w-5 h-5 text-yellow-200"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 1a9 9 0 11-9 9 9.01 9.01 0 019-9zm1 12H9v-2h2v2zm0-4H9V6h2v3z"></path>
          </svg>
          <div>
            <p className="font-semibold">Warning</p>
            <p>Item already exists</p>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
