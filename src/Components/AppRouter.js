import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Bags from './Bags';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bags' element={<Bags />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
