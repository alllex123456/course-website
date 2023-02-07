import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services/Services';
import AboutUsPage from './pages/AboutUs';
import ContactUsPage from './pages/ContactUs';
import RevolutionPage from './pages/Revolution';
import CustomSoftwarePage from './pages/Services/CustomSoftware';
import MobileAppPage from './pages/Services/MobileApp';
import WebsiteDevelopmentPage from './pages/Services/WebsiteDevelopment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />}>
            <Route path="custom-software" element={<CustomSoftwarePage />} />
            <Route path="mobile-app-software" element={<MobileAppPage />} />
            <Route
              path="website-development"
              element={<WebsiteDevelopmentPage />}
            />
          </Route>
          <Route path="/revolution" element={<RevolutionPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
