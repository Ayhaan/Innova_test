import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Preloader from './composants/preloader';
import Home from './composants/home'
import About from './composants/about'
import Service from './composants/service'
import Portfolio from './composants/portfolio'
import Contact from './composants/contact'
import Footer from './composants/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container-fluid">
          <header className="box-header">
            <div className="box-logo">
              {/* <a href=""></a>  */}
              <Link className="test2" to="/"><img style={{marginLeft : "20px"}} src="image/graphBanner2.jpg" width="63" alt="Logo" /></Link>
            </div>
            <a className="box-primary-nav-trigger" href="###">
              <span className="box-menu-text">Menu</span><span className="box-menu-icon"></span>
            </a>
          </header>

          <nav>
            <ul className="box-primary-nav">
              <li className="box-label">About me</li>

              <li className="test2"><Link to='/'> home </Link></li>
              <li className="test"><Link to='/about'> About </Link></li>
              {/* <i className="ion-ios-circle-filled color"></i> */}
              <li className="test"><Link to='/service'> service </Link></li>
              <li className="test"><Link to='/portfolio'> portfolio </Link></li>
              <li className="test"><Link to='/contact'> contact me </Link></li>

              <li className="box-label">Follow me</li>

              <li className="box-social"><a href="###"><i className="ion-social-facebook"></i></a></li>
              <li className="box-social"><a href="###"><i className="ion-social-instagram-outline"></i></a></li>
              <li className="box-social"><a href="###"><i className="ion-social-twitter"></i></a></li>
              <li className="box-social"><a href="###"><i className="ion-social-dribbble"></i></a></li>
            </ul>
          </nav>
        </div>
            <Switch>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/service">
                  <Service />
              </Route>
              <Route path="/portfolio">
                  <Portfolio />
              </Route>
              <Route path="/contact">
                  <Contact />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
            </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
