
import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TarjetasTinder from './TarjetasTinder';
import BotonesSwipe from './BotonesSwipe';
import ListadoChats from './ListadoChats';
import Perfil from './Perfil';
import ChatIndividual from './ChatIndividual';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/chat/:persona">
            <Header botonRetroceder="/chats" />
            <ChatIndividual/>
          </Route>

          <Route path="/perfil">
            <Header botonRetroceder="/" />
            <Perfil/>
          </Route>

          <Route path="/chats">
            <Header botonRetroceder="/" />
            <ListadoChats/>
          </Route>

          <Route path="/">
            <Header />
            <TarjetasTinder />
            <BotonesSwipe />
          </Route>

        </Switch>
      </Router>


      </div>
  );
}

export default App;
