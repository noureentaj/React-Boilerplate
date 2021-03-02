import React from 'react';
import './styles/App.css';
import  StickyHeadTable from './components/First';
import  Canvas from './components/Canvas';

function App() {
  return (
    <div>
      {/* <h1>Stardog and Graph PoC</h1> */}
      <Canvas></Canvas>
      {/* <StickyHeadTable></StickyHeadTable> */}
    </div>
  );
}

export default App;
