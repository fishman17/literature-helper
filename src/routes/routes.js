import React from 'react'
import { BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom'
import Login from './../views/Login'
import Home from './../views/Home'
import Register from './../views/Register'
import paihang1 from './../views/Home/paihang1'
export default class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <li>
                        <Link to="/home">tohome</Link>
                    </li>
                    <li>
                        <Link to="/user/login">tologin</Link>
                    </li>
                    <li>
                        <Link to="/user/register">toregister</Link>
                    </li>
                    <Switch>
                    {/* <Route exact path='/' component={Home}/> */}
                    <Route path='/home' component={Home}/>
                    <Route path='/user/login' component={Login}/>
                    <Route path='/user/register' component={Register}/>
                    <Redirect from='/' to='/home'/>
                    </Switch>
                </div>
            </BrowserRouter>
            // <div>123</div>
        )
    }
}