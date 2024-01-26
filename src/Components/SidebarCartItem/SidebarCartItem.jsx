//! Import Link
import { Link } from "react-router-dom";

//! Import Icons
import { IoMdClose } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const SidebarCartItem = ({item}) => {

  const {name, price, id, text, amount, image} = item;

  const {removeFromCart, decreaseAmount, increaseAmount} = useContext(CartContext)

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* Image */}
        <div>
            <img className="max-w-[80px] rounded-full object-cover" src={image} alt="" />
        </div>

        <div className="w-full flex flex-col">
          {/* Title */}
          <div className="flex justify-between">
            <Link
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
              to={`product/${id}`}
            >
              {name}
            </Link>

            <div onClick={() => removeFromCart(id)} className="cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition duration-150 text-2xl" />
            </div>
          </div>

          <div className="flex items-center gap-x-2 h-[36px] text-sm">

            {/* Quantity */}
            <div className="flex flex-1 max-w-[100px] items-center border text-primary font-medium px-2">

              {/* minus icon */}
              <div onClick={() => decreaseAmount(id)} className="flex-1 cursor-pointer h-full">
                <FaMinus />
              </div>

              {/* amount */}
              <div className="flex-1">{amount}</div>

              {/* pilus icon */}
              <div onClick={() => increaseAmount(id)} className="flex-1 cursor-pointer">
                <FaPlus />
              </div>

            </div>

            {/* Item price */}
            <div className="flex-1 flex items-center justify-around">$ {price}</div>

            {/* Final price */}
            <div className="flex flex-1 justify-end text-primary font-medium">$ {parseFloat(amount * price).toFixed(2)}</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarCartItem