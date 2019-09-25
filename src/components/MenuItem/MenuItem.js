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
                {(spicy === 1) ? <img className='food-type-icon' src={spicyIcon} alt="Csipős"/> : null}
                {(veg === 1) ? <img className='food-type-icon' src={vegaIcon} alt="Vegetariánus"/> : null}
            </p>
            <div className='food-info'>
                <p className='food-description'>{description}</p>
                <p className='food-price'>{price} Ft</p>

                {
                    (globalState.total + price <= 20000)
                        ? <div className='order-button active' onClick={() => globalActions.addItemToCart(name, price)} >Kosárba</div>
                        : <div className='order-button disabled' >Kosárba</div>
                }
            </div>


        </div>
    )
}

export default MenuItem
