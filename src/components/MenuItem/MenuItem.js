import React from 'react'
import './MenuItem.css'
import spicyIcon from '../../static/spicy.svg'
import vegaIcon from '../../static/vega.svg'
import {useGlobal} from "../../reducer/CartReducer";

const MenuItem = ({id, description, name, price, spicy, veg}) => {

    const [globalState, globalActions] = useGlobal()

    return(
        <div className='listing-container'>
            <p className='food-name'>{name}
                {(spicy === 1) ? <img className='food-type-icon' src={spicyIcon} alt="Csipos"/> : null}
                {(veg === 1) ? <img className='food-type-icon' src={vegaIcon} alt="Vegetarianus"/> : null}
            </p>
            <div className='food-info'>
                <p className='food-description'>{description}</p>
                <p className='food-price'>{price} Ft</p>

                {
                    (globalState.total + price <= 20000)
                        ? <div className='order-button' onClick={() => globalActions.addItemToCart(name, price)} >Kosarba</div>
                        : <div className='order-button-disabled' >Kosarba</div>
                }
            </div>


        </div>
    )
}

export default MenuItem
