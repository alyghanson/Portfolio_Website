import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useState } from 'react';

interface SubmenuItemsProps {
    title: string;
    url: string;
}

interface MenuItemsProps{
    title: string;
    url: string;
    submenu?: SubmenuItemsProps[];
}
interface ItemProps{
  item: MenuItemsProps;
}
const MenuItems: React.FC<ItemProps> = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
    return (
      <li className="menu-items">
        {item.submenu ? (
          <>
            <button 
              type="button" 
              aria-haspopup="menu" 
              aria-expanded={dropdown ? "true": "false"}
              onClick={() => setDropdown((prev) => !prev)}>
                {item.title}{' '}
            </button>
            <Dropdown submenus={item.submenu} dropdown={dropdown} />
          </>
        ) : (
          <Link to={item.url}>{item.title}</Link>
        )}
      </li>
    );
  };
  
  export default MenuItems;