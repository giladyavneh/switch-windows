import React from 'react';
import logo from './logo.svg';
import './App.css';
import SwitchWindows from './SwitchWindows/SwitchWindows';

function App() {
  return (
    <SwitchWindows gridTemplate={{gap:"10px"}}>
      <div>
        <span>
          <p>
          <li className="foo drag-handler"></li>
          <li className="foo"></li>
          </p>
          </span>
      </div>
      <div className="boo"></div>
      <div></div>
    </SwitchWindows>
  );
}

export default App;
