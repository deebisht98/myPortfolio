import './App.css'
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import NavBar from '../NavBar/NavBar'
import ShowDesktop from './../ShowDesktop/ShowDesktop'

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/skills" component={Skills} />
                <Route path="/contact" component={Contact} />
                <ShowDesktop />
            </Router>
        </div>
    )
}

export default App
