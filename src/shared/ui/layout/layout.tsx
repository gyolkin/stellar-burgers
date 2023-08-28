import { Outlet } from 'react-router-dom';
import { LayoutProps } from './types';

export const Layout: React.FC<LayoutProps> = ({ navbar, sidebar }) => {
  return (
    <>
      {navbar && <header className='h-16 lg:h-24 bg-dark'>{navbar}</header>}
      <main className='container pt-2 lg:pt-10'>
        {sidebar ? (
          <div className='flex flex-col lg:flex-row lg:pt-20 gap-10'>
            <aside className='basis-1/3'>{sidebar}</aside>
            <Outlet />
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
};
