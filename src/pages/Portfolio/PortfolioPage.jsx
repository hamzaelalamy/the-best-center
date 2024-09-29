import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portfolio from '../../components/Portfolio/Portfolio';
import Projet1 from '../../components/Portfolio/Projet1';
import Projet2 from '../../components/Portfolio/Projet2';
import Projet3 from '../../components/Portfolio/Projet3';
import Projet4 from '../../components/Portfolio/Projet4';
import NotFoundPage from '../../components/NotFoundPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/portfolio/projet1" component={Projet1} />
        <Route path="/portfolio/projet2" component={Projet2} />
        <Route path="/portfolio/projet3" component={Projet3} />
        <Route path="/portfolio/projet4" component={Projet4} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
