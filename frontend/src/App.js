import { Col, Container, Row } from 'react-bootstrap';
import './App.scss'
import './MouseGuard.scss'
import Sheet from './components/MouseGuard/Sheet';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Recruitment from './components/MouseGuard/Recruitment';

function App() {
  return (
    <div className="App">
      <Container>
          <Router>
            <Switch>
              <Route path="/recruitment" component={Recruitment} />
              <Route path="/" component={Sheet} />
            </Switch>
          </Router>
      </Container>

    </div>
  );
}

export default App;
