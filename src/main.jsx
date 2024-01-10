import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './assets/pages/layout/Root.jsx';
import Dashboard from './assets/pages/layout/Dashboard.jsx';
import ErrorPage from './assets/pages/ErrorPage.jsx';
import Exercises from './assets/pages/exercises/Exercises.jsx';
import NewExercise from './assets/pages/exercises/NewExercise.jsx';
import EditExercise from './assets/pages/exercises/EditExercise.jsx';
import ViewExercise from './assets/pages/exercises/ViewExercise.jsx';
import Plans from './assets/pages/plans/Plans.jsx';
import NewPlan from './assets/pages/plans/NewPlan.jsx';
import ViewPlan from './assets/pages/plans/ViewPlan.jsx';
import EditPlan from './assets/pages/plans/EditPlan.jsx';
import ViewCoach from './assets/pages/coaches/ViewCoach.jsx';
import Coaches from './assets/pages/coaches/Coaches.jsx';
import Login from './assets/pages/sign/Login.jsx';
import Signup from './assets/pages/sign/Signup.jsx';
import LoggedInRoot from './assets/pages/layout/LoggedInRoot.jsx';
import ViewProfile from './assets/pages/ViewProfile.jsx';
import { Provider } from 'react-redux';
import store from './assets/store/index.js';
import { Box } from '@mui/joy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <LoggedInRoot />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'exercises/', element: <Exercises /> },
          { path: 'exercises/new/', element: <NewExercise /> },
          { path: 'exercises/:id/', element: <ViewExercise /> },
          { path: 'exercises/:id/edit/', element: <EditExercise /> },
          { path: 'plans/', element: <Plans /> },
          { path: 'plans/new/', element: <NewPlan /> },
          { path: 'plans/:id/', element: <ViewPlan /> },
          { path: 'plans/:id/edit/', element: <EditPlan /> },
          { path: 'coaches/:id/', element: <ViewCoach /> },
          { path: 'coaches/', element: <Coaches /> },
          { path: 'viewProfile/:id/', element: <ViewProfile /> },
        ],
      },
      { path: 'login/', element: <Login />, errorElement: <ErrorPage /> },
      { path: 'signup/', element: <Signup />, errorElement: <ErrorPage /> },
    ],
  },
]);

const t = 'فیتنس تمرین برنامه نام تایید جدید ab12';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>


  // <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
  //   {['yekan', 'vazir', 'Sahel','yekan per', 'rubik', 'noto naskh', 'vazirmatn'].map((i) => (
  //     <Box key={i}>
  //       <p style={{ fontSize: '24px', fontWeight: '400', fontFamily: i }}>{t}</p>
  //       <p style={{ fontSize: '24px', fontWeight: '700', fontFamily: i }}>{t}</p>
  //     </Box>
  //   ))}
  // </Box>
);