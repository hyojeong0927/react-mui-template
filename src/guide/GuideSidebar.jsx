import { useState, useEffect, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import './guide.scss';

export default function GuideSidebar({ collapsed, setCollapsed }) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const navItems = useMemo(
    () => [
      { id: 'rule', label: 'Guide', to: '/' },
      {
        id: 'contents',
        label: 'Contents',
        children: [
          { id: 'account', label: 'Account', to: '/guide-account' },
          { id: 'product', label: 'Products', to: '/guide-product' },
          { id: 'scroll', label: 'Scroll', to: '/guide-scroll' },
        ],
      },
      {
        id: 'components',
        label: 'Components',
        children: [
          { id: 'accordion', label: 'Accordion', to: '/guide-accordion' },
          { id: 'aggrid', label: 'AgGrid', to: '/guide-aggrid' },
          { id: 'agree', label: 'Agree Form', to: '/guide-agree' },
          { id: 'badge', label: 'Badge', to: '/guide-badge' },
          { id: 'button', label: 'Button', to: '/guide-button' },
          { id: 'checkbox', label: 'Checkbox', to: '/guide-checkbox' },
          { id: 'form', label: 'Form Group', to: '/guide-form' },
          { id: 'list', label: 'List', to: '/guide-list' },
          { id: 'popup', label: 'Popup', to: '/guide-popup' },
          { id: 'radio', label: 'Radio', to: '/guide-radio' },
          { id: 'select', label: 'Select', to: '/guide-select' },
          { id: 'textfield', label: 'Text Field', to: '/guide-textfield' },
          { id: 'typograph', label: 'Typography', to: '/guide-typograph' },
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

  return (
    <aside className={`guide-sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* 데스크톱용 사이드바 접기 버튼 */}
      <div className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <ChevronRight /> : <ChevronLeft />}
      </div>

      <List component="nav" className="guide-sidebar__nav">
        {navItems.map(item => {
          const hasChildren = !!item.children;
          const isOpen = openMenu === item.id;

          return (
            <div
              key={item.id}
              className={`guide-sidebar__group ${isOpen ? 'open' : ''}`}
            >
              {hasChildren ? (
                <ListItemButton
                  onClick={() => handleToggle(item.id)}
                  className={`guide-sidebar__link ${isOpen ? 'active' : ''}`}
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
