import { JSX, useState } from "react";
import { App, ViewProps } from "./App";

export interface ControllerProps{
    View(props: ViewProps): JSX.Element
  }

export function Controller({ View }: ControllerProps) {
  const [entrada1, setEntrada1] = useState("");
  const [entrada2, setEntrada2] = useState("");
  const [entrada3, setEntrada3] = useState("");
  const [entrada4, setEntrada4] = useState("");

  function registrar() {
    const form = {
      Entrada1: entrada1,
      Entrada2: entrada2,
      Entrada3: entrada3,
      Entrada4: entrada4,
    }
    localStorage.setItem("Formulário", JSON.stringify(form));
  }

  function limpar() {
    localStorage.removeItem("Formulário");
  }

  function exibir() {
    const dados = localStorage.getItem("Formulário");

  if (dados) {
    const form = JSON.parse(dados);
    const exibirElement = document.getElementById('exibir')!;
    
    exibirElement.innerHTML = `
      <h3>Dados do Formulário</h3>
      <p><strong>Entrada 1:</strong> ${form.Entrada1}</p>
      <p><strong>Entrada 2:</strong> ${form.Entrada2}</p>
      <p><strong>Entrada 3:</strong> ${form.Entrada3}</p>
      <p><strong>Entrada 4:</strong> ${form.Entrada4}</p>
    `;
  } else {
      document.getElementById('exibir')!.textContent = 'Nenhum dado encontrado.';
    }
  }

  return <View entrada1={entrada1} setEntrada1={setEntrada1} setEntrada2={setEntrada2} setEntrada3={setEntrada3} setEntrada4={setEntrada4} registrar={registrar} limpar={limpar} exibir={exibir}  ></View>;
}