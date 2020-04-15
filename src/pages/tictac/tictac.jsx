import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/footer';
import Game from '../tictac/components/game/game.jsx';

import '../../_assets/css/styles.css';
import './styles.css';

function App() {
  return (
    <div >
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;