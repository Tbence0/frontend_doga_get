import { useEffect, useState } from "react";

function CartList() {
  const [items, setItems] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cartRes, customerRes, productRes] = await Promise.all([
          fetch("https://localhost:7242/cartitems"), 
          fetch("https://localhost:7242/customers"),
          fetch("https://localhost:7242/products")

        ]);

        const [cartData, customerData, productData] = await Promise.all([
          cartRes.json(),
          customerRes.json(),
          productRes.json(),
        ]);

        setItems(cartData);
        setCustomers(customerData);
        setProducts(productData);
        setLoading(false);
      } catch (err) {
        console.error("Hiba a lekéréskor:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getCustomerName = (id) => {
    const customer = customers.find(c => c.Id === id);  
    return customer ? customer.Name : "Ismeretlen";
  };

  const getProductName = (id) => {
    const product = products.find(p => p.Id === id);   
    return product ? product.Name : "Ismeretlen";
  };

  if (loading) return <p>Betöltés...</p>;

  return (
    <div>
      <h2>Kosár tételek</h2>
      <ul>
        {items.length === 0 && <li>Nem található tétel</li>}
        {items.map(item => (
          <li key={item.Id}>
            {getCustomerName(item.CustomerId)} – {getProductName(item.ProductId)} ({item.Quantity} db)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartList;
