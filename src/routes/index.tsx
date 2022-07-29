import React from 'react';
import Layout from '@/components/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from '@/components/MainPage';
import AddPage from '@/components/AddPage';

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/main" />} />
      <Route element={<Layout />}>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/add" element={<AddPage />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
