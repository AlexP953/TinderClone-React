import { Avatar } from '@material-ui/core';
import React,{useState} from 'react';
import './ChatIndividual.css'

function ChatIndividual() {

    const administrarEnvio = e =>{
        e.preventDefault();
        
        setMensajes([...mensajes,{mensaje:input}]);
        setInput("");
        
    }
    const [input,setInput] = useState("");
    const [mensajes, setMensajes] = useState([
        {
            nombre: 'Maria',
            imagen:"...",
            mensaje:"heyy"
        },
        {
            nombre: 'Maria',
            imagen:"...",
            mensaje:"hola"
        },
        {
            mensaje:"k pasa"
        }
    ]);

    return (
        <div className="chatIndividual">
            <p className="chatIndividual__timestamp"> CONSEGUISTE UN MATCH AYER</p>
            {mensajes.map(mensaje => (
                mensaje.nombre ? (

                    <div className="chatIndividual__mensaje">
                        <Avatar className="chatIndividual__avatar" alt={mensaje.nombre} src={mensaje.imagen} />

                    <p className="chatIndividual__mensaje__texto">{mensaje.mensaje}</p>
                    </div>

            ) : (
                <div className="chatIndividual__mensaje">
                    <div className="chatIndividual__mensaje__propio">{mensaje.mensaje}</div>
                </div>
            )
        
            ))}

            <form className="chatIndividual__input">
                <input className="chatIndividual__input__input" value={input} onChange={e => setInput(e.target.value)} placeholder="Escribe algo"/>
                <button onClick={administrarEnvio} type="submit" className="chatIndividual__input__send">Enviar</button>
            </form>
            
        </div>
    )
}

export default ChatIndividual
