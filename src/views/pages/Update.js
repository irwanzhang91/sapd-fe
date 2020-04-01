import React, {Component} from 'react';
import {fetchAPI, getApiUrl} from '../../custom/requestFunction.js';
import {getFullDateTime} from '../../custom/monthFunction.js';

import Cta from './Cta.js'

class Update extends Component{

    constructor(props){
        super(props);

        this.state = {
            updates: [],
        }
    }

    componentDidMount(){
        this.getUpdate();
    }

    getUpdate(){
        fetchAPI('updates', 'POST', null, (response) => {
            if(response.result){
                this.setState({
                    updates: response.data,
                });
            }
        });
    }

    showUpdate(){
        let updates = this.state.updates;
        let updates_list = null;

        if(updates.length>0){
            updates_list = updates.map((o,i) => {
                return (
                    <div className="col-6 col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6" key={ `update_list${i}`}>
                      <div className="single-product mb-30">
                        <div className="product-img">
                              <img style={{ maxHeight: "400px" }} src={ getApiUrl(o.image_path) } alt={ `fotoupdate${i}` } />
                        </div>
                        <div className="product-content text-left">
                            <h3>{ o.update_text }</h3>
                            <span>{ getFullDateTime(new Date(o.created_at)) }</span>
                        </div>
                      </div>
                  </div>
                )
            })
        }

        return updates_list;
    }

    render(){

      if(this.state.updates.length <= 0) {
        return null
      }

        return(<React.Fragment>
          <div className="page-banner-section section bg-gray">
              <div className="container">
                  <div className="row">
                      <div className="col">

                          <div className="page-banner text-center">
                              <h1>Update Pembelian</h1>
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
                              { this.showUpdate() }
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Cta />
              </div>
            </div>

          </React.Fragment>
        );
    }
}

export default Update;
