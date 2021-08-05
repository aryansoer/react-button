import React from 'react';
import './App.css';

import { Button } from './components';
import { ButtonType } from './models';

function App() {
  const buttonActionFn = (type: ButtonType) => () =>
    alert(`${type} button was clicked`);

  return (
    <div className="App">
      <Button
        text="Primary"
        type="primary"
        action={buttonActionFn('primary')}
      ></Button>
      <Button
        text="Secondary"
        type="secondary"
        action={buttonActionFn('secondary')}
      ></Button>
      <Button
        text="Danger"
        type="danger"
        action={buttonActionFn('danger')}
      ></Button>
      <Button text="Disabled" disabled></Button>
    </div>
  );
}

export default App;
