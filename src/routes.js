import React from 'react'

// const Dashboard = React.lazy(() => import('./admin/views/dashboard/Dashboard'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
]

export default routes
