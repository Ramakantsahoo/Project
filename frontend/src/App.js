import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Pages/Navbar'
import Dashboard from './Pages/Dashboard';
  import SelectionPage from './Pages/SelectionPage';
  import AdminLoginPage from './Pages/AdminLoginPage';
  import SignupPage from './Pages/SignupPage';
function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/admin/login" component={AdminLoginPage} />
    //     <Route path="/signup" component={SignupPage} />
    //     {/* Add other routes here */}
    //     <Route path="/" exact component={AdminLoginPage} /> {/* Default route */}
    //   </Switch>
    // </Router>
     // UNCOMMENT THE BELOW PART AND COMMENT OUT THE ABOVE PART TO VIEW THE login signup part
    <Router>
    <Switch>
      <Route exact path="/" component={SelectionPage} />
      <Route exact path="/admin-login" component={AdminLoginPage} />
      <Route exact path="/user-login" component={AdminLoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route path="/admin/dashboard" component={Dashboard} />
    </Switch>
  </Router>

  );
}

export default App;
