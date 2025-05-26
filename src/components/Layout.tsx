
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 transition-colors duration-300">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
