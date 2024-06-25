import logo from "./logo.svg";
import "./App.scss";

import Home from "./views/Jobs/Home.js";
import Nav from "./views/Nav/Nav.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./views/HomePages.js";
import ReactForm from "./views/Jobs/RectForm.js";
import ListUser from "./views/todo/ListUser.js";
import QuizApp from "./views/Lap3/QuizApp.js";

/*
 * 2 components : class component / function component (function , arrow function)
 *
 *
 **/

function App() {
  // const App = () => {}
  return (
    <>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Nav></Nav>
            <img src={logo} className="App-logo" alt="logo" />
            <Routes>
              <Route path="/" exact element={<HomePages></HomePages>}></Route>
              <Route path="/jobs" element={<ReactForm></ReactForm>}></Route>
              <Route path="/todo" element={<ListUser></ListUser>}></Route>
              <Route path="/about" element={<Home></Home>}></Route>
              <Route path="/quiz" element={<QuizApp></QuizApp>}></Route>
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </>
  );
}

export default App;
