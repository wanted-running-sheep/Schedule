import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '@/components/@shared/Layout';
import SchedulePage from '@/pages/SchedulePage';
import AddSchedulePage from '@/pages/AddSchedulePage';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SchedulePage />}></Route>
        <Route path="/add" element={<AddSchedulePage />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
