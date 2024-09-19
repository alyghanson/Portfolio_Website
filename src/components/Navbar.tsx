import { MenuItemsData } from '../MenuItemsData';
import MenuItems from './MenuItems';

const Navbar = () => {
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {MenuItemsData.map((menu, index) => {
          return <MenuItems item={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;