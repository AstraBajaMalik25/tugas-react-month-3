import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import BasicForm from "@/pages/BasicForm";
import MultiStepForm from "@/pages/MultiStepForm";
import DynamicForm from "@/pages/DynamicForm";
import AdvancedForm from "@/pages/AdvancedForm";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/basic-form" element={<BasicForm />} />
  <Route path="/multi-step-form" element={<MultiStepForm />} />
  <Route path="/dynamic-form" element={<DynamicForm />} />
  <Route path="/advanced-form" element={<AdvancedForm />} />
</Routes>
    </BrowserRouter>
  );
}
