import './App.css';
import TotalCard from './Components/TotalCard'
import LastProduct from './Components/LastProduct'
import ProductsByCat from './Components/ProductsByCat'
import ProductList from './Components/ProductList'
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState({users:{}, products:[]});

  async function peticiones(){

    let urls = [
      "http://localhost:3001/api/users",
      "http://localhost:3001/api/products"
    ]
    
    const arrayPromesas = []
  
    for(let i= 0; i< urls.length; i++){
      const dataFetch = await fetch(urls[i])
      const data = await dataFetch.json()
      arrayPromesas.push(data)
    }

    const result = await Promise.all(arrayPromesas)
    setData({users:result[0].data, products:result[1].products.products})
  }

  useEffect(
    ()=>{
      peticiones()
    },[]
  )

  // console.log (data.users)
  // console.log (data.products)

  return (
    <div className="App">
      <TotalCard users = {data.users.count} products = {data.products} />
      <LastProduct />
      <ProductsByCat />
      <ProductList />
    </div>
  );
}

export default App;
