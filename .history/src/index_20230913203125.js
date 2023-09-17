import React from 'react';
import ColorBox from './App';

export default function App(){
  return (
    <section>
      <ColorBox color="red"></ColorBox>
      <ColorBox color="green"></ColorBox>
      <ColorBox color="blue"></ColorBox>
    </section>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
