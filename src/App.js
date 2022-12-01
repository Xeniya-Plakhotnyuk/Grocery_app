// import logo from './logo.svg';
import './App.css';
import cart from './cart.webp';
import salesman from './salesman.webp';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className='app'>
      <img src = { cart } width = "250px" alt = "shopping cart" />
      <h1>Grocery List</h1>
      <GroceryList />
      <img src = { salesman } width = "200px" alt = "salesman"/>
    </div>
  );
}

export default App;
