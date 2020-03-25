import React, {Component} from 'react';

import product1 from '../../img/apd1.jpeg';

class Product extends Component{

    render(){


        return(
          <React.Fragment>
            <div className="page-banner-section section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="page-banner text-center">
                                <h1>Yang akan kami sediakan</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


          <div className="shop-section section pt-90 pt-lg-70 pt-md-60 pt-sm-50 pt-xs-45 pb-70 pb-lg-50 pb-md-40 pb-sm-60 pb-xs-50">
            <div className="container">
                <div className="row">
                  <div className="col-12">

                    <div className="shop-product">
                        <div className="product-grid-view">
                            <div className="row">
                              <div className="col-2 col-lg-2 col-xl-2"></div>
                              <div className="col-8 col-lg-8 col-xl-8">
                                  <div className="single-product mb-30">
                                    <div className="product-img">
                                          <img src={ product1 } alt="APD 1" />
                                    </div>
                                    <div className="product-content text-left">
                                        <h2>Baju Pelindung</h2>
                                        <span>Waterproof, sekali pakai, untuk medical</span>
                                        { false &&
                                          <div className="single-product-price">
                                            <span className="price new-price">Rp. 250.000,-</span>
                                          </div>
                                        }
                                    </div>

                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>


        );
    }
}

export default Product;
