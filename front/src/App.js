import AllUsers from './Component/AllUsers';
import AddUser from './Component/Signup'
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import Limit from './Component/Limit';
import Login from './Component/login';
import NotFound from './Component/NotFound'; 
import Activationcode from './Component/Activationcode';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <NavBar /> 
      
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
    
        <Route exact path="/code" component={Activationcode} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/limit" component={Limit} />
        
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
