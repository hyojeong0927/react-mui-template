import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../guide.scss';

export default function GuideSibar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const navItems = [
    {
      id: 'guide',
      label: 'Guide',
      children: [
        { id: 'rule', label: 'Rule', to: '/guide/rule' },
        { id: 'term', label: 'Term', to: '/guide/term' },
      ],
    },
    {
      id: 'components',
      label: 'Components',
      children: [
        {
          id: 'agree',
          label: 'Agree Form',
          to: '/guide/components/guide-agree',
        },
        { id: 'button', label: 'Button', to: '/guide/components/guide-button' },
      ],
    },
  ];
  const getInitialOpenMenu = () => {
    const activeItem = navItems.find(item =>
      item.children?.some(child => location.pathname.startsWith(child.to)),
    );
    return activeItem?.id || null;
  };

  useState(() => setOpenMenu(getInitialOpenMenu()));

  const handleToggle = id => {
    setOpenMenu(prev => (prev === id ? null : id));
  };

  return (
    <aside className="guide-sidebar">
      <nav className="guide-sidebar__nav">
        <ul className="guide-sidebar__list">
          {navItems.map(item => {
            const isOpen = openMenu === item.id;
            return (
              <li
                key={item.id}
                className={`guide-sidebar__item ${isOpen ? 'guide-sidebar__item--open' : ''}`}
              >
                <span
                  className="guide-sidebar__link"
                  onClick={() => handleToggle(item.id)}
                >
                  {item.label}
                </span>

                {item.children && (
                  <ul className="guide-sidebar__sublist">
                    {item.children.map(sub => (
                      <li key={sub.id} className="guide-sidebar__subitem">
                        <NavLink
                          to={sub.to}
                          className={({ isActive }) =>
                            `guide-sidebar__sublink ${isActive ? 'guide-sidebar__sublink--active' : ''}`
                          }
                        >
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
