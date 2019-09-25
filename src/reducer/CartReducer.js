import React from 'react'
import globalHook from 'use-global-hook'

/**
 Instead of Redux I implemented a more lightweight state management based on Context API. It requires less setup
 and more closer to native React Hooks
 **/

const initialState = {
    cartItems: [],
    total: 0
}


const actions = {

    // Add food item to cart if not exist, otherwise modify the existing one
    addItemToCart: (store, name, price) => {

        const state = store.state.cartItems
        const idx = state.findIndex(item => item.name === name)

        if(idx !== -1){

            const incQty = state[idx].qty + 1

            state.splice(idx, 1,{name: name, qty: incQty, price: price})
            const total = getTotal(state)

            b(store.state, state[idx].price)

            store.setState({ cartItems: state, total: total})

        } else {
            const newItem = state.concat({name: name, qty: 1, price: price})
            const total = getTotal(state)

            store.setState({ cartItems: newItem, total: total+price })
        }

    },

    removeItemFromCart: (store, name) => {
        const state = store.state.cartItems
        const idx = state.findIndex(item => item.name === name)
        const price = state[idx].price

        state.splice(idx, 1)

        store.setState({ cartItems: state, total: store.state.total - price })
    },

    increaseQty: (store, name) => {
        const state = store.state.cartItems
        const idx = state.findIndex(item => item.name === name)

        state.splice(idx, 1, {name: name, qty: state[idx].qty + 1, price: state[idx].price})

        b(store.state, state[idx].price)


        store.setState({ cartItems: state, total: store.state.total + state[idx].price })
    },

    decreaseQty: (store, name) => {
        const state = store.state.cartItems
        const idx = state.findIndex(item => item.name === name)

        state.splice(idx, 1, {name: name, qty: state[idx].qty - 1, price: state[idx].price})

        b(store.state, state[idx].price)

        store.setState({ cartItems: state, total: store.state.total - state[idx].price })
    }

}

function getTotal(state) {

    let total = 0
    state.map(item =>
        total += (item.price * item.qty)
    )

    return total
}

function b(state, price) {
    if(state.cartItems.length > 1 && ( state.total + price >= 10000 )) {
        throw new Error('Exception error')
    }
}



export const useGlobal = globalHook(React, initialState, actions)


