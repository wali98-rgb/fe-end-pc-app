import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/client/Navbar';
import Footer from './components/client/Footer';
import AppRoutes from './routes/AppRoutes';
import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/UserRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          {/* Route Umum */}
          <AppRoutes />

          {/* Route Admin */}
          <AdminRoutes />

          {/* Route User */}
          <UserRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
