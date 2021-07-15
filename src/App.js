import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
import CreateAnnounce from "./pages/CreateAnnounce";
import DetailAnnounce from "./pages/DetailAnnounce";
import Contact from "./pages/Contact";
import MyAccount from "./pages/MyAccount";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
// import {useEffect, useState} from "react";

function App() {

  return (
    <div className="app">

        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>

                <Route path='/createAnnounce' exact={true} component={CreateAnnounce}/>

                <Route path='/contact' exact={true} component={Contact}/>

                <Route path='/myAccount' exact={true} component={MyAccount}/>

                <Route path='/detailAnnounce/:id' exact={true} component={DetailAnnounce}/>

                <Route path='/register' exact={true} component={SignUp}/>

                <Route path='/login' exact={true} component={Login}/>

                <Route path='*' component={NotFound}/>
            </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
