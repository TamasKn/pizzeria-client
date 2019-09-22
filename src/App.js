import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';

import Homepage from "./pages/Homepage/Homepage";
import Category from "./components/Category/Category";

function App() {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        const getData = async () =>{
            const resp = await fetch('http://localhost:2000/menu')
            const data = await resp.json()
            setMenu(data)
        }
        getData().catch(err => console.log(err))

    }, [])

  return (
    <div>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/menu/:category' render={props => <Category props={props} menu={menu}/> } />
        </Switch>

    </div>
  );
}

export default App;
