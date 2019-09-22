import React from 'react'
import './MenuItem.css'
import spicyIcon from '../../static/spicy.svg'
import vegaIcon from '../../static/vega.svg'
import {useGlobal} from "../../reducer/CartReducer";

const MenuItem = ({id, description, name, price, spicy, veg}) => {

    const [globalState, globalActions] = useGlobal()

    return(
        <div>
            <h1>{name}</h1>
            <h2>{description}</h2>
            <h3>{price} Ft</h3>
            <p>{id}</p>
            {(spicy === 1) ? <img className='food-type-icon' src={spicyIcon} alt="Csipos"/> : null}
            {(veg === 1) ? <img className='food-type-icon' src={vegaIcon} alt="Vegetarianus"/> : null}
            {
                (globalState.total + price <= 20000)
                    ? <button onClick={() => globalActions.addItemToCart(name, price)} >Rendeles</button>
                    : <button disabled='true' >Rendeles</button>
            }

        </div>
    )
}

export default MenuItem
