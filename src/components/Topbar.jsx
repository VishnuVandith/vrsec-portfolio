import './topbar.css'

import React from 'react'
import { Person, Mail } from '@material-ui/icons'
function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="" className='logo'>
                        Vishnu Vandith G.

                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+91 8247554052</span>

                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>Insta: @vishnuvandithg</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Topbar