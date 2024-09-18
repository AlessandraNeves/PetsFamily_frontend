import * as React from 'react'
import "./style.css"
import banner from "../assets/img/banner_pets_family.png"


export default function NavBar() {

    return (
        <div>
            <nav className="nav">
                <a href="/">
                    <img className="banner" src={banner} alt="Banner"/>
                </a>
                <ul>
                    <li>
                        <a href="/tutor">Tutor</a>
                    </li>
                    <li>
                        <a href="/pets">Pets</a>
                    </li>
                    <li>
                        <a href="/medicines">Medicamentos</a>
                    </li>
                    <li>
                        <a href="/vaccines">Vacinas</a>
                    </li>
                    {/* <li>
                        <a href="/signin">Entrar</a>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}
