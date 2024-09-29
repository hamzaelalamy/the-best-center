import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServicesIT from '../../components/landingPage/EventActualites/Servicesit';
import SeoAct from '../../components/landingPage/EventActualites/SeoAct';
import CommunicationAct from '../../components/landingPage/EventActualites/CommunicationAct';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Servicesit" component={ServicesIT} />
        <Route path="/SeoAct" component={SeoAct} />
        <Route path="/CommunicationAct" component={CommunicationAct} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
