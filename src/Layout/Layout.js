import React from 'react'
import Aux from '../hoc/Aux'
import handyman from './handyman-doing-carpentry-job.jpg'
import './Layout.css'
import Header from '../Header/Header'

export const Component = (props) => {
    return(
        <Aux>
            <Header />
            <section className="Services">
                <h2>INTERIOR AND EXTERIOR SERVICES</h2>
                <div>
                    <ul>
                        <li>CARPENTRY</li>
                        <li> • </li>
                        <li>ELECTRICAL</li>
                        <li> • </li>
                        <li>PAINTING</li>
                        <li> • </li>
                        <li>CONCRETE</li>
                        <li> • </li>
                        <li>PLUMBING</li>
                        <li> • </li>
                        <li>CEILING FANS</li>
                        <li> • </li>
                        <li>ROOF REPAIRS</li>
                        <li> • </li>
                        <li>FENCING</li>
                        <li> • </li>
                    </ul>
                    <ul>
                        <li>KITCHEN</li>
                        <li> • </li>
                        <li>FLOORING</li>
                        <li> • </li>
                        <li>BATHROOM</li>
                        <li> • </li>
                        <li>PATIO COVER / DECK</li>
                        <li> • </li>
                        <li>POOL REPAIRS</li>
                        <li> • </li>
                        <li>CLOSET / YARD SHED</li>
                        <li> • </li>
                        <li>WINDOWS</li>
                        <li> • </li>
                        <li>DOOR</li>
                        <li> • </li>
                    </ul>
                </div>
            </section>
            <section className="Hype">
                <div>
                    <h3>Whatever home repair and improvement plans you have, give MR. WIZARD a call today.</h3>
                    <img src={handyman} className="handyman-img img-responsive" alt="handyman-img" />
                    <h4>DON’ T BE THIS GUY! • CALL HARLAN @ (480) 993-4414 TODAY!!</h4>
                    <h6><i>My handyman and construction skills will make your problems disappear!!!</i></h6>
                </div>
            </section>
            <footer>
                <span>NOT A LICENSED AZ CONTRACTOR • ALL SERVICES PROVIDED AS A HANDYMAN • REPAIRMAN</span>
            </footer>
        </Aux>
    )
}

export default Component