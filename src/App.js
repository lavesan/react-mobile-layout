import React from 'react';

import MobileViewComponent from './components/mobile-view'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MobileViewComponent>
        Eu aqui
      </MobileViewComponent>
    </div>
  );
}

export default App;
