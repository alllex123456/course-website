import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import HomePage from './pages/Home';
import ServicesPage from './pages/Services/Services';
import AboutUsPage from './pages/AboutUs';
import ContactUsPage from './pages/ContactUs';
import RevolutionPage from './pages/Revolution';
import CustomSoftwarePage from './pages/Services/CustomSoftware/CustomSoftware';
import MobileAppPage from './pages/Services/MobileApp/MobileApp';
import WebsiteDevelopmentPage from './pages/Services/WebsiteDevelopment';

import { NavigationContext } from './context/Navigation';

function App() {
  const [currentTab, setCurrentTab] = useState(
    `/${window.location.pathname.split('/')[1]}` === '/'
      ? '/home'
      : `/${window.location.pathname.split('/')[1]}`
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <BrowserRouter>
      <NavigationContext.Provider
        value={{
          currentTab,
          currentIndex,
          changeTab: (value) => {
            setCurrentTab(value);
          },
          changeIndex: (value) => {
            setCurrentIndex(value);
          },
        }}
      >
        <Layout>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />

            <Route
              path="/services/custom-software"
              element={<CustomSoftwarePage />}
            />
            <Route path="/services/mobile-app" element={<MobileAppPage />} />
            <Route
              path="/services/website-development"
              element={<WebsiteDevelopmentPage />}
            />
            <Route path="/revolution" element={<RevolutionPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/estimate" element={<ContactUsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
      </NavigationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
