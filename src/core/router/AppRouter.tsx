import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteNames } from '../../common/variables/RouteNames';
import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';
import { MainScreen } from '../../pages/MainScreen';
import { NotFound } from '../../pages/NotFound';
import { useAppSelector } from '../redux/app/hooks';
import { ProtectedRoute } from './ProtectedRoutes';

const Ads = React.lazy(() => import(/* webpackChunkName:"Ads" */'../../pages/Ads')
  .then(module => ({ default: module.Ads })))
const User = React.lazy(() => import(/* webpackChunkName:"User" */'../../pages/User')
  .then(module => ({ default: module.User })))
const Settings = React.lazy(() => import(/* webpackChunkName:"Settings" */'../../common/components/settings/Settings')
  .then(module => ({ default: module.Settings })))
const Chats = React.lazy(() => import(/* webpackChunkName:"Chats" */'../../pages/Chats')
  .then(module => ({ default: module.Chats })))
const Notification = React.lazy(() => import(/* webpackChunkName:"Notification" */'../../pages/Notification')
  .then(module => ({ default: module.Notification })))
const Registration = React.lazy(() => import(/* webpackChunkName:"Registration" */'../../pages/Registration')
  .then(module => ({ default: module.Registration })))

export const AppRouter = () => {
  const auth = useAppSelector((state) => state.authSliceReducer.isAuth);

  return (
    <Routes>
      <Route element={<ProtectedRoute auth={auth} />}>
        <Route path={RouteNames.HOME} element={<MainScreen />}>
          <Route index element={<Home />} />
          <Route path={RouteNames.ADS} element={<React.Suspense><Ads /></React.Suspense>} />
          <Route path={RouteNames.USER} element={<React.Suspense><User /></React.Suspense>} />
          <Route path={RouteNames.SETTINGS} element={<React.Suspense><Settings /></React.Suspense>} />
          <Route path={RouteNames.CHATS} element={<React.Suspense><Chats /></React.Suspense>} />
          <Route path={RouteNames.NOTIFICATION} element={<React.Suspense><Notification /></React.Suspense>} />
        </Route>
      </Route>

      {auth ? (
        <Route>
          <Route
            path={RouteNames.LOGIN}
            element={<Navigate to={RouteNames.HOME} replace />}
          />
          <Route
            path={RouteNames.REGISTER}
            element={<Navigate to={RouteNames.HOME} replace />}
          />
        </Route>
      ) : (
        <Route>
          <Route path={RouteNames.REGISTER} element={<React.Suspense><Registration /></React.Suspense>} />
          <Route path={RouteNames.LOGIN} element={<Login />} />
        </Route>
      )}

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
