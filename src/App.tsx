import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/loayout";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route element={<HomeLayout />} path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
