import {Home,Singlehotalpage,SearchResultPage} from "./pages";
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
          </Routes>
    </div>
  );
}

export default App;
