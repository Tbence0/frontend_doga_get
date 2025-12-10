import { useState } from "react";


function CartById() {
const [id, setId] = useState("");
const [item, setItem] = useState(null);


const loadItem = async () => {
if (!id) return;
const res = await fetch(`http://localhost:5198/api/products/${id}`);
if (!res.ok) return alert("Nincs ilyen ID!");
const data = await res.json();
setItem(data);
};


return (
<div>
<h2>Adat lekérése ID alapján</h2>


<input type="number" value={id} onChange={(e) => setId(e.target.value)} />


<button onClick={loadItem}>Lekérés</button>


{item && (
<p>
{item.name} – {item.price} Ft
</p>
)}
</div>
);
}
export default CartById;