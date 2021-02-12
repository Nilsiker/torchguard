import { Col, Container, Row } from 'react-bootstrap';
import './App.scss'
import './MouseGuard.scss'
import Sheet from './components/MouseGuard/Sheet';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Recruitment from './components/MouseGuard/Recruitment';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container className="content">
          <Switch>
            <Route path="/mg" component={Recruitment} />
            <Route exact path="/" component={Sheet} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
