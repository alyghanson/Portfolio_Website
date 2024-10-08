interface SubmenuItemsProps {
    title: string;
    url: string;
};

interface DropdownProps {
    submenus: SubmenuItemsProps[];
    dropdown: boolean;
};

const Dropdown: React.FC<DropdownProps>= ({ submenus, dropdown }) => {
    return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;
