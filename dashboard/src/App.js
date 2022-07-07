import './App.css';
import TotalCard from './Components/TotalCard'
import LastProduct from './Components/LastProduct'
import ProductsByCat from './Components/ProductsByCat'
import ProductList from './Components/ProductList'

function App() {

  return (
    <div className="App">
      <TotalCard />
      <LastProduct />
      <ProductsByCat/>
      <ProductList/>
    </div>
  );
}

export default App;
