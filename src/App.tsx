import React, { FC, useMemo } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Auth from './pages/auth/Auth';
import {AuthStore} from "./pages/auth/store";

import MainPage from "./pages/main/Main";

const App: FC = () => {
  const store = useMemo(() => AuthStore.create(), []);

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/auth" element={<Auth store={store} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
