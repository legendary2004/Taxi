import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ModalContextProvider from './contexts/ModalContext';
import DarkLightSwitchContextProvider from './contexts/DarkLightSwitchContext';
import LoginContextProvider, { LoginContext } from './contexts/LoginContext';
import BookingContextProvier from './contexts/BookingContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DarkLightSwitchContextProvider>
    <ModalContextProvider>
      <BookingContextProvier>
        <LoginContextProvider>
          <App />
        </LoginContextProvider>
      </BookingContextProvier>
    </ModalContextProvider>
  </DarkLightSwitchContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
