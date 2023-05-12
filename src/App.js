import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Tweets = lazy(() => import('./pages/Tweets/Tweets.jsx'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
