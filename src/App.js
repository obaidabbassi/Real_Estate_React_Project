
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from './Pages/Home';
import Places from "./Pages/Places";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import NoPage from "./Pages/NoPage";
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="places" element={<Places />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />

          <Route path="signin" element={<Signin />} />

          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>



  



    </div>
  );
}

export default App;
