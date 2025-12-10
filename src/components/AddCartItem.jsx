import { useState } from "react";


function AddCartItem() {
  const [form, setForm] = useState({ name: "", price: "" });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const addItem = async () => {
    const res = await fetch("http://localhost:5198/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: form.name, price: Number(form.price) })
    });


    if (!res.ok) return alert("Hiba történt!");
    const data = await res.json();
    alert("Hozzáadva! ID: " + data.id);
  };


  return (
    <div>
      <h2>Új termék hozzáadása</h2>


      <input name="name" placeholder="Név" value={form.name} onChange={handleChange} />
      <input name="price" placeholder="Ár" value={form.price} onChange={handleChange} />


      <button onClick={addItem}>Hozzáadás</button>
    </div>
  );
}
export default AddCartItem;