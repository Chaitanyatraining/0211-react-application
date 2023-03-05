import './App.css';
import DemoComp from './DemoComp';
import FunctionComp from './Components/FunctionComp';
import ClassComp from './Components/ClassComp';
import StylingComp from './stylings/StylingComp';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'


import Header from './Components/Header';
import UserlistandKeys from './Components/UserlistandKeys';
import RoutingComp from './Components/RoutingComp';
import React from 'react';
import CompB from './Components/Hooks/useContexthook/CompB';
import CompA from './Components/Hooks/useContexthook/CompA';

export const usercontext = React.createContext();

function App() {
  return (
   <div className='App'>
    <Header />
    <usercontext.Provider value={"Reactjs Training"}>
      <CompA  />
    </usercontext.Provider>
     <RoutingComp /> 

    {/* <UserlistandKeys /> */}
      {/* <DemoComp />
      <FunctionComp courseName="ReactJs" duration="3 Months" />
      <ClassComp productName="Macbook" price="80000"  /> */}
      {/* <StylingComp /> */}

   </div>
 
  );
}

export default App;
