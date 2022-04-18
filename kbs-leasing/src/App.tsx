import React ,{ Component, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login';
import Landingpage from './pages/landingpage';
import Header from './pages/layouts/header';
import {
   Router,
  Route,
  Link,
  HashRouter,
  Routes
} from "react-router-dom";
import LeasingList from './pages/leasing/leasinglist';
import Content from './pages/layouts/content';

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )


// Containers
const DefaultLayout = React.lazy(() => import('./pages/landingpage'))

class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <HashRouter> */}
        
      {/* <Suspense fallback={loading}>
        <Routes>
          <Route path="/login" element={<LoginPage /> } />
            
            
          <Route path="*" element={<DefaultLayout />} />
          
        </Routes>
        </Suspense> */}



        {/* <Header />
      <Content />
      </HashRouter> */}

      {/* <LoginPage /> */}
      <LeasingList />
      {/* <Landingpage /> */}
      </div>
  );
}
}

export default App;
