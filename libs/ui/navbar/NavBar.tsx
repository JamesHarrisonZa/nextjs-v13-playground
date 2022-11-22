import { Avatar } from '../avatar/Avatar';
import { ThemeDropdown } from '../theme-dropdown/ThemeDropdown';

export const NavBar: React.FC = () => {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Home</a>
      </div>
      <ThemeDropdown />
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
