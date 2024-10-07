import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Tours from "./routes/Tours";
import About from "./routes/About";
import Home from "./routes/Home";
import Layout from "./Layout";
import NotFound from "./NotFound";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<Home />} />
            <Route path="tours" element={<Tours />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
