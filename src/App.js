import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import AboutUsPage from './pages/AboutUs';
import ContactUsPage from './pages/ContactUs';
import RevolutionPage from './pages/Revolution';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/revolution" element={<RevolutionPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
