import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './Pages/About'
import Admin from './Pages/Admin';
import AdminAction from './Pages/AdminAction';
import Blog from './Pages/Blog';
import BlogPost from './Pages/BlogPost';
import Contact from './Pages/Contact';
import Feed from './Pages/Feed';
import Footer from './Footer';
import Header from './Header'
import Home from './Pages/Home'
import Freelancer from'./Pages/Freelancer';
import Portfolio from './Pages/Portfolio';
import PortfolioPiece from './Pages/PortfolioPiece';
import Resources from './Pages/Resources';
import './App.css';

function App() {
  return (
    <>
      <div className='Content'>
        <Router>
          <Route path='/:page' component={Header} />
          <Switch>
            {/* nav links */}
            <Route path='/feed' component={Feed} />
            <Route path='/about' component={About} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/blog/:post' component={BlogPost} />
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/portfolio/:piece' component={PortfolioPiece} />
            <Route path='/resources' component={Resources} />
            <Route path='/contact' component={Contact} />
            <Route path='/admin/:action' component={AdminAction} />

            {/* direct routes */}
            <Route path='/' exact component={Home} />
            <Route path='/email-list' component={Freelancer} />
            <Route path='/freelancer' component={Freelancer} />
            <Route path='/admin' exact component={Admin} />
          </Switch>
        </Router>
      </div>
      <Footer className='Footer' />
    </>
  );
}

export default App;
