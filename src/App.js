import React from 'react';
//GlobalStyle
import GlobalStyled from './components/GlobalStyled'
//import pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactMe from './pages/ContactMe';
import MyWork from './pages/MyWork';
import MovieDetail from './pages/MovieDetail';
import {AnimatePresence} from 'framer-motion'
//Router
import {Switch, Route, useLocation} from 'react-router-dom';



function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <GlobalStyled />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
      <Route path="/" exact>
      <AboutUs />
      </Route>
      <Route path="/contact">
      <ContactMe />
      </Route>
      <Route path="/work/:id">
        <MovieDetail/>
      </Route>
      <Route path="/work" exact>
      <MyWork />
      </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
