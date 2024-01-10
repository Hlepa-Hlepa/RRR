import React from 'react';
import ReactDOM from 'react-dom/client';
import { UsersTable } from './Components/Table';

const App = () => {
  return (
    <>
      <UsersTable/>
    </>
  );
}

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);