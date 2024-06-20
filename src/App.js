import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Contactus from './Components/Contactus/Contactus.js';

function App() {
  return (
    <div className=" App ">
     <Header name="test1" />
     <Body name="test2"></Body>
     {/* <Contactus></Contactus> */}
    </div>
  );
}

export default App;
