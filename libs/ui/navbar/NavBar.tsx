import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { Avatar } from '../avatar/Avatar';

export const NavBar: React.FC = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Home</a>
      </div>

      <select className="select bg-primary max-w-xs" data-choose-theme>
        <option disabled selected>
          Theme
        </option>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="cupcake">cupcake</option>
        <option value="night">night</option>
      </select>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <Avatar />
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
