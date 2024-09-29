import "./global.css";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_CLIENT_ID } from "./contants/login"
import { jwtDecode } from 'jwt-decode';
import banner from "./assets/img/banner.png";

const NavLinks = ({ isAuthenticated }) => {
    const links = isAuthenticated
        ? [
            { to: "/About", label: "Adoção" },
            { to: "/tutor", label: "Tutor" },
            { to: "/pets", label: "Pets" },
            { to: "/medicines", label: "Medicamentos" },
            { to: "/vaccines", label: "Vacinas" }
        ]
        : [
            { to: "/About", label: "Sobre adoção" }
        ];

    return (
        <ul>
            {links.map(link => (
                <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
};

export default function Navbar() {
    const [user, setUser] = useState({});
    const navigate = useNavigate(); 

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
            <header>
                <div className="user-info">
                    {Object.keys(user).length !== 0 ? (
                        <>
                            <img src={user.picture} alt="User" />
                            <span>{user.name}</span>
                            <div className="login-separator"></div>
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
                <NavLinks isAuthenticated={Object.keys(user).length !== 0} />
            </nav>
        </div>
    );
}