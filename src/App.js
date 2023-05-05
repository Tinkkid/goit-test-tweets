import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "@emotion/react";
import theme from "./common/theme";
import { fetchUser } from "./services/user-api";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Tweets = lazy(() => import("./pages/Tweets/Tweets.jsx"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

fetchUser();

export default App;
