import CartList from "./components/CartList.jsx";
import CartById from "./components/CartById.jsx";
import AddCartItem from "./components/AddCartItem.jsx";



function App() {
  return (
    <div>

      <CartList />
      <hr />

      <CartById />
      <hr />

      <AddCartItem />
    </div>
  );
}

export default App;
