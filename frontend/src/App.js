import "./App.css"
import Home from "./components/Home/Home";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Note from "./components/Note/Note";
import Notes from "./components/Notes/Notes";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<Note />}/>
        <Route path="/notes" element={<Notes />} />
      </Routes>
     

      </BrowserRouter>
    </div>
  );
}

export default App;
