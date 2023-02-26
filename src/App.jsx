import { Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import Home from "./Pages/Home";
import Post from "./Pages/Post";

import "./App.css";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

function App() {
  const [postName, setPostName] = useState({ name: "Articles" });
  return (
    <div className="App">
      <AppContext.Provider value={postName}>
        <h1>App Components</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/articles">Articles</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Post />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
