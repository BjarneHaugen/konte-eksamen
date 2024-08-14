import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FrontPage } from "./components/frontpage.jsx";
import { Login } from "./components/login.jsx";
import { NewUser } from "./components/newUser.jsx";
import { PostNew } from "./components/postNew.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <>
      <div className="App">
        <h1>Nyheter!</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Front page</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/newUser"}>New User</Link>
          </li>
          <li>
            <Link to={"/postNew"}>Post New</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/postNew" element={<PostNew />} />
      </Routes>
    </>
  );
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
