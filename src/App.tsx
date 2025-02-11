import { Route, useLocation, Routes } from "react-router-dom";
import ContactUs from "./pages/contact-us/contact-us";
import SkinAnalysis from "./pages/skin-analysis/skin-analysis";
import { langPathOptional } from "./components/elements/langs";

function App() {
  let location = useLocation();

  return (
    <Routes location={location}>
      <Route path={`${langPathOptional}/`} element={<SkinAnalysis />} />
      <Route
        path={`${langPathOptional}/skin-analysis`}
        element={<SkinAnalysis />}
      />
      <Route path={`${langPathOptional}/contact-us`} element={<ContactUs />} />
    </Routes>
  );
}

export default App;
