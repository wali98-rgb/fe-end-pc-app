import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoutes from './routes/MainRoutes';
import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/UserRoutes';
import AuthRoutes from './routes/AuthRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          {/* Route Umum */}
          <MainRoutes />

          {/* Route Admin */}
          <AdminRoutes />

          {/* Route User */}
          <UserRoutes />

          {/* Route Auth */}
          <AuthRoutes />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
