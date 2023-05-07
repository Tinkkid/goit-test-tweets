import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Tweets = lazy(() => import('./pages/Tweets/Tweets.jsx'));

function App() {
  return (
    <Routes basename="/goit-test-tweets">
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
