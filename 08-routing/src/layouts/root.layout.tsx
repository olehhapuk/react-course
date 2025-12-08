import { getAboutPath, getHomePath } from '@/constants/routes';
import { NavLink, Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <div className="flex min-h-dvh max-h-dvh gap-2 items-stretch">
      <nav className="min-w-60 shrink-0 flex flex-col gap-2 border-r max-h-full">
        <NavLink to={getHomePath()} className="[&.active]:font-bold underline">
          Home
        </NavLink>
        <NavLink to={getAboutPath()} className="[&.active]:font-bold underline">
          About
        </NavLink>
      </nav>

      <div className="grow max-h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
