import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProtectRoute from './Components/Styles/auth/ProtectRoute';

const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Chat = lazy(() => import("./Pages/Chat"));
const Groups = lazy(() => import("./Pages/Groups"));
const NotFound = lazy(() => import("./Pages/NotFound"));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<ProtectRoute user={user}><Home /></ProtectRoute>} />
          <Route path='/chat' element={<ProtectRoute user={user}><Chat /></ProtectRoute>} />
          <Route path='/groups' element={<ProtectRoute user={user}><Groups /></ProtectRoute>} />
          <Route path='/login' element={<ProtectRoute user={!user} redirect='/'><Login/></ProtectRoute>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
