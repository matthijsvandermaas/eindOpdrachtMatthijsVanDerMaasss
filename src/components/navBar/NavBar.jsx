// eslint-disable-next-line no-unused-vars
import React, {useRef, useState, useContext, useEffect} from 'react';
import './navbar.css';
import {NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext.jsx";

function Navbar() {
    const hetProcesRef = useRef(null);
    const algemene_infoRef = useRef(null);
    const updateProfileRef = useRef(null);
    const {isAuth, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    const handleLogout = () => {
        logout();
        navigate('/');
    };
    const scrollToHetProces = () => {
        hetProcesRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    };
    const scrollToAlgemene_info = () => {
        algemene_infoRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    };

    const scrollToUpdateProfile = () => {
        updateProfileRef.current.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    };

    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        setRole(storedRole || '');
    }, []);

    const isBrewerOrAdmin = role === 'ROLE_BREWER' || role === 'ROLE_ADMIN';

    const isAdmin = role === 'ROLE_ADMIN';

    const [submenuStatus, setSubmenuStatus] = useState({
        isSubmenuOpen1: false,
        isSubmenuOpen2: false,
        issSubmenuOpen3: false,
    });
    const toggleSubmenu = (submenuNumber) => {
        setSubmenuStatus((prevStatus) => ({
            ...prevStatus,
            [`isSubmenuOpen${submenuNumber}`]: !prevStatus[`isSubmenuOpen${submenuNumber}`],
        }));
    };
    return (
        <>
        <div className="dropdown-content  ">
            <ul className="navList background ">
                <li>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/inschrijfformulier">Inschrijven</NavLink>
                    {isAuth ? (
                            <NavLink to="/home" onClick={handleLogout}> uitloggen </NavLink>)
                        :
                        (<NavLink to="/signIn">Inloggen</NavLink>)}
                    {isAdmin && (<div className="submenu" onClick={() => toggleSubmenu(3)}>
                        <NavLink to="/all_profiles">profielen🞃</NavLink>
                        {submenuStatus.isSubmenuOpen3 && (
                            <div className="submenu-content">
                                <NavLink to="/all_profiles#updateProfile"
                                         onClick={scrollToUpdateProfile}>Gebruiker wijzigen</NavLink>

                            </div>

                        )}
                    </div>
                    )}
                    {isBrewerOrAdmin && (
                        <NavLink to="/inschrijfformulier_product">Bier toevoegen</NavLink>
                        )}
                    {isBrewerOrAdmin && (
                        <NavLink to="/add_image">foto toevoegen</NavLink>
                        )}
                        <NavLink to="/mijn_bieren">Mijn bieren</NavLink>
                        <NavLink to="/alle_producten">Alle Bieren</NavLink>
                        <div className="submenu" onClick={() => toggleSubmenu(2)}>
                    <NavLink to="/Productie_informatie">Hoe maak je bier🞃</NavLink>
                    {submenuStatus.isSubmenuOpen2 && (
                        <div className="submenu-content">
                            <NavLink to="/Productie_Informatie#algemene-informatie"
                                     onClick={scrollToAlgemene_info}>Algemene Informatie</NavLink>
                            <NavLink to="/Productie_Informatie#het-proces" onClick={scrollToHetProces}>Het
                                brouw proces</NavLink>
                        </div>
                    )}
        </div>
        <NavLink to="/feedback">Geef ons je feedback?</NavLink>
        <NavLink to="/news"> Bier nieuws</NavLink>
        <NavLink to="/drankorgel"> Het Drankorgel</NavLink>
        </li>
</ul>
</div>
</>)
    ;
}

export default Navbar;
