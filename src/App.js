import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import AboutMe from './components/pages/AboutMe';
import AddPost from './components/pages/AddPost';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  
  
  return (
    <>
    <Router>
       <Navbar />
       <Switch>
   
          <Route path='/' exact component={Home} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/about-me' exact component={AboutMe} />
          <Route path='/add-post' exact component={AddPost} />
          
        
       </Switch>
        <Footer />
    </Router>
        
    </>
  );
}

export default App;
