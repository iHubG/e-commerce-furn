import { BrowserRouter } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </div>
     
    
  )
}

export default App