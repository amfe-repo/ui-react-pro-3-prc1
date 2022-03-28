//En esta clase es en donde añadiremos nuestras rutas, las cuales utilizaremos a nivel global.

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Login/LoginPage.jsx";
import Register from "./Components/Register/Register.jsx";
import RegisterBussiness from "./Components/Register/RegisterBussiness.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Main from "./Components/Main/Main.jsx";
import Home from "./Components/App/App.jsx";
import JobPostedView from "./Components/JobPostedView/JobPostedView";
import CategorieView from "./Components/CategorieView/CategorieView";
import PostJob from "./Components/PostJob/PostJob";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="elementos" element={<Main />} />
        <Route path="barra" element={<Navbar />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register/>}/>
        <Route path="bussiness" element={<RegisterBussiness/>}/>
        <Route path="job" element={<JobPostedView />} />
        <Route path="jobs-categories" element={<CategorieView />} />
        <Route path="post-job" element={<PostJob />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
