import React from 'react';
import './Nav.css';
import UL, { A } from './NavStyles';
import SearchBar from '../SearchBar/SearchBar';
const navButtons = [
  'Home',
  'Supplies',
  'Category',
  'Classroom ∨',
  "Today's Offer ∨",
];
function Nav() {
  return (
    <React.Fragment>
      <nav>
        <UL>
          {navButtons.map((item) => (
            <li>
              <A href='#'>{item}</A>
            </li>
          ))}
        </UL>
        <SearchBar />
      </nav>
    </React.Fragment>
  );
}

export default Nav;
