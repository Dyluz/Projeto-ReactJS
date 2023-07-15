import React from 'react';
import { Header } from './Componentes/Header/Header';
import {DataProvider} from "./context/Dataprovider";
import {Carrinho} from "./Componentes/Carrinho/Carrinho";
import './index.css';
import { ProdutosLista } from './Componentes/Produtos/Produto';



function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header/>
        <ProdutosLista/>
        <Carrinho/>
      </div>
      <footer className= "footer">
         <p>Desenvolvido por Dyluz</p>
      </footer> 
    </DataProvider>
  );
}

export default App;
