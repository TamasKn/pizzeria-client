import React from 'react'
import './CartMenu.css'
import cartIcon from '../../static/scooter.svg'
import addIcon from '../../static/add.svg'
import removeIcon from '../../static/remove.svg'
import deleteIcon from '../../static/delete.svg'
import {useGlobal} from '../../reducer/CartReducer'
import {Link} from "react-router-dom";

const CartMenu = () => {

    const [globalState, globalActions] = useGlobal()


    return(
        <div className="dropdown">


            <img className='cart-icon' src={cartIcon} alt='Futár ikon' />
            <span className='cart-counter' >{globalState.cartItems.length}</span>

            <div className="dropdown-content">
                {
                    (globalState.cartItems.length !== 0)
                        ?
                            globalState.cartItems.map( item =>
                                <div className='cart-item'>
                                    <p className='cart-item-name'>{item.name}</p>
                                    {
                                        (item.qty > 1)
                                            ?
                                            <img className='operator-icon'
                                                 src={removeIcon}
                                                 alt='Mennyiség csökkentése'
                                                 onClick={() => globalActions.decreaseQty(item.name)} >

                                            </img>
                                            :   null
                                    }
                                    <p>{item.qty} db</p>

                                    {
                                        (globalState.total + item.price <= 20000)
                                            ? <img className='operator-icon' src={addIcon} alt='Mennyiség növelése'
                                                   onClick={() => globalActions.increaseQty(item.name)} >

                                            </img>
                                            : null
                                    }

                                    <p className='cart-item-price' >{item.price * item.qty} Ft</p>
                                    <img className='operator-icon'
                                          src={deleteIcon}
                                         alt='Tétel törlése'
                                          onClick={() => globalActions.removeItemFromCart(item.name)}>
                                    </img>
                                </div>
                            )
                        :
                            <p className='cart-spacing' >A kosár üres</p>
                }

                <p className='cart-spacing' >Végösszeg: <span className='cart-item-name' >{globalState.total} Ft</span> </p>
                {
                    (globalState.total >= 20000)
                        ? <p>Maximum 20.000Ft értékben rendelhet</p>
                        : null
                }
                <div className='cart-checkout'><Link to='#'>Rendelés leadása</Link></div>


            </div>
        </div>
    )
}

export default CartMenu
