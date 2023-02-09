import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
  const [currentTab, setCurrentTab] = useState(
    `/${window.location.pathname.split('/')[1]}` === '/'
      ? '/home'
      : `/${window.location.pathname.split('/')[1]}`
  );
  const [currentListIndex, setCurrentListIndex] = useState(0);

  return (
    <React.Fragment>
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        currentListIndex={currentListIndex}
        setCurrentListIndex={setCurrentListIndex}
      />
      <Footer
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        currentListIndex={currentListIndex}
        setCurrentListIndex={setCurrentListIndex}
      />
    </React.Fragment>
  );
};

export default Layout;
