import React from 'react'
import './Category.css'
import  '../MenuItem/MenuItem.css'

import MenuItem from "../MenuItem/MenuItem";
import Navbar from "../Navbar/Navbar";
import spicyIcon from '../../static/spicy.svg'
import vegaIcon from '../../static/vega.svg'


const Category = ({props, menu}) => {

    const urlPrompt = props.match.params.category
    let matches = []

    getMatches()

    function getMatches () {
        menu.map(item => {
            if(item.category === urlPrompt){
                matches.push(item)
            }
        })
    }

    return(
        <div >
            <Navbar/>
            {
                matches.map(({id, description, name, price, spicy, vegatarian}) =>
                    <MenuItem key={id}
                              id={id}
                              description={description}
                              name={name}
                              price={price}
                              spicy={spicy}
                              veg={vegatarian}
                    />
                )
            }
            <div className='legends'>
                <img className='food-type-icon' src={spicyIcon} /> <p>Csipos</p>
                <img className='food-type-icon' src={vegaIcon} /> <p>Vegetarianus</p>
            </div>
        </div>
    )
}

export default Category
