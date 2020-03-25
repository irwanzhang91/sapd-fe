import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{

    render(){

        return(
          <footer className="footer-section section bg-dark">

            <div className="footer-bottom section">
                <div className="container ft-border pt-20 pb-20 pt-xs-20 pb-xs-20">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-8">
                            <div className="copyright text-left">
                                <p>
                                  Copyright ©2020 <Link to="/"> Sumbang APD</Link> - A movement made from heart for Indonesia..<br />
                                  All Rights Reserved.<br />
                                  <b>With love</b> by <b><a href="https://digitara.id" target="_blank" rel="noopener noreferrer">Digitara</a></b>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </footer>
        );
    }
}

export default Footer;
