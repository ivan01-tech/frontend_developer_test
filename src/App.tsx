import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/loayout";
import Home from "./pages/Home";
import Post from "./components/Post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route element={<HomeLayout />} path="/">
        <Route index element={<Home />} />
        <Route path="posts/:postId" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
