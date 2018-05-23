import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import paihang1 from './paihang1'
import paihang2 from './paihang2'
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Link to="/home/paihang1">topaihang1</Link>
                <Link to="/home/paihang2">topaihang2</Link>
                <Link to="/home">backHome</Link>
                {/* <Switch> */}
                <Route exact path='/home' component={paihang1}/>
                <Route path='/home/paihang1' component={paihang1}/>
                <Route path='/home/paihang2' component={paihang2}/>
                    {/* <Route path='/home/paihang2' component={paihang2}/> */}
                {/* </Switch> */}
                
            </div>
        )
    }
}
