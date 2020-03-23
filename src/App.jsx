import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Home from './pages/Home';
import Rejser from './pages/Rejser';
import Kurser from './pages/Kurser';
import Shop from './pages/Shop';
// import Contact from './pages/Contact';
// import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './pages/Footer';
import Login from './pages/Login';
import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/dykkerrejser" component={Rejser} />
          <Route path="/dykkerkurser" component={Kurser} />
          <Route path="/shop" component={Shop} />
          {/* <Route path="/contactus" component={Contact} /> */}
          {/* <Route path="/aboutus" component={About} /> */}
          <Route path="/footercomp" component={Footer} />
          <Route path="/logincomp" component={Login} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;

