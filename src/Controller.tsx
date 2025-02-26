import { JSX } from "react";
import { App, ViewProps } from "./App";

export interface ControllerProps{
    View(props: ViewProps): JSX.Element
  }

export function Controller({ View }: ControllerProps) {


    return <View entrada1={"Teste"} entrada2={""} entrada3={""} entrada4={""}  ></View>;
}