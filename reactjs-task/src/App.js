import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Stuff from './pages/Stuff';
import Contact from './pages/Contact';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Main />
      <main>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/stuff">
        <Stuff />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      </main>
    </div>
  );
}

export default App;