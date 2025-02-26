import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { createView } from './Factory';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const View = createView;
root.render(
  <React.StrictMode>
    <View />
  </React.StrictMode>
);

// npx create-react-app my-app --template typescript
reportWebVitals();
