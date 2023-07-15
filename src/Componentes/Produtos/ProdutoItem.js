import React, {useContext} from "react";
import { DataContext } from "../../context/Dataprovider";


export const ProdutoItem = ({
    id,
    title,
    price,
    image,
    category,
    }) => {

        const value = useContext(DataContext);
        const addCarrinho = value.addCarrinho;
        const [menu, setMenu] = value.menu;

        const toggleMenu = () => {
            setMenu(!menu)
        }

    return (
        <div className="produto">
            <div href="#">
                 <div className="produto__img">
                    <img src={image} alt={title}/>
                 </div> 
            </div> 
            <div className="produto__rodape">
                 <h1>{title}</h1>
                 <p>{category}</p>
                 <p className="preco">R${price}</p>
            </div> 
            <div className="botao">
                    <button className="btn" onClick={()=> addCarrinho(id)}>
                            Adicionar 
                    </button>
                <div>
                    <button className="btn" id="button" onClick={toggleMenu}> Carrinho </button>
                </div>
            </div> 
        </div>                      
    )
}