import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import {fetchAPI, fileToBase64} from '../../custom/requestFunction.js';

class UpdateForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            successMsg: '',
            errorMsg: '',

            update: '',

            fileUpload: '',
            filebase64: '',

            isRedirect: false,
        }

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleFileUploadChange = this.handleFileUploadChange.bind(this)

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleUpdate(e){
        this.setState({
            update: e.target.value,
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
            update: this.state.update,
            update_image: this.state.filebase64
        }

        if(data.update.length <= 0 || data.update_image.length <= 0){
            this.setState({
                successMsg: '',
                errorMsg: 'Mohon isi semua.'
            })
        }else {

            fetchAPI('update/save', 'POST', data, (response) => {
                if(response.result){
                    window.scrollTo(0,0);
                    this.setState({
                        isRedirect: true,
                    });
                }
            });

        }
    }


    render(){

      if(this.state.isRedirect === true) {
        return (<Redirect to="/"/>)
      }

        return(
          <React.Fragment>
            <div className="page-banner-section section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="page-banner text-center">
                                <h1>Form Update</h1>
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
                                        <p><label>Update</label></p>
                                        <input type="text" placeholder="Isi dengan update terbaru" value={ this.state.update } onChange={ this.handleUpdate }/>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-12 col-12 mb-20">
                                        <p><label>Foto Update</label></p>
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

export default UpdateForm;
