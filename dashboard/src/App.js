import './App.css';
import TotalCard from './Components/TotalCard'
import LastProduct from './Components/LastProduct'
import ProductsByCat from './Components/ProductsByCat'
import ProductList from './Components/ProductList'
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState({});

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
    setData({users:result[0],products:result[1]})
  }

  useEffect(
    ()=>{
      peticiones()
    },[]
  )

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
