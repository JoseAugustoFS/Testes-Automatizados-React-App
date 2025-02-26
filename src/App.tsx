import React from 'react';
import './App.css';

export interface ViewProps{
  entrada1: string;
  entrada2: string;
  entrada3: string;
  entrada4: string;
}

function App(props: ViewProps) {
  return (
    <div className="App">
      <p>Formulário</p>
      {props.entrada1}
    </div>
  );
}

export { App} ;
