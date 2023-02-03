import { Route, Routes } from "react-router-dom";
import { HomePage } from "/src/modules/home";
// import { AboutPage } from "/src/modules/about";

export function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="about" element={<AboutPage />} /> */}
      </Routes>
    </>
  );
}
