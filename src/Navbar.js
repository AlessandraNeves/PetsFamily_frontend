
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_CLIENT_ID } from "./contexts/constants"
import { jwtDecode } from 'jwt-decode';

import "./global.css";
import banner from "./assets/img/banner_pets_family.png";

export default function Navbar() {
    const [ user, setUser ] = useState({})

    function handleCallBackResponse(response) {
        try {
            const userObject = jwtDecode(response.credential);
            setUser(userObject);
            const signInDiv = document.getElementById("signInDiv");
            if (signInDiv) {
                signInDiv.hidden = true;
            }
        } catch (error) {
            console.error("Error decoding JWT:", error);
        }
    }

    function handleSignOUt(event) {
        event.preventDefault(); 
        setUser({});
        const signInDiv = document.getElementById("signInDiv");
        if (signInDiv) {
            signInDiv.hidden = false;
        }
    }
  
    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id: LOGIN_CLIENT_ID,
        scope: 'profile',
        callback: handleCallBackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size: "large"}
      );
  
    }, []);

    return (
        <nav className="nav">
            <header >
                {user && 
                    <div className="user-info">
                        <img src={user.picture} alt=""></img>
                        <h3>{user.name}</h3>
                    </div>
                } 
            </header>
            <Link to="/">
                <img className="banner" src={banner} alt="Banner" />
            </Link>
            {Object.keys(user).length !== 0 ? (
                <ul>
                    <li>
                        <Link to="/About">Cuidados Pet Family</Link>
                    </li>
                    <li>
                        <Link to="/About">Sobre adoção</Link>
                    </li>
                    <li>
                        <Link to="/Tutor">Tutor</Link>
                    </li>
                    <li>
                        <Link to="/Pets">Pets</Link>
                    </li>
                    <li>
                        <Link to="/Medicines">Medicamentos</Link>
                    </li>
                    <li>
                        <Link to="/Vaccines">Vacinas</Link>
                    </li>
                    <li>
                        <button onClick={ (e) => handleSignOUt(e)}>Sair</button>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <Link to="/About">Cuidados Pet Family</Link>
                    </li>
                    <li>
                        <Link to="/About">Sobre adoção</Link>
                    </li>
                    <li>
                        <div id="signInDiv">Entrar</div>
                    </li>
                </ul>
            )}
        </nav>
    );
}