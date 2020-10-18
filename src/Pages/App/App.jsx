import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar'
import Projects from '../../components/Projects/Projects'

class App extends Component {
  state = { 

   }
  render() { 
    return ( 
      <>
        <NavBar />
        <Projects />
      </>
     );
  }
}
 
export default App;