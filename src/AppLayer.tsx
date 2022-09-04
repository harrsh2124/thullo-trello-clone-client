import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const AppLayer = () => {
  return (
    <div className="app_layer">
      <Navbar />

      <div className="app_outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayer;
