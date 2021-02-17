import { Col, Container, Row } from 'react-bootstrap';
import './App.scss'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { useState } from 'react';
import Menu from './pages/Menu';
import Welcome from './pages/Welcome';
import Recruitment from './pages/MouseGuard/Recruitment';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container className="content pt-3 pb-4">
          <Switch>
            <Route path="/mg/recruit" component={Recruitment} />
            <Route path="/characters" component={Menu} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Welcome} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
