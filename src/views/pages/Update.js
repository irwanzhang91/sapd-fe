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
                  <tr key={ `updates_list${i}`}>
                    <td>{ getFullDateTime(new Date(o.created_at)) }</td>
                    <td>
                      <img style={{ height: "400px" }} src={ getApiUrl(o.image_path) } alt={ `fotoupdate${i}`}/>
                    </td>
                    <td>{ o.update_text }</td>
                  </tr>
                )
            })
        }

        return updates_list;
    }

    render(){

      if(this.state.updates.length <= 0) {
        return null
      }

        return(
            <React.Fragment>
              <div className="page-banner-section section bg-gray">
                  <div className="container">
                      <div className="row">
                          <div className="col">

                              <div className="page-banner text-center">
                                  <h1>Update</h1>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
                <div className="faq-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50  pb-90 pb-lg-70 pb-md-60 pb-sm-50 pb-xs-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                              <div className="faq-content">
                                  <div className="faq-desc">

                                    <hr className="bold-hr"/>
                                    { this.state.updates.length > 0 &&
                                    <div className="cart-table table-responsive mb-30">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="pro-title">Tanggal</th>
                                                    <th className="pro-title">Foto</th>
                                                    <th className="pro-quantity">Update</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                              { this.showUpdate() }
                                            </tbody>
                                        </table>
                                    </div>
                                    }

                                    <Cta />
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

export default Update;
