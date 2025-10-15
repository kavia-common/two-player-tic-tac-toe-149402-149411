import React from 'react';
import './App.css';
import Game from './components/Game';

// PUBLIC_INTERFACE
function App() {
  /** Root application component rendering the Tic Tac Toe Game. */
  return (
    <div className="App">
      <main className="ocean-app">
        <Game />
      </main>
    </div>
  );
}

export default App;
