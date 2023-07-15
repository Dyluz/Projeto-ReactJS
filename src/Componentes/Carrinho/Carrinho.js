import React, {useContext} from "react";
import { DataContext } from "../../context/Dataprovider";
import 'boxicons';

export const Carrinho = () => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [carrinho,setCarrinho] = value.carrinho;
    const [total] = value.total;

    const togglefalse = () => {
        setMenu (false);
    };


    const reduce = id =>{
		carrinho.forEach(item =>{
			if(item.id === id){
				item.quantidade === 1 ? item.quantidade = 1: item.quantidade -=1;
			}
			setCarrinho([...carrinho])
		})
	}
	const increase = id =>{
		carrinho.forEach(item =>{
			if(item.id === id){
				item.quantidade +=1;
			}
			setCarrinho([...carrinho])
		})
	}

	const removerProduto = id =>{
		if(window.confirm("Quer mesmo remover o produto?")){
			carrinho.forEach((item, index)=>{
				if(item.id === id){
					item.quantidade = 1;
					carrinho.splice(index, 1)
				}
			})
			setCarrinho([...carrinho])
		}
	}


    const show1 = menu ? "carrinhos show" : "carrinho";
    const show2 = menu ? "carrinho show" : "carrinho";

    return(
        <div className={show1}>
            <div className={show2}>
                <div className="fechar_carrinho" onClick={togglefalse}>
                    <box-icon name="x" class='bx bx-menu right-icon'></box-icon>
                </div>
                <h2>Seu carrinho</h2>
                <div className="carrinho_central">
                    {				
					carrinho.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>está vazio!</h2> :<>
					{
					carrinho.map((produto) => (

                    <div className="carrinho_item" key={produto.id}>
                        <img src={produto.image} alt={produto.title}></img>
                        <div>
                            <h3>{produto.title}</h3>
                            <p className="price">R${produto.price}</p>
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid" onClick={() => increase(produto.id)}></box-icon>
                            <p className="quantidade">{produto.quantidade}</p>
                            <box-icon name="down-arrow" type="solid" onClick={() => reduce(produto.id)} ></box-icon>
                        </div>
                        <div className="remover_item" onClick={() => removerProduto(produto.id)}>
                            <box-icon name="trash"></box-icon>
                        </div>
                    </div>
                    ))
                    };
                        
                        </>
                        }
                </div>  
                <div className="carrinho_rodape">
                    <h3>Total: R${total} </h3>
                    <button className="btn">Pagamento</button>
                </div>            
            </div>
        </div>
    );
};