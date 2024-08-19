import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Spinner from './user/components/spinner/Spinner'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";

// Containers
const MainLayout = React.lazy(() => import('./user/layout/MainLayout'))
const Login = React.lazy(() => import('./user/views/pages/login/Login'))
const Register = React.lazy(() => import('./user/views/pages/register/Register'))
const Page404 = React.lazy(() => import('./user/views/pages/page404/Page404'))


const App = () => {
  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <Spinner />
          </div>
        }
      >
        <Routes>
          {/* normal routes */}
          <Route exact path="/" name="Home" element={<MainLayout />} />
          <Route exact path="/login" name="Login" element={<Login />} />
          <Route exact path="/register" name="Register" element={<Register />} />
        
          {/* admin routes */}

          {/* no found */}
          <Route exact path="*" name="Register" element={<Page404 />} />

        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
