import { Route, Routes } from "react-router-dom";
import { AboutPage, HomePage } from "../components";

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
