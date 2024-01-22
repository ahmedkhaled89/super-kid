import React from 'react';
import Bag from './Bag/Bag';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import SideBar from './SideBar/SideBar';

const Bags = () => {
  return (
    <React.Fragment>
      <Nav />
      <Bag />
      <SideBar />
      <Footer />
    </React.Fragment>
  );
};

export default Bags;
