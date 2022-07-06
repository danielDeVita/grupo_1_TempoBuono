import { useEffect, useState } from 'react';
import './App.css';
import ContentInfoList from './components/InfoList/ContentInfoList';

function App() {

  const [usuarios, setUsuarios] = useState();
  
  useEffect( () => {
    const url = "http://localhost:3001/api/users"; 
  
    async function fetchUsuarios(url) {
      const result =  await fetch(url)
      const data = await result.json()
      //setTimeout(() => setMovie(data), 5000)
      setUsuarios(data);
      console.log(data)
    }

    fetchUsuarios(url);
  },[]);

  

  return (
    <div className="App">
      <ContentInfoList listaUsuarios = { usuarios }/>

    </div>
  );
}

export default App;
