import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import About from './pages/About/About'
//路由组件
import Home from './pages/Home/Home'
import Test from './pages/Test/Test'
//一般组件
import Header from "./components/Header/Header";
import MyNavLink from "./components/MyNavLink/MyNavLink";

class App extends Component {

    render() {
        return (

            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to='/home'>Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    {/*Switch包裹后，当匹配到一个路由时，结束匹配，*/}
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                    <Route path="/home" component={Test}/>

                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
