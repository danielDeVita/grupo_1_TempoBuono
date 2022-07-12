import './App.css';
import TotalCard from './Components/TotalCard'
import LastProduct from './Components/LastProduct'
import ProductsByCat from './Components/ProductsByCat'
import ProductList from './Components/ProductList'
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState({
    users: {},
    products: [],
    categories: 0,
  });

  async function peticiones() {

    let urls = [
      "http://localhost:3001/api/users",
      "http://localhost:3001/api/products",
      "http://localhost:3001/api/categories"
    ]

    const arrayPromesas = []

    for (let i = 0; i < urls.length; i++) {
      const dataFetch = await fetch(urls[i])
      const data = await dataFetch.json()
      arrayPromesas.push(data)
    }

    const result = await Promise.all(arrayPromesas)
    setData({
      users: result[0].data,
      products: result[1].products.products,
      categories: result[2].meta.count
    })
  }

  useEffect(
    () => {
      peticiones()
    }, []
  )

  console.log(data.users)
  console.log(data.products)
  console.log(data.categories)

 /*  let arrayDeProductos = Object.values(data.products)
  console.log(arrayDeProductos)
  arrayDeProductos.map(producto=>{
    producto.productsCategory_idproductsCategory
  }) */ 

  return (
    <div className="App">
      <TotalCard
        users={data.users.count}
        products={data.products}
        totalCategories={data.categories}
      />
      <LastProduct products={data.products} />
      <ProductsByCat />
      <ProductList products={data.products} />
    </div>
  );
}

export default App;