import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Menu_plat from './Menu_Plat'
import Plat from './Plat'
 


function Resto() {
    return (
        <div>        
            <BrowserRouter>
                <Header/>
                <Route path="/Menu_plat" component={Menu_plat}/>
                <Route path="/Plat" component={Plat} />
            </BrowserRouter>
        </div>
    )
}

export default Resto
