import './App.css';
import DemoComp from './DemoComp';
import FunctionComp from './Components/FunctionComp';
import ClassComp from './Components/ClassComp';
import StylingComp from './stylings/StylingComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import UserlistandKeys from './Components/UserlistandKeys';
import RoutingComp from './Components/RoutingComp';
function App() {
  return (
   <div className='App'>
    <Header />
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
