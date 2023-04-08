import { useState }from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import  api  from './services/api';


function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});



//01310930/json/

 async function handleSearch (){
    
    if (input === ''){
      alert("Preencha com algum Cep")
      return;
    }

    try{
        const response = await api.get(`${input}/json`);
        setCep(response.data);
        setInput("");

    }
    catch{
        alert('Ops erro ao Buscar');
        setInput("");
    }


  }


  return (
    <div className="container">
      <h1 className="title">Buscador por CEP</h1>

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

      {Object.keys(cep).length > 0 && (
        <main className="main">
            <h2>CEP : {cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>Complemento : {cep.logradouro}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>

        </main>
      )}
    
      
    </div>
  );
}

export default App;
