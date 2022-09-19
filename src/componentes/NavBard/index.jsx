import React from "react";



function NavBard() {
  return (
    <div className="container">
        <nav className="nav">
            <div className="nav__brand">
                <a className="nav__link" href="#">mimarca</a>
            </div>
            <ul className="nav__list">
                <li>
                    <a className="nav__link" href="#">categoria</a>
                </li>
                <li>
                    <a className="nav__link" href="#">categoria</a>
                </li>
                <li>
                    <a className="nav__link" href="#">categoria</a>
                </li>
            </ul>
            
        </nav>
    </div>
  )
}

export default NavBard