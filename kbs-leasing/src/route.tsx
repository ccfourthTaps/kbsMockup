import React from 'react'

// Subpage
const LeasingList = React.lazy(() => import('./pages/leasing/leasinglist'));
const Dashboardpage = React.lazy(() => import('./pages/dashboardpage'));

// Page
const Landingpage = React.lazy(() => import('./pages/landingpage'));

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: Dashboardpage },
    { path: '/landing', name: 'landing', element: LeasingList },


  ]


export default routes