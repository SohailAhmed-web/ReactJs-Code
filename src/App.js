import { Component } from 'react';
import './App.css';


function MyComponent({nameForClass, name, income=10}) {
  return( 
  <>
  <div className={nameForClass}>
    {name}: ${income}</div>
    <hr/>
    </>
  );
}
function App() {
  return (
  <div>Hello <MyComponent name={"Asad"} nameForClass="div1" income={3000}/> 
  <MyComponent name={"Atif"}nameForClass="div2"  /> 
  <MyComponent name={"Arif"}nameForClass="div3" income={4000}/> 
   Guys</div>
  );
}

export default App;
