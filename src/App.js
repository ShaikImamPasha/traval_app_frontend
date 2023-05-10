import {Home,Singlehotalpage} from "./pages";
import './App.css';
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
           <Route path="/" element={<Home></Home>}></Route>
           <Route path="/singlehotal/:id" element={<Singlehotalpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
