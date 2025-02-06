import { Route, Routes } from "react-router-dom";

import { ContactUs } from "./pages/contact-us/contact-us";
import SkinAnalysis from "./pages/skin-analysis/skin-analysis";

function App() {
  return (
    <>
      <Routes>
        <Route path="/skin-analysis" element={<SkinAnalysis />} />
        <Route path="/" element={<SkinAnalysis />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
