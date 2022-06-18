import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import './styles.css';

function App() {

  const cards = data.map(props => {
    return (
      <Card {...props} />
    );
  });

  return (
    <div>
      <Navbar />
      {cards}
    </div>

  );
}

export default App;
