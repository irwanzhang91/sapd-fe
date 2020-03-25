import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchAPI, getApiUrl} from '../../custom/requestFunction.js';
import {getFullDateTime} from '../../custom/monthFunction.js';

class GoodPeople extends Component{

    constructor(props){
        super(props);

        this.state = {
            people: [],
        }
    }

    componentDidMount(){
        this.getPeople();
    }

    getPeople(){
        fetchAPI('goodpeople', 'POST', null, (response) => {
            if(response.result){
                this.setState({
                    people: response.data,
                });
            }
        });
    }

    showPeople(){
        let people = this.state.people;
        let people_list = null;

        if(people.length>0){
            people_list = people.map((o,i) => {
                return (
                  <tr key={ `people_list${i}`}>
                    <td>{ getFullDateTime(new Date(o.created_at)) }</td>
                    <td>{ o.name }</td>
                    <td>{ `Rp. ${o.nominal.toLocaleString()}` }</td>
                    <td>{ o.catatan }</td>
                    <td>
                      <img style={{ height: "400px" }} src={ getApiUrl(o.image_path) } alt={ `fotogoodpeople${i}`} />
                    </td>
                  </tr>
                )
            })
        }

        return people_list;
    }

    render(){

        return(
            <React.Fragment>
              <div className="page-banner-section section bg-gray">
                  <div className="container">
                      <div className="row">
                          <div className="col">

                              <div className="page-banner text-center">
                                  <h1>Good People</h1>
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
                                    <p className="about-us-pera-mb">
                                      Berikut adalah daftar Good People yang telah ikut dalam mengulurkan tangan untuk melawan wabah pandemik COVID-19 ini.<br />
                                      Terima kasih untuk <b>SILENT ANGELS</b> !
                                    </p>

                                    <hr className="bold-hr"/>
                                    { this.state.people.length > 0 &&
                                    <div className="cart-table table-responsive mb-30">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="pro-title">Tanggal</th>
                                                    <th className="pro-title">Nama</th>
                                                    <th className="pro-quantity">Nominal</th>
                                                    <th className="pro-price">Pesan</th>
                                                    <th className="pro-subtotal">Foto</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                              { this.showPeople() }
                                            </tbody>
                                        </table>
                                    </div>
                                    }

                                    <hr className="bold-hr"/>
                                    <p className="about-us-pera-mb">
                                      Mau ikut membantu ?<br />
                                      <Link className="btn" to="/join"><i className="fa fa-heart"></i> <span>Join</span></Link>
                                    </p>
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

export default GoodPeople;
