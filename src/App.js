import {Home,Singlehotalpage,SearchResultPage,Order} from "./pages";
import './App.css';
import { Routes,Route } from "react-router-dom";
import { Filter } from "./componentes/Filters";
function App() {
  return (
    <div className="App">
      <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="hotal/:name/:state/:id" element={<Singlehotalpage />}/>
           <Route path="hotal/:destination" element={<SearchResultPage></SearchResultPage>}/>
           <Route path="/finalOrder/:id" element={<Order></Order>}></Route>
          </Routes>
    </div>
  );
}

export default App;
