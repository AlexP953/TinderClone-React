import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link,useHistory} from 'react-router-dom';


function Header({botonRetroceder}) {
    
    const historial = useHistory();

    return (
        <div className="header">

            {botonRetroceder ? (
                <IconButton onClick= {() => historial.replace(botonRetroceder)}>
                    <ArrowBackIosIcon fontSize="large" className="header__botonRetroceder" />
                </IconButton>

            ) : (

            <Link to="/perfil">
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
            )}

            <Link to="/">
                <img src="https://img.icons8.com/ios/452/--tinder.png" className="header__logo" alt="logo"/>
            </Link>

            <Link to="/chats">
                <IconButton>
                    <MessageIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>

        </div>
    )
}

export default Header
