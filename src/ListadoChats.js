import React from 'react'
import ChatPrevisualizacion from './ChatPrevisualizacion'

function ListadoChats() {
    return (
        <div className="listadoChats">
            <ChatPrevisualizacion
                nombre="Maria"
                mensaje="Hola"
                timestamp="Hace 40 seg"
                imgPerfil="" />

            <ChatPrevisualizacion
                nombre="Loles"
                mensaje="Dejame"
                timestamp="Hace 5 seg"
                imgPerfil="https://media.gq.com.mx/photos/5e1653feab1f9200081c6563/16:9/w_720%2cc_limit/tips-para-tinder-y-que-tu-perfil-por-fin-tenga-exito-este-ano.jpg" />

            <ChatPrevisualizacion
                nombre="Juan"
                mensaje="Me debes dinero"
                timestamp="Hace 43 min"
                imgPerfil="https://media.vozpopuli.com/2021/02/Ligones-renuncia-promocionar-comedia-violacion_1051704892_8858668_1020x574-660x371.jpg" />

            
        </div>
    )
}

export default ListadoChats
