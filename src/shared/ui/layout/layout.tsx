import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutProps } from './types';

export const Layout: React.FC<LayoutProps> = ({ navbar, sidebar }) => {
  return (
    <>
      {navbar && <header className='h-24 bg-dark'>{navbar}</header>}
      <main className='container flex flex-col justify-between lg:flex-row pt-10 gap-10'>
        {sidebar && <aside className='max-w-sm lg:pt-20'>{sidebar}</aside>}
        <Outlet />
      </main>
    </>
  );
};
