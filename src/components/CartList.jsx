import { useEffect, useState } from "react";

function CartList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div>
      <h2>Kosár tételek</h2>
      <ul>
        {items.map(i => (
          <li key={i.Id}>
            {i.Customer} – {i.Product} ({i.Quantity} db)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartList;
