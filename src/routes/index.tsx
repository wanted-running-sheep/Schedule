import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import { SchedulePage, ScheduleAddPage } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/schedule" />} />
      <Route element={<Layout />}>
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/schedule/add" element={<ScheduleAddPage />}></Route>
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Router;
