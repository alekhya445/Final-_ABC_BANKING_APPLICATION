import Home from './Components/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import login from './Components/login'
import Adminpage from './Components/adminpage'
import Userpage from './Components/userpage'
import React, { Component } from 'react'
import Signup from './Components/signup';
import Adduser from './Components/adduser';
import Viewuser from './Components/viewuser';
import Viewuser1 from './Components/viewuser1';
//import UserView from './Components/viewpage';
import Edituser from './Components/edituser';
import AddAmount from './Components/addamount';
import CurrentBalence from './Components/currentadd';
import MiniStatement from './Components/ministatement';
import CurrentBalance from './Components/currentdelamount';
import Logout from './Components/logout';
//import signup from './Components/signup';
import DelAmount from './Components/delamount';








 class App extends Component {
  render() {
    return (
      <BrowserRouter>
     <div className="App">
      <Switch>
        <Route path='/' exact component={Home}></Route>
        {/* <Route path='/member-home' component={memberHome}></Route> */}
        <Route path='/signup' component={Signup}></Route>
        
        <Route path='/login' component={login}></Route>
        <Route path='/logout' component={Logout}></Route>
        <Route path='/adminpage' component={Adminpage}></Route>
        <Route path='/viewuser/:id' component={Viewuser}></Route>
        <Route path='/viewuser1/:id' component={Viewuser1}></Route>
        <Route path='/edituser/:id' component={Edituser}></Route>
        <Route path='/adduser' component={Adduser}></Route>
        <Route path='/userpage' component={Userpage}></Route>
        <Route path='/addamount' component={AddAmount}></Route>
        <Route path='/currentadd' component={CurrentBalence}></Route>
        <Route path='/currentdel' component={CurrentBalance}></Route>
        <Route path='/ministatement/:id' component={MiniStatement}></Route>
        <Route path='/delamount' component={DelAmount}></Route>
        {/* <Route path='/viewpage' component={UserView}></Route> */}
        {/* <Route path='/signup' component={signup}></Route> */}
        
      </Switch>

      
      
      
      </div>
      </BrowserRouter>
    )
  }
}

export default App