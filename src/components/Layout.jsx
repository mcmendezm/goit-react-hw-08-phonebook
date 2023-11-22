import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { MenuBar } from './AppBar/MenuBar';

export const Layout = () => {
  return (
    <div>
      <MenuBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
