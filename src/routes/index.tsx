import AddSchedule from '@/pages/AddSchedule';
import Scedule from '@/pages/Scedule';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Scedule />} />
      <Route path="/add" element={<AddSchedule />} />
    </Routes>
  );
};

export default Router;
