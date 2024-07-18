import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Dashboard from './Pages/Dashboard';
import AdminDashboard from './Pages/AdminDashboard';
import About from './Pages/About';
import Home from './Pages/HomePage';
import SelectionPage from './Pages/SelectionPage';
import AdminLoginPage from './Pages/AdminLoginPage';
import UserLoginPage from './Pages/UserLoginPage';
import AddEmployee from './Pages/AddEmployee';

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
}

const Main = () => {
  const location = useLocation();
  const noNavPaths = ['/', '/about']; // Paths where Navbar should not be shown

  return (
    <div className="App">
      {!noNavPaths.includes(location.pathname) && <Navbar />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/selection" component={SelectionPage} />
        <Route exact path="/admin-login" component={AdminLoginPage} />
        <Route exact path="/user-login" component={UserLoginPage} />
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/add-employee" component={AddEmployee} />
        <Route exact path="/user/dashboard" component={Dashboard} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
