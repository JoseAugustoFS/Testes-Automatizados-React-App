import { App } from "./App";
import { Controller } from "./Controller";


export function createView() {
    return <Controller View={App} />;
}