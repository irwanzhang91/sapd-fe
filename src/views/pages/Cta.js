import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Cta extends Component {
  render () {
    return (
      <React.Fragment>
        <hr className="bold-hr"/>
        <p className="about-us-pera-mb">
          Mau ikut membantu ?<br />
          <Link className="btn-lg" to="/join"><i className="fa fa-heart"></i> <span>Join</span></Link>
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
