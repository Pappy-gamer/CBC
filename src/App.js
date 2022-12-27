import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Character from "./Pages/Character";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path=":characterId"
          element={
            <>
              <Header />
              <Character />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
