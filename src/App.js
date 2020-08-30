import React from 'react';

import MobileViewComponent from './lib'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MobileViewComponent>
        <h1>view</h1>
      </MobileViewComponent>
    </div>
  );
}

export default App;
