import BaseLayout from '@/components/Layout/BaseLayout';
import AddSchedule from '@/pages/AddSchedule';
import Scedule from '@/pages/Scedule';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Scedule />} />
      </Route>
      <Route element={<BaseLayout />}>
        <Route path="/add" element={<AddSchedule />} />
      </Route>
    </Routes>
  );
};

export default Router;
