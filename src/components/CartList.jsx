import React, { useEffect, useState } from "react";

export default function CartList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:5198/api/products");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        console.log("BACKEND ADAT:", data);  // ✔ Itt a jó helye

        setProducts(data);
      } catch (err) {
        console.error("Hiba a lekéréskor:", err);
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  if (error) return <div>Hiba: {error}</div>;

  return (
    <ul>
      {products.length === 0 ? (
        <li>Nincsenek tételek.</li>
      ) : (
        products.map((p) => <li key={p.id}>{p.name}</li>)
      )}
    </ul>
  );
}
