import './App.css'
import TotalCard from './Components/TotalCard'
import LastProduct from './Components/LastProduct'
import ProductsByCat from './Components/ProductsByCat'
import ProductList from './Components/ProductList'
// import Sidebar from './Components/SideBar';
import { useState, useEffect } from 'react';
// import { Route } from "react-router-dom";
// import NavMenu from './Components/NavMenu';

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
  ///////////////////////////////////////////////////////////

  /* LOGICA PARA SABER CUANTOS PRODUCTOS HAY POR CATEGORIA */
  let arrayDeProductos = Object.values(data.products)
  console.log(arrayDeProductos)

  let i;
  let alfajores = [];
  let coffes = [];
  let combos = [];

  for (i = 0; i < arrayDeProductos.length; i++) {
    if (arrayDeProductos[i].productsCategory_idproductsCategory === 1) {
      alfajores.push(arrayDeProductos[i].productsCategory_idproductsCategory)
    } else if (arrayDeProductos[i].productsCategory_idproductsCategory === 2) {
      coffes.push(arrayDeProductos[i].productsCategory_idproductsCategory)
    } else if (arrayDeProductos[i].productsCategory_idproductsCategory === 3) {
      combos.push(arrayDeProductos[i].productsCategory_idproductsCategory)
    }
  }

  let quantAlfajores = alfajores.length;
  let quantCoffes = coffes.length;
  let quantCombos = combos.length;

  console.log("Hay " + quantAlfajores + " alfajores")
  console.log("Hay " + quantCoffes + " cafe")
  console.log("Hay " + quantCombos + " combos")

  ///////////////////////////////////////////////////////////
  return (
    <div id="wrapper">
        {/* < NavMenu /> */}
        {/* <Sidebar /> */}
        <div id="content-wrapper" className="d-flex flex-column ">
          <div id="content d-flex">
            <div><h2 className= "ml-3 my-3">App Dashboard</h2></div>
            <div className= "mx-3">
            <TotalCard
              users={data.users.count}
              products={data.products}
              totalCategories={data.categories}
            /></div>
            <div className='row mx-3'>
              <LastProduct products={data.products} />
              <ProductsByCat
                products={data.products}
                totalCategories={data.categories}
                quantAlfajores={quantAlfajores}
                quantCoffes={quantCoffes}
                quantCombos={quantCombos}
                categoryName={data.categories}
              />
            </div>
            <div className='mx-3 mb-4'>
              <ProductList products={data.products} />
              {/* <Route path='/productList' component={ProductList} /> */}
            </div>
          </div>
        </div>
    </div>
  );
}
export default App;