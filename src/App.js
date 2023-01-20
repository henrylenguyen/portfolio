import { Route, Routes } from "react-router-dom";
import Nav from "./layouts/header/Nav";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home page</>}></Route>
          <Route path="/my-project" element={<>My project page</>}></Route>
          <Route path="/contact" element={<>Contact page</>}></Route>
          <Route path="*" element={<>404 page</>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
