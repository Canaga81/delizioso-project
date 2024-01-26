import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //! Item Amount State
  const [itemAmount, setItemAmount] = useState(0);

  //! Update Item Amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumlator, currentItem) => {
        return accumlator + currentItem.amount;
      }, 0);

      setItemAmount(amount);
    }
  }, [cart]);

  //! Total Price State
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumlator, currentItem) => {
      return accumlator + currentItem.price * currentItem.amount;
    }, 0);

    setTotal(total);
  }, [cart]);

  //! Add To Cart (Mehsullari SideBar'a Artirmaq Ucun Yazilmis Kodlar)
  const addToCart = (product, id) => {
    //! New Item
    const newItem = { ...product, amount: 1 };

    //! Check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    //! If Cart Item Already(Onceden) in the Cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //! İncrease Amount (Mehsulun Sayini Artirmaq Ucun Kodlar)
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //! Decrease Amount (Mehsulun Sayini Azaltmaq Ucun Kodlar)
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  //! Remove from Cart (Bir Tek Karti Silmek Ucun Yazilmis Kodlar)
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newCart);
  };

  //! Clear Cart (Butun Mehsullari Silmek Ucun Yazilmis Kodlar)
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseAmount,
        decreaseAmount,
        removeFromCart,
        itemAmount,
        total,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
