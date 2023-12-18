import Header from "../header/Header";
import Main from "../main/Main";
import About from "../about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
