import "./App.css";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Test from "./pages/Test";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="detailpage" element={<DetailPage />}></Route>
        <Route path="test" element={<Test />}></Route>
      </Routes>
    </div>
  );
}

export default App;
