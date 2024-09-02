import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

// Define a RouteLayout component
function RouteLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default RouteLayout;