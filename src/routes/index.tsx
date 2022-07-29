import React from 'react';
import BaseLayout from '@/components/Layout/BaseLayout';
import { TimeContextProvider } from '@/context/TimeContext';
import AddSchedule from '@/pages/AddSchedule';
import Scedule from '@/pages/Schedule';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Scedule />} />
      </Route>
      <Route element={<BaseLayout />}>
        <Route
          path="/add"
          element={
            <TimeContextProvider>
              <AddSchedule />
            </TimeContextProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
