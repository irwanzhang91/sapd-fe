import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Page404 extends Component{

    render(){
        return (
            <React.Fragment>
                <div className="breadcrumb-area mt-50 hm-4-padding">
                    <div className="container-fluid">
                        <div className="breadcrumb-content text-center border-top-2">
                            <h2>404</h2>
                        </div>
                    </div>
                </div>
                <div className="all-info pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-us-details">
                                    <h3 className="text-center">Halaman Tidak Ditemukan</h3>
                                    <p className="about-us-pera-mb text-center">
                                        <Link to='/'>Klik disini untuk kembali ke halaman utama.</Link>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Page404;
