import React, {useState, useEffect} from 'react'
import './CartMenu.css'
import cartIcon from '../../static/shopping-cart.svg'
import {useGlobal} from '../../reducer/CartReducer'
import {Link} from "react-router-dom";

const CartMenu = () => {

    const [globalState, globalActions] = useGlobal()


    return(
        <div className="dropdown">
            <img className='cart-icon' src={cartIcon} />
            <div className="dropdown-content">
                {
                    (globalState.cartItems.length !== 0)
                        ?
                            globalState.cartItems.map( item =>
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.qty}</p>
                                    {
                                        (item.qty > 1)
                                            ?
                                                <span onClick={() => globalActions.decreaseQty(item.name)} > - </span>
                                            :   null
                                    }
                                    {
                                        (globalState.total + item.price <= 20000)
                                            ? <span onClick={() => globalActions.increaseQty(item.name)} > + </span>
                                            : null
                                    }

                                    <p>{item.price * item.qty}</p>
                                    <button onClick={() => globalActions.removeItemFromCart(item.name)}>Torles</button>
                                </div>
                            )
                        :
                            <p>A kosar ures</p>
                }

                <p>Vegosszeg: {globalState.total}</p>
                {
                    (globalState.total >= 20000)
                        ? <p>Maximum 20.000Ft ertekben rendelhet</p>
                        : null
                }
                <Link to='/fizetes'>Fizet</Link>


            </div>
        </div>
    )
}

export default CartMenu
