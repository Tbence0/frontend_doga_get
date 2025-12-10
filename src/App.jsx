import CartList from "./components/CartList.jsx";
import CartById from "./components/CartById.jsx";
import AddCartItem from "./components/AddCartItem.jsx";



function App() {
  return (
    <div>
      <h1>Cart API teszt</h1>

      <CartList />
      <hr />

      <CartById />
      <hr />

      <AddCartItem />
    </div>
  );
}

export default App;
