
import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

// 👇️ IMPORTANT: make sure to specify correct ID
// must be the ID of the div element in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
