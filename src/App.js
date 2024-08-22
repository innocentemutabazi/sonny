import React, { useState } from 'react';
import OpeningScreen from './components/OpeningScreen';
import WishesScreen from './components/WishesScreen';

function App() {
  const [showWishes, setShowWishes] = useState(false);

  const handleContinue = () => {
    setShowWishes(true);
  };

  return (
    <div className="App">
      {showWishes ? <WishesScreen /> : <OpeningScreen onContinue={handleContinue} />}
    </div>
  );
}

export default App;
