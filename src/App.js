import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login'

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Login />
                    </Route>
                    <Route path="/home">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
