import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import {fetchAPI, fileToBase64} from '../../custom/requestFunction.js';
import { validateNumber } from '../../custom/validationFunction'


class Join extends Component{

    constructor(props){
        super(props);

        this.state = {
            successMsg: '',
            errorMsg: '',

            banks: [
              { value: 1, label: `Bank BCA - a.n Elizabet - 4081.314.041`},
            ],

            nominal: 0,
            nama: '',
            bank: 'Pilih tujuan pembayaranmu.',
            bank_id: 0,
            catatan: '',

            fileUpload: '',
            filebase64: '',

            isRedirect: false,
        }

        this.handleNama = this.handleNama.bind(this);
        this.handleBank = this.handleBank.bind(this);
        this.handleCatatan = this.handleCatatan.bind(this);
        this.handleNominalChange = this.handleNominalChange.bind(this)
        this.handleFileUploadChange = this.handleFileUploadChange.bind(this)

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleNama(e){
        this.setState({
            nama: e.target.value,
        })
    }

    handleBank(e){
        this.setState({
            bank_id: e.target.value
        })
    }

    handleCatatan(e){
        this.setState({
            catatan: e.target.value,
        })
    }

    handleNominalChange(e){
        this.setState({
            nominal: validateNumber(e.target.value),
        })
    }

    handleFileUploadChange(e){
      const files = [...e.target.files];
        this.setState({
          fileUpload: files[0]
          }, () => {
              this.convertToBase64();
          });
    }

    convertToBase64(){
        fileToBase64(this.state.fileUpload, (result) => {
            this.setState({
                filebase64: result
            });
        });
    }

    handleConfirm(e){
        e.preventDefault();

        const data = {
            access_token: localStorage.getItem('access_token'),
            nama: this.state.nama,
            nominal: this.state.nominal,
            bank_id: parseInt(this.state.bank_id),
            catatan: this.state.catatan,
            image_path: this.state.filebase64
        }

        if(data.nama.length <= 0 || data.bank_id <= 0 || data.nominal <= 0){
            this.setState({
                successMsg: '',
                errorMsg: 'Mohon isi semua.'
            })
        }else {

            fetchAPI('join', 'POST', data, (response) => {
                if(response.result){
                    window.scrollTo(0,0);
                    this.setState({
                        isRedirect: true,
                    });
                }
            });

        }
    }

    showBanksList(){
        let banks = this.state.banks;
        let banks_list = null;

        if(banks.length > 0){
            banks_list = banks.map((o,i) => {
                return (
                    <option value={ o.value } key={ 'banktujuan' + o.id }>{ o.label }</option>
                );
            })
        }

        return banks_list;
    }

    render(){

      if(this.state.isRedirect === true) {
        return (<Redirect to="goodpeople"/>)
      }

        return(
          <React.Fragment>
            <div className="page-banner-section section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="page-banner text-center">
                                <h1>Ikut Bantu</h1>
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
                                <h2>Cara ikut menyumbang</h2>
                                <p className="about-us-pera-mb">
                                  Teman-teman yang sangat ingin mengambil peran, dapat mengirimkan donasi dengan cara transfer ke:<br />
                                  <b>BCA - atas nama Elizabet - 4081.314.041</b><br /><br />
                                  Teman-teman dapat tambahkan angka 9 di akhir nominal.<br />
                                  Contoh: Rp. 1.000.009 atau Rp. 10.009<br /><br />
                                  Teman-teman yang telah melakukan transfer, dapat memasukkan pesan ke formulir di bawah~<br /><br />
                                  Terima kasih!<br />
                                  <b>Let's fight together!</b>
                                </p>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

            <div className="checkout-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50  pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
              <div className="container">

                  <div className="row">
                      <div className="col-12">

                        <form action="#" className="checkout-form" onSubmit={this.handleConfirm}>
                          <div className="row row-40">

                              <div className="col-lg-12">
                                <div id="billing-form" className="mb-10">

                                  <div className="row">

                                    <div className="col-md-12 col-12 mb-20">
                                        <p><label>Nominal (Akhiri dengan 9 yah teman-teman)<span className="required">*</span></label></p>
                                        <input type="text" placeholder="Nominal" value={ this.state.nominal } onChange={ this.handleNominalChange } />
                                    </div>

                                    <div className="col-md-12 col-12 mb-20">
                                        <p><label>Nama Pemilik Rekening <span className="required">*</span></label></p>
                                        <input type="text" placeholder="Nama Pemilik Rekening" value={ this.state.nama } onChange={ this.handleNama }/>
                                    </div>
                                    <div className="col-md-12 col-12 mb-20">
                                        <p><label>Transfer ke *</label></p>
                                        <select className="nice-select" value={ this.state.bank_id } onChange={ this.handleBank }>
                                            <option value="0" disabled> Transfer ke </option>
                                            { this.showBanksList() }
                                        </select>
                                    </div>
                                    <div className="col-md-12 col-12 mb-20">
                                        <p><label>Pesan untuk kami</label></p>
                                        <input type="text" placeholder="catatan" value={ this.state.catatan } onChange={ this.handleCatatan }/>
                                    </div>

                                      <div className="col-md-12 col-12 mb-20">
                                          <p><label>Foto Bukti</label></p>
                                          <input type="file" onChange={ this.handleFileUploadChange }/>
                                      </div>
                                    <div className="col-md-12 col-12 mb-20">
                                        <button type="submit" className="btn">Confirm</button>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
          </React.Fragment>
        );
    }
}

export default Join;
