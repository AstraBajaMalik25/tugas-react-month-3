import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import UseRefDemo from "@/pages/UseRefDemo";
import PortalModalDemo from "@/pages/PortalModalDemo";
import HOCDemo from "@/pages/HOCDemo";
import RenderPropsDemo from "@/pages/RenderPropsDemo";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useref" element={<UseRefDemo />} />
        <Route path="/portal" element={<PortalModalDemo />} />
        <Route path="/hoc" element={<HOCDemo />} />
        <Route path="/renderprops" element={<RenderPropsDemo />} />

      </Routes>
    </Router>
  );
}

export default App;
