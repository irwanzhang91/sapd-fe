import React, {Component} from 'react';
import queryString from 'query-string';

import AlertBox from './sections/AlertBox';
import Product from './Product';
import Update from './Update';

class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            successMsg: '',
            errorMsg: '',
        }
    }

    showMsg(search){
        if(search){
            let values = queryString.parse(search);

            if(values.successMsg){
                this.setState({
                    successMsg: values.successMsg,
                    errorMsg: '',
                })
            }

            if(values.errorMsg){
                this.setState({
                    successMsg: '',
                    errorMsg: values.errorMsg,
                })
            }
        }
    }

    render(){


        return(
            <React.Fragment>

                <AlertBox errorMsg={this.state.errorMsg} successMsg={this.state.successMsg}/>

                <div className="page-banner-section section bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <div className="page-banner text-center">
                                    <h1>Sumbang APD</h1>
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
                                      <h2>Siapa kami</h2>
                                      <p className="about-us-pera-mb">
                                        Kami adalah gerakan volunteer yang bergerak dari hati dengan prinsip #dirumahaja, mengikuti apa yang pemerintah canangkan.
                                        Gerakan ini semata-mata lahir hanya karena melihat kurangnya Alat Pelindung Diri (APD) yang dimiliki oleh garda terdepan dalam menghadapi wabah pandemik global, yaitu COVID-19.
                                      </p>
                                      <br />
                                      <p className="about-us-pera-mb">
                                        Disini kami berinisiatif untuk mengumpulkan dana (crowdfunding) untuk melakukan pengadaan Alat Pelindung Diri (APD) ini yang kemudian akan kami salurkan kepada fasilitas-fasilitas kesehatan yang sangat rentan dan membutuhkan.
                                        Diharapkan dengan adanya gerakan sederhana ini, kami bisa membantu memerangi wabah penyakit ini dan segera membantu Indonesia bangkit kembali.
                                      </p>
                                      <br />
                                      <p className="about-us-pera-mb">
                                        Situs ini kami ciptakan dengan segala kerendahan hati, tanpa adanya tekanan dan paksaan, dan juga tanpa keindahan yang semu.
                                      </p>
                                      <br />
                                      <p className="about-us-pera-mb">
                                        Akhir kata. <b>Let's fight this together !!</b><br />
                                        #Dirumahaja
                                      </p>
                                      <hr className="bold-hr"/>
                                  </div>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <Product />

                  <Update />

            </React.Fragment>
        );
    }
}

export default Home;
