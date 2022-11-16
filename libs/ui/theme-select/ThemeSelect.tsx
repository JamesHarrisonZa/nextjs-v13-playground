import { useEffect } from 'react';
import { themeChange } from 'theme-change';

export const ThemeSelect: React.FC = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <select className="select bg-primary max-w-xs" data-choose-theme>
      <option disabled selected>
        Theme
      </option>
      <option value="dark">dark</option>
      <option value="light">light</option>
      <option value="cupcake">cupcake</option>
      <option value="night">night</option>
    </select>
  );
};
