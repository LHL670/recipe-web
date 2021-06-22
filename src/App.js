import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './home';
import TodoApp from './todoApp';
import Router_h from './router';
import SignIn from './login';
import RecipeAPP from './RecipeAPP';
import Introduction from './introduction';

function App() 
{
  return (
    <Router>
      <div className="App">
        
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route exact path="/reciepe" >
          <Router_h/>
          <RecipeAPP/>
        </Route>
        <Route exact path="/intro" >
          <Router_h/>
          <Introduction/>
        </Route>
        <Route path="/login" >
          <Router_h/>
          <SignIn/>
        </Route>
        <Route path="/todolist" >
          <Router_h/>
          <TodoApp/>
        </Route>
      </div>
    </Router>
);
}

export default App;