import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

function CartPage() {
  const [cItems, setItems] = useState([]);

  const handleRemoveCart = (id) => {
    const items = cItems.filter((item) => item.id !== id);
    localStorage.setItem("userCart", items.length ? JSON.stringify(items) : []);
    setItems(items);
  };

  useEffect(() => {
    const cartItems = localStorage.getItem("userCart") || [];
    if (cartItems.length > 0) setItems(JSON.parse(cartItems));
  }, []);

  return (
    <main>
      <h1>Cart Page</h1>

      {cItems.length > 0 ? (
        cItems.map((item) => (
          <li key={item.id}>
            <NavLink key={item?.id} to={`/products/${item.id}`}>
              <img src={item?.image} alt={item?.title} width={200} height={200} />
            </NavLink>
            <h2>{item?.title}</h2>
            <h3>{item?.price}</h3>
            <p>{item?.category}</p>
            <button onClick={() => handleRemoveCart(item.id)}>Remove from Cart</button>
          </li>
        ))
      ) : (
        <h3>No Items in cart</h3>
      )}
    </main>
  );
}

export default CartPage;
