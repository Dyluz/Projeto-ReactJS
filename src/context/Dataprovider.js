import React, {useState, useEffect, createContext} from "react";
import Data from "../Data";


export const DataContext = createContext();

export const DataProvider = (props) => {
    const [produtos, setProdutos] = useState([]);
    const [menu, setMenu] = useState (false);
    const [carrinho, setCarrinho] = useState([]);
    const [total, setTotal] = useState(0);


  
    useEffect(() => {
        const produto = Data.items
       if (produtos) {
        setProdutos(produto)
       }else{
        setProdutos([])
       }
       
    }, [])

    const addCarrinho = (id) => {
        const check = carrinho.every(item => {
            return item.id !== id;
        })
        if (check) {
            const data = produtos.filter(produto => {
                return produto.id === id
            })
            setCarrinho([...carrinho, ...data])
        }else{
            alert("O produto já foi adicionado ao carrinho.")
        }
    }

    useEffect(() => {
      const dataCarrinho = JSON.parse(localStorage.getItem('dataCarrinho'))
      if(dataCarrinho){
        setCarrinho(dataCarrinho)
      }
    }, [])

    useEffect(() =>{
       localStorage.setItem('dataCarrinho', JSON.stringify(carrinho)) 
    }, [carrinho])

    useEffect(() =>{
		const getTotal = () =>{
			const res = carrinho.reduce((prev, item) =>{
				return prev + (item.price * item.quantidade)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrinho])

    const value = {
        produtos : [produtos],
        menu: [menu, setMenu],
        addCarrinho: addCarrinho,
        carrinho: [carrinho, setCarrinho],
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}