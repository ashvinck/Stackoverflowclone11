import './App.css';
import BodyLayout from './components/Bodylayout';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <BodyLayout />
        {/* <Switch>
          <Route exactpath='/' component={BodyLayout} />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
