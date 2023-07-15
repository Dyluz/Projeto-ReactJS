import React, {useContext} from "react";
import logo from "../../imagem/logo.jpg";
import { DataContext } from "../../context/Dataprovider";
import 'boxicons'; 

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrinho] = value.carrinho;

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header>
                <div className="logo" >
                    <img src={logo} alt="logo" id="img" width="100"  />
                </div>
           
                 <div className="cart" onClick={toggleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item_total">{carrinho.length}</span>
            </div>
        </header>
       
    )
}

