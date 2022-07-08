import './App.css';
import TotalCard from './Components/TotalCard'
import LastProduct from './Components/LastProduct'
import ProductsByCat from './Components/ProductsByCat'
import ProductList from './Components/ProductList'
import { useState, useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data.users)
      })
    fetch("http://localhost:3001/api/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data.products)
      })
  }, [])

  return (
    <div className="App">
      <TotalCard />
      <LastProduct />
      <ProductsByCat />
      <ProductList />
    </div>
  );
}

export default App;
