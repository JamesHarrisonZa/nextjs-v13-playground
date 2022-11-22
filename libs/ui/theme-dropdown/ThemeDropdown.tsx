'use client';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { ThemeSvg, DropDownSvg } from '../svgs';

const getThemeOptions = (themeNames: string[]) => {
  return themeNames.map((themeName) => {
    return (
      <li key={themeName}>
        <div
          className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
          data-set-theme={themeName}
          data-act-className="outline"
        >
          <div
            data-theme={themeName}
            className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
          >
            <div className="grid grid-cols-5 grid-rows-3">
              <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                <div className="flex-grow text-sm font-bold">{themeName}</div>{' '}
                <div className="flex flex-shrink-0 flex-wrap gap-1">
                  <div className="bg-primary w-2 rounded"></div>{' '}
                  <div className="bg-secondary w-2 rounded"></div>{' '}
                  <div className="bg-accent w-2 rounded"></div>{' '}
                  <div className="bg-neutral w-2 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });
};

const themeNames = [
  'dark',
  'light',
  'night',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'pastel',
  'fantasy',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'coffee',
  'winter',
];
export const ThemeDropdown: React.FC = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  const themeOptions = getThemeOptions(themeNames);

  return (
    <>
      <div title="Change Theme" className="dropdown">
        <label
          tabIndex={0}
          className="btn m-1 bg-primary gap-1 normal-case btn-ghost text-secondary"
        >
          <ThemeSvg />
          Theme
          <DropDownSvg />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16"
        >
          <div className="grid grid-cols-1 gap-3 p-3">{themeOptions}</div>
        </ul>
      </div>
    </>
  );
};
