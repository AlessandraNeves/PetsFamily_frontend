
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_CLIENT_ID } from "./contexts/constants"
import { jwtDecode } from 'jwt-decode';

import "./global.css";
import banner from "./assets/img/banner_pets_family.png";

export default function Navbar() {
    const [ user, setUser ] = useState({})
    const navigate = useNavigate(); // Obtenha o histórico

    function handleCallBackResponse(response) {
        try {
            const userObject = jwtDecode(response.credential);
            setUser(userObject);

        } catch (error) {
            console.error("Error decoding JWT:", error);
        }
    }
  
    function handleSignIn() {
        google.accounts.id.prompt(); 
        console.log("passei");
    }

    function handleSignOut(event) {
        event.preventDefault(); 
        setUser({});
        navigate('/');
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id: LOGIN_CLIENT_ID,
          callback: handleCallBackResponse
        });
    
      }, []);

    return (
        <div>
            <header >
                <div className="user-info">
                    {Object.keys(user).length !== 0 ? (
                        <>
                            <img src={user.picture} alt="User" />
                            <span>{user.name}</span>
                            <button onClick={handleSignOut}>Sair</button>
                        </>
                    ) : (
                        <button onClick={handleSignIn}>Entrar</button>
                    )}
                </div>
            </header>
            <nav className="nav">
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
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <Link to="/About">Cuidados Pet Family</Link>
                        </li>
                        <li>
                            <Link to="/About">Sobre adoção</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </div>
    );
}