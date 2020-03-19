import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="slogan">RESTAURANT LAKAY</div>
            <div className="menu_bar">
                <ul>
                    <li className="list_menu"><Link to="/">Accueil</Link></li>
                    <li className="list_menu"><Link to="/Menu_Plat">Menu Plat</Link></li>
                    <li className="list_menu"><Link to="/Plat">Plat</Link></li>
                    <li className="list_menu"><Link to="/Contact">Contact</Link></li>
                    <li className="list_menu"><Link to="/A_Propos">A Propos</Link></li>
                </ul>
            </div>
            <div className="container" />
        </div>
    )
}

export default Header

// import React, { Component } from 'react'

// class Header extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
            
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <div className="slogan">RESTAURANT LAKAY</div>
//                 <div className="menu_bar">
//                     <ul>
//                         <li className="list_menu">Accueil</li>
//                         <li className="list_menu">Menu Plat</li>
//                         <li className="list_menu">Plat</li>
//                         <li className="list_menu">Contact</li>
//                         <li className="list_menu">A Propos</li>
//                     </ul>
//                 </div>
//                 <div className="container" />
//             </div>
//         )
//     }
// }

// export default Header
