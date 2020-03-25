import React, {Component} from 'react';

class AlertBox extends Component{
    constructor(props){
        super(props);

        this.state = {
            successMsg: '',
            errorMsg: '',
        }
    }

    componentDidMount(){
        this.timeout = setTimeout(function(){
            this.setState({
                successMsg: '',
                errorMsg: '',
            })
        }.bind(this), 8000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    componentWillReceiveProps(props){
        if(props.successMsg !== this.props.successMsg){
            this.setState({
                successMsg: props.successMsg,
            })
        }
        if(props.errorMsg !== this.props.errorMsg){
            this.setState({
                errorMsg: props.errorMsg,
            })
        }
    }

    showAlert(successMsg, errorMsg) {

      if(successMsg.length > 0){
          return (
              <div className="alert alert-success">
                  <ul>
                      <li dangerouslySetInnerHTML={ {__html: successMsg } }></li>
                  </ul>
              </div>
          );
      }else if(errorMsg.length > 0){
          return(
              <div className="alert alert-danger">
                  <ul>
                      <li dangerouslySetInnerHTML={ {__html: errorMsg } }></li>
                  </ul>
              </div>
          );
      }

      return null;
    }

    render(){

      let successMsg = this.state.successMsg;
      let errorMsg = this.state.errorMsg;

      if(successMsg.length <= 0 && errorMsg.length <= 0) {
        return null
      }

      return (
        <div className="row">
            <div className="col-lg-2 col-md-2"></div>
            <div className="col-lg-8 col-md-8">
                <div className="mt-10 text-center">
                  { this.showAlert(successMsg, errorMsg) }
                </div>
            </div>
        </div>
      )
    }
}

export default AlertBox;
