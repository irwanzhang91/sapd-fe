import React, {Component} from 'react';
import queryString from 'query-string';

import AlertBox from './sections/AlertBox';
import Product from './Product';
import Progress from './Progress';
import Update from './Update';

import update1 from '../../img/update/1.png';


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
                                        Target pertama kami <b>telah Berhasil kami salurkan</b> yaitu:<br />
                                        1 pcs hazmat disposable 27/28 Maret 2020<br />
                                        70pcs Hazmat disposable 27/28 Maret 2020<br />
                                        20pcs hazmat sritex perkiraan tgl 6-8 April 2020<br />
                                        100pcs Hazmat spundbond<br />
                                        40 pcs n95 (sumbangan barang)
                                      </p>
                                      <br />
                                      <p className="about-us-pera-mb">
                                        Setelah kami menjalani ini, kami mendapatkan banyak sekali permintaan bantuan dari teman-teman medis di lapangan.<br />
                                        Tidak hanya teman medis, donatur juga masih terus mengulurkan tangan kepada kami dan mempercayai bahwa kami dapat menyalurkannya kepada pihak yang benar.<br />
                                        Oleh karena itu, kami putuskan, kami akan teruskan kebaikan ini dengan target:<br />
                                        <b>Membantu menyalurkan kebutuhan medis khususnya untuk penanganan Covid-19 pada daerah yang terdampak.</b>
                                      </p>
                                      <br />
                                      <p className="about-us-pera-mb">
                                        Akhir kata. <b>Let's fight this together !!</b><br />
                                        #Dirumahaja
                                      </p>
                                      <hr className="bold-hr"/>
                                      <p className="about-us-pera-mb">
                                        <b>Update Saldo</b>
                                      </p>
                                      <img src={ update1 } alt="Update Saldo"/>

                                      <hr className="bold-hr"/>
                                      <h2>Pencapaian Donatur</h2>
                                      <p className="about-us-pera-mb">
                                        <b>Efektif Pengumpulan Donasi: 23 Maret 2020 - 10 April 2020</b>
                                        <b>Total Dana Terkumpul: Rp. 116,272,193</b><br/>
                                        <b>Total Dana Terpakai: Rp. 110,874,696</b><br/>
                                        <b>Total Dana Tersisa: Rp. 5,397,497</b>
                                      </p>
                                      <p className="about-us-pera-mb">
                                        Seluruh dana tersisa akan kami sumbangkan kembali atas nama <b>SumbangAPD.com</b> kepada teman-teman volunteer di luar sana yang membutuhkan.<br />
                                        Berikut daftar tujuan donasi kami:<br />
                                        1.
                                      </p>

                                  </div>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <Product />

                  <Progress />

                  <Update />

            </React.Fragment>
        );
    }
}

export default Home;
