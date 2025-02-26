import React, { useState } from 'react';
import './App.css';

export interface ViewProps{
  entrada1: string;
  setEntrada1(entrada1: string): void;
  setEntrada2(entrada2: string): void;
  setEntrada3(entrada3: string): void;
  setEntrada4(entrada4: string): void;
  registrar(): void;
  limpar(): void;
  exibir(): void;
}

function App(props: ViewProps) {
  
  return (
    <div className="App">
      <h1>Formulário</h1>
      <input name="campo1" onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{props.setEntrada1(event.target.value)}} placeholder="Campo 1" /><br/>
      <input name="campo2" onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{props.setEntrada2(event.target.value)}} placeholder="Campo 2" /><br/>
      <input name="campo3" onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{props.setEntrada3(event.target.value)}} placeholder="Campo 3" /><br/>
      <input name="campo4" onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{props.setEntrada4(event.target.value)}} placeholder="Campo 4" />
      <p>{props.entrada1}</p>
      <button onClick={props.registrar}>Registrar</button>
      <button onClick={props.limpar}>Limpar</button>
      <button onClick={props.exibir}>Exibir</button>

      <p id="exibir"></p>
    </div>
  );
}

export { App } ;
