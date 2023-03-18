import React from "react";
//
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <header
      className=" bg-transparent absolute top-0 left-0 w-full
  items-center z-10"
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#"
              className="no-underline font-extrabold text-secondary main-font
               text-base block py-6"
            >
              My
              <span className="text-lg font-extrabold text-primary">
                Emerce
              </span>
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="
            block absolute right-4"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MyNavbar;

//navbar v.2.0

// import {
//   Navbar,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   NavbarBrand,
//   NavbarText,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";
// <div>
//   <Navbar className=" bg-slate-100">
//     <NavbarBrand>MyEmmerce</NavbarBrand>
//     <Nav>
//       <NavItem>
//         <NavLink>Hello, username</NavLink>
//       </NavItem>
//       <UncontrolledDropdown nav inNavbar>
//         <DropdownToggle nav caret>
//           Pages
//         </DropdownToggle>
//         <DropdownMenu end>
//           <DropdownItem>
//             <Link to="/cart">Cart</Link>
//           </DropdownItem>
//           <DropdownItem>
//             <Link to="/history">History</Link>
//           </DropdownItem>
//           <DropdownItem>
//             <Link to="/admin">Admin</Link>
//           </DropdownItem>
//         </DropdownMenu>
//       </UncontrolledDropdown>
//     </Nav>
//   </Navbar>
// </div>
