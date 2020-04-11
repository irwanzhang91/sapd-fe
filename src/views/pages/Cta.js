import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Cta extends Component {
  render () {
    return (
      <React.Fragment>
        <hr className="bold-hr"/>
        <p className="about-us-pera-mb">
          Dengan berat hati, kami terpaksa menutup pintu donasi pada tanggal <b>10 April 2020 Jam 21.00 WIB.</b><br />
          Semoga semangat ini dapat terus membara dan menjadi karakter dari bangsa kita.<br />
          Terima kasih kepada seluruh teman-teman donatur.
        </p>
        <hr className="bold-hr"/>
        <p className="bold-link">
          <Link to="/goodpeople"><i className="fa fa-caret-right"></i> <span>Daftar Good People</span></Link><br />
        </p>
      </React.Fragment>
    )
  }
}

export default Cta
