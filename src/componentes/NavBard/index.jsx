import React from "react";
import CardWidget from "../CardWidget";
import { NavLink } from "react-router-dom"



export const NavBard = () =>{
  return (
    <div className="container">
        <nav className="nav">
            <div className="nav__brand">
                <NavLink className="nav__link" to="/">mimarca</NavLink>
            </div>
            <ul className="nav__list">
                <li>
                    <NavLink className="nav__link" to="/categoria/film">pizzas</NavLink>
                </li>
                <li>
                    <NavLink className="nav__link" to="/categoria/burge">hamburguesas</NavLink>
                </li>
                <li>
                    <NavLink className="nav__link" to="cart"><CardWidget/>
                    </NavLink>
                </li>
            </ul>
            
        </nav>
    </div>
  )
}

export default NavBard