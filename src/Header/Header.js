import React from 'react'
import logo from '../logo.png'
import Aux from '../hoc/Aux'
import './Header.css'
import Contact from '../Contact/Contact'

export const Header = (props) => {
    return(
        <Aux>
            <header className="App-header animated bounceInLeft">
                <img src={logo} className="App-logo img-responsive" alt="logo" />
                <h1>Mr. Wizard</h1>
                <h4>Home Repair Service</h4>
                <span><i className="fas fa-phone" /> (480) 993-4414</span>
                <Contact />
                <span>North Phoenix • East Valley • Fountain Hills</span>
                <i>Let me handle all your needs for building, repairing, restoring and planning your home projects. </i>
            </header>
        </Aux>
    )
}

export default Header