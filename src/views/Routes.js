import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ScrollToTop from './ScrollToTop.js';
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
import ScrollUp from './pages/components/ScrollUp';
import SocialMediaBtn from './pages/components/SocialMediaBtn';

import Home from './pages/Home.js';
import Page404 from './pages/Page404.js';
import Product from './pages/Product.js';
import Join from './pages/Join.js';
import GoodPeople from './pages/GoodPeople.js';
import UpdateForm from './pages/UpdateForm.js';

class Routes extends Component{

    render(){

        return(
            <Router>
                <ScrollToTop>
                    <div className="main-wrapper">
                        <Header />

                        <Switch>
                            <Route exact path="/" render={ (props) => <Home {...props} /> }/>

                            <Route exact path="/donation" render={ (props) => <Product {...props}/>} />

                            <Route exact path="/join" render={ () => <Join />} />
                            <Route exact path="/update" render={ () => <UpdateForm />} />

                            <Route exact path="/goodpeople" render={ () => <GoodPeople />} />

                            <Route path='*' component={ Page404 } />
                        </Switch>

                        <Footer />
                        <ScrollUp />
                        { false && <SocialMediaBtn contact={ this.state.contact } socialmedias={ this.state.social_medias }/> }
                    </div>
                </ScrollToTop>
            </Router>
        );
    }
}

export default Routes;
