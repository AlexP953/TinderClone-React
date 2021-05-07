import React, {Component} from 'react';
import './Perfil.css';
import firebase from 'firebase';
import swal from 'sweetalert';



class Perfil extends React.Component{

        constructor(props){
            super(props);

            this.state = {
                nombre:'',
                url:''
            }
            this.onChange=this.onChange.bind(this);
            this.enviarABD = this.enviarABD.bind(this);
        }

        

onChange(e){
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
        [name]:value,
    });
    console.log(this.state);

    // para subir a la BBDD seria this.state.nombre o this.state.loOtro
}
enviarABD(e){
    // no se envia el form pero se guardan los datos
    e.preventDefault(); 
    console.log('Se envian los datos ' + JSON.stringify(this.state));
    const database = firebase.firestore();
    const userRef = database.collection('personas').add({
      nombre: this.state.nombre,
      url: this.state.url
    });
    this.setState({
        nombre: '',
        url: ''
      });
      swal("Bien!", "Perfil creado!", "success");
}

//

 render(){
    return (
        <div className="perfil">
            <p className="textoIntro"> Aquí editaras tu perfil, pero como es una web de prueba, crea perfiles falsos!</p>

            <form onSubmit={this.enviarABD}>
                <label>Nombre</label>
                <input required  name="nombre" value={this.state.nombre} onChange={this.onChange} />

                <label>Img</label>
                <input className="inputName" required minLength="10" type="file" accept=".jpg,.png" name="url" onChange={this.onChange}/>

                <button className="bottonEnvio" type="submit">Enviar
                </button>
            </form>
        </div>
    )
}
}
export default Perfil
