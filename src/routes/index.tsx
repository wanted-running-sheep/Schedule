import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SchedulePage from '@/pages/SchedulePage';
import Layout from '@/pages/Layout';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SchedulePage />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
