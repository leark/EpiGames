import React from 'react';
import GameControl from './GameControl';
import Header from './Header';
import '../index.css';

function App() {
  return (
   <React.Fragment>
    <Header />
    <div class="container">
       <GameControl />
    </div>
   </React.Fragment>
  );
}

export default App;
