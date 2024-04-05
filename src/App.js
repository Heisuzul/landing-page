import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Description from './components/Description';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar />      
      <Main />    
      <Searchbar />  
      <Description />      
      <Footer /> 
    </div>
  );
}

export default App;
