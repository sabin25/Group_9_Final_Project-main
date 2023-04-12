import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


const resetScreen = document.getElementById('reset-screen');
const resetBtn = document.getElementById('reset-btn');
const closeBtn = document.querySelector('.close-btn');
resetBtn.addEventListener('click', () => {
  resetScreen.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  resetScreen.classList.remove('show');
});