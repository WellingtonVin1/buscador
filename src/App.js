import { useState }from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import  api  from './services/api';


function App() {

  const [input, setInput] = useState('')

//01310930/json/

 async function handleSearch (){
    
    if (input === ''){
      alert("Preencha com algum Cep")
      return;
    }

    try{
        const response = await api.get(`${input}/json`);
        console.log(response.data);
    }
    catch{
        alert('Ops erro ao Buscar');
    }


  }


  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
         <input 
         type="text"
         placeholder="Digite seu CEP..."
         value={input}
         onChange={(e) => setInput(e.target.value)}
         />

         <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
         </button>
      </div> 

      <main classname="main">
          <h2>CEP : 78088190</h2>

          <span>Rua Teste Algum</span>
          <span>Complemento : Algum complemento</span>
          <span>Vila Rosa</span>
          <span>Campo Grande - MS</span>
      </main>

      
    </div>
  );
}

export default App;
