import { useState } from "react";

function CartById() {
  const [id, setId] = useState("");
  const [item, setItem] = useState(null);

  const loadItem = () => {
    fetch(`http://localhost:3000/cartitems/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  };

  return (
    <div>
      <h2>Adat lekérése ID alapján</h2>

      <input
        type="number"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={loadItem}>Lekérés</button>

      {item && (
        <p>
          {item.Customer} – {item.Product} ({item.Quantity} db)
        </p>
      )}
    </div>
  );
}

export default CartById;
