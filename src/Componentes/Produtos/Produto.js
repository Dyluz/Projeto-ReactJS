import React, {useContext} from 'react'
import { DataContext } from "../../context/Dataprovider";
import {ProdutoItem} from "./ProdutoItem";

export const ProdutosLista = () => {
	const value = useContext(DataContext)
	const [produtos] = value.produtos;
    return (
			<>
			<h1 className="produtos" id='prod__h1'>PRODUTOS</h1>
        <div className="produtos">
            {
							produtos.map(produto =>(
								<ProdutoItem 
									key={produto.id}
									title={produto.title}
									image={produto.image}
									category={produto.category}
									price={produto.price}
									id={produto.id}
								/>
							))
						}					
        </div>
				</>
    )
}