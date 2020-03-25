import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../../img/logo.png';

class TopBar extends Component{

    constructor(props){
        super(props);

        this.state = {
            isOpenMenu: false,
        }

        this.handleOpenMenu = this.handleOpenMenu.bind(this)
    }

    handleOpenMenu(e) {
      e.preventDefault()

      this.setState({
        isOpenMenu: !this.state.isOpenMenu
      })
    }

    render(){
        return(
            <div className="header-bottom menu-right">
                <div className="container-fluid pl-75 pr-75 pl-lg-15 pr-lg-15 pl-md-15 pr-md-15 pl-sm-15 pr-sm-15 pl-xs-15 pr-xs-15">
                    <div className="row align-items-center">

                        <div className="col-lg-2 col-md-2 col-6 order-lg-1 order-md-1 order-1">
                            <div className="logo">
                                <Link to="/"><img src={ logo } alt="Beauty Glowing" /></Link>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8 col-12 order-lg-2 order-md-2 order-3 d-flex justify-content-center">
                            <nav className="main-menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/products">Things to Buy</Link></li>
                                    <li><Link to="/join">Join</Link></li>
                                    <li><Link to="/goodpeople">Good People</Link></li>
                                </ul>
                            </nav>
                        </div>
                      </div>


                    <div className="row">
                        <div className="col-12 d-flex d-lg-none">
                          <div className="mobile-menu mean-container">
                            <div className="mean-bar">
                              <nav className="mean-nav">
                                <ul style={{display: (this.state.isOpenMenu ? 'block' : 'none')}}>

                                  <li><Link to="/products">Things to Buy</Link></li>
                                  <li><Link to="/products">Join</Link></li>

                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default TopBar;
