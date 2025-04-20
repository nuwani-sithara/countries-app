import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./context/ThemeContext";
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Landing Page (No Header) */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Main App Routes (With Header) */}
          <Route path="/home" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          
          {/* Country Details Page (With Header) */}
          <Route path="/country/:code" element={
            <>
              <Header />
              <CountryPage />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
