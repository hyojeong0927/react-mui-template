// import { Link, NavLink } from 'react-router-dom';
// import { FaHome, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';
// import { useState, useEffect } from 'react';
// import Button from '../Button';
// import Aside from './Aside';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? 'hidden' : '';
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isMenuOpen]);

//   const navItems = [
//     { id: 'home', label: 'Home', icon: <FaHome />, to: '/' },
//     {
//       id: 'about',
//       label: 'About',
//       icon: <FaInfoCircle />,
//       to: '/about',
//       children: [
//         { id: 'about-main', label: 'About', to: '/about' },
//         { id: 'contact', label: 'Contact', to: '/about/contact' },
//       ],
//     },
//   ];

//   return (
//     <header>
//       <div className="container">
//         <Link to="/">Learn Canvas</Link>

//         <nav className="desktop-nav">
//           {navItems.map(item => (
//             <div key={item.id} className="group">
//               <NavLink
//                 to={item.to}
//                 className={({ isActive }) => (isActive ? 'active' : '')}
//               >
//                 {item.icon} {item.label}
//               </NavLink>

//               {item.children && (
//                 <div className="submenu">
//                   {item.children.map(sub => (
//                     <NavLink
//                       key={sub.id}
//                       to={sub.to}
//                       className={({ isActive }) => (isActive ? 'active' : '')}
//                     >
//                       {sub.label}
//                     </NavLink>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         <Button variant="icon" onClick={toggleMenu}>
//           {isMenuOpen ? <FaTimes /> : <FaBars />}
//         </Button>
//         <Button variant="primary" size="md">
//           강의 버튼
//         </Button>
//       </div>

//       <Aside
//         navItems={navItems}
//         isMenuOpen={isMenuOpen}
//         toggleMenu={toggleMenu}
//       />
//     </header>
//   );
// }
// export default Header;

function Header() {
  return <div>header</div>;
}

export default Header;
