import React, {Component} from 'react';

import product1 from '../../img/apd1.jpeg';
import product2 from '../../img/apd2.jpeg';
import product3 from '../../img/sensi-mask.jpeg';

class Product extends Component{

    render(){


        return(
          <React.Fragment>
            <div className="page-banner-section section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="page-banner text-center">
                                <h1>Yang akan kami donasikan</h1>
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
                              <div className="col-6 col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6">
                                  <div className="single-product mb-30">
                                    <div className="product-img">
                                          <img style={{ maxHeight: "400px" }} src={ product1 } alt="APD 1" />
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
                              <div className="col-6 col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6">
                                  <div className="single-product mb-30">
                                    <div className="product-img">
                                          <img style={{ maxHeight: "400px" }} src={ product2 } alt="APD 2" />
                                    </div>
                                    <div className="product-content text-left">
                                        <h2>Alat Pelindung Diri</h2>
                                        <span>Anti Microbial & Water Resistant</span>
                                        { false &&
                                          <div className="single-product-price">
                                            <span className="price new-price">Rp. 250.000,-</span>
                                          </div>
                                        }
                                    </div>

                                  </div>
                                </div>
                                <div className="col-6 col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6">
                                    <div className="single-product mb-30">
                                      <div className="product-img">
                                            <img style={{ maxHeight: "400px" }} src={ product3 } alt="Sensi Mask" />
                                      </div>
                                      <div className="product-content text-left">
                                          <h2>Sensi Mask</h2>
                                          <span>3 Ply Headloop</span>
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
