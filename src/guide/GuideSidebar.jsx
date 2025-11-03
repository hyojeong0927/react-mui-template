import { useState, useEffect, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  ChevronRight,
  ChevronLeft,
} from '@mui/icons-material';
import './guide.scss';

export default function GuideSidebar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const navItems = useMemo(
    () => [
      { id: 'rule', label: 'Rule', to: '/' },
      {
        id: 'contents',
        label: 'Contents',
        children: [
          { id: 'product', label: 'Products', to: '/guide-product' },
          { id: 'scroll', label: 'Scroll', to: '/guide-scroll' },
        ],
      },
      {
        id: 'components',
        label: 'Components',
        children: [
          { id: 'accordion', label: 'Accordion', to: '/guide-accordion' },
          { id: 'aggird', label: 'AgGrid', to: '/guide-aggrid' },
          { id: 'agree', label: 'Agree Form', to: '/guide-agree' },
          { id: 'badge', label: 'Badge', to: '/guide-badge' },
          { id: 'button', label: 'Button', to: '/guide-button' },
          { id: 'checkbox', label: 'Checkbox', to: '/guide-checkbox' },
          { id: 'form', label: 'Form Group', to: '/guide-form' },
          { id: 'list', label: 'List', to: '/guide-list' },
          { id: 'radio', label: 'Radio', to: '/guide-radio' },
          { id: 'select', label: 'Select', to: '/guide-select' },
          {
            id: 'textfield',
            label: 'Text Field',
            to: '/guide-textfield',
          },
          {
            id: 'typograph',
            label: 'Typograhpy',
            to: '/guide-typograph',
          },
        ],
      },
    ],
    [],
  );

  useEffect(() => {
    const activeItem = navItems.find(item =>
      item.children?.some(child => location.pathname.startsWith(child.to)),
    );
    setOpenMenu(activeItem?.id || null);
  }, [location.pathname, navItems]);

  const handleToggle = id => setOpenMenu(prev => (prev === id ? null : id));
  const toggleSidebar = () => setCollapsed(prev => !prev);

  return (
    <aside className={`guide-sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* 사이드바 토글 버튼 */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {collapsed ? <ChevronRight /> : <ChevronLeft />}
      </div>

      <List component="nav" className="guide-sidebar__nav">
        {navItems.map(item => {
          const hasChildren = !!item.children;
          const isOpen = openMenu === item.id;

          return (
            <div
              key={item.id}
              className={`guide-sidebar__group ${hasChildren && isOpen ? 'open' : ''}`}
            >
              {hasChildren ? (
                <ListItemButton
                  onClick={() => handleToggle(item.id)}
                  className={`guide-sidebar__link ${isOpen ? 'active' : ''} ${collapsed ? 'collapsed' : ''}`}
                >
                  {!collapsed && <ListItemText primary={item.label} />}
                  {!collapsed && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
              ) : (
                <ListItemButton
                  component={NavLink}
                  to={item.to}
                  end
                  className="guide-sidebar__link"
                  onClick={() => setOpenMenu(null)}
                >
                  {!collapsed && <ListItemText primary={item.label} />}
                </ListItemButton>
              )}

              {hasChildren && (
                <Collapse
                  in={isOpen && !collapsed}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                    className="guide-sidebar__sublist"
                  >
                    {item.children.map(sub => (
                      <ListItemButton
                        key={sub.id}
                        component={NavLink}
                        to={sub.to}
                        end
                        className="guide-sidebar__subitem"
                      >
                        {!collapsed && <ListItemText primary={sub.label} />}
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          );
        })}
      </List>
    </aside>
  );
}
