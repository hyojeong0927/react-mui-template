import { NavLink } from 'react-router-dom';
import Button from '../Button';

export default function Aside({ navItems, isMenuOpen, toggleMenu }) {
  return (
    <aside className={isMenuOpen ? 'open' : ''}>
      <div className="header">
        <h2>Menu</h2>
        <Button variant="icon" onClick={toggleMenu}>
          ✕
        </Button>
      </div>

      <nav>
        {navItems.map(item => (
          <div key={item.id}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={toggleMenu}
            >
              {item.icon} {item.label}
            </NavLink>
            {item.children && (
              <div className="submenu">
                {item.children.map(sub => (
                  <NavLink
                    key={sub.id}
                    to={sub.to}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={toggleMenu}
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
