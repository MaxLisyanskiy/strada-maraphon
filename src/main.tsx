import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';
import UserProvider from './context/user-context';
import MoviesProvider from './context/movies-context';
import './style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserProvider>
    <MoviesProvider>
      <RouterProvider router={router} />
    </MoviesProvider>
  </UserProvider>,
);
