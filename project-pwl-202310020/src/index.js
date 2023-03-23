import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonalDataForm from './components/PersonalDataForm';
import StickyNotes from './components/StickyNotes';
import Layout from './components/bab2/Layout';
import MultipledataForm from './components/bab2/MultipledataForm';
import Widget1 from './components/bab2/Widget1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <PersonalDataForm />
  <StickyNotes /> */}
  {/* <Layout /> */}
  <Widget1 />
  <MultipledataForm />
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
