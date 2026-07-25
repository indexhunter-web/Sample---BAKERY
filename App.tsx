import React, { Suspense, lazy } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages with robust paths
const Home = lazy(() => import('./src/pages/Home'));
const Menu = lazy(() => import('./src/pages/Menu'));
const About = lazy(() => import('./src/pages/About'));
const CustomOrders = lazy(() => import('./src/pages/CustomOrders'));
const Gallery = lazy(() => import('./src/pages/Gallery'));
const Contact = lazy(() => import('./src/pages/Contact'));
const NotFound = lazy(() => import('./src/pages/NotFound'));

const App: React.FC = () => {
  return (
    <Theme appearance="light" radius="large" scaling="100%">
      <Router>
        <Suspense fallback={
          <div className="h-screen w-full flex items-center justify-center bg-background">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <main className="min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/custom-orders" element={<CustomOrders />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </main>
        </Suspense>
      </Router>
    </Theme>
  );
}

export default App;