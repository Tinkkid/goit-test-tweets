import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Cards = lazy(() => import("./pages/Cards/Cards.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
