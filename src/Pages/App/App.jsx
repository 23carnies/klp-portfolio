import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import { Route } from 'react-router-dom'

class App extends Component {
  state = { 

   }
  render() { 
    return ( 
      <>
        <NavBar />
        <Route 
        exact path="/projects"
        render={() => (
          <Projects />
        )}
        />
        <Route 
        exact path="/contact"
        render={() => (
          <Contact />
        )}
        />
      </>
     );
  }
}
 
export default App;