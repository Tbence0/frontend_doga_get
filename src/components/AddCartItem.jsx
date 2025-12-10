import { useState } from "react";

function AddCartItem() {
  const [form, setForm] = useState({
    CustomerId: "",
    ProductId: "",
    Quantity: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addItem = () => {
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => alert("Hozzáadva! ID: " + data.id));
  };

  return (
    <div>
      <h2>Új tétel hozzáadása</h2>

      <input
        name="CustomerId"
        placeholder="Customer ID"
        value={form.CustomerId}
        onChange={handleChange}
      />

      <input
        name="ProductId"
        placeholder="Product ID"
        value={form.ProductId}
        onChange={handleChange}
      />

      <input
        name="Quantity"
        placeholder="Quantity"
        value={form.Quantity}
        onChange={handleChange}
      />

      <button onClick={addItem}>Hozzáadás</button>
    </div>
  );
}

export default AddCartItem;
