import React from 'react';
import './BotonesSwipe.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';
import swal from 'sweetalert';

function noVa(){
    swal("Es un botón falso");
};

function BotonesSwipe() {

    return (
        <div className="botonesSwipe">
            <IconButton className="botonesSwipe__replay">
                <ReplayIcon fontSize="large" onClick={noVa} />
            </IconButton>

            <IconButton className="botonesSwipe__close">
                <CloseIcon fontSize="large" onClick={noVa}/>
            </IconButton>

            <IconButton className="botonesSwipe__star">
                <StarIcon fontSize="large" onClick={noVa} />
            </IconButton>

            <IconButton className="botonesSwipe__fav">
                <FavoriteIcon fontSize="large" onClick={noVa}/>
            </IconButton>

            <IconButton className="botonesSwipe__flash">
                <FlashOnIcon fontSize="large" onClick={noVa}/>
            </IconButton>
            
        </div>
    )
}



export default BotonesSwipe
