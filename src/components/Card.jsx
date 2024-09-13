import React from 'react';
import '../styles/cards.css'; // Ensure this is linked for hover effects

const Card = ({ item,handleClick }) => {
  const { image, title, author, price, amount } = item;

  return (
    <div className="card bg-slate-200 shadow-lg rounded-lg overflow-hidden mx-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl max-w-xs">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h2 className="text-gray-900 font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-sm mb-2">by {author}</p>

        <div className="flex justify-between items-center mt-4">
          {/* Price */}
          <p className="text-xl font-bold text-gray-900">${price}</p>

          {/* Quantity */}
          <div className="bg-green-600 text-white rounded-full px-4 py-1 text-sm font-semibold">
            {amount} in stock
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-4 flex border-t border-gray-200">
        <button onClick={()=>handleClick(item)} className="bg-blue-500 text-white px-6 w-full py-2 rounded hover:bg-blue-600 transition duration-300">
          Add to Cart
        </button>
      </div>  
    </div>
  );
};

export default Card;
