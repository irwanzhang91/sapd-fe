import React, {Component} from 'react';

class SocialMediaBtn extends Component{

    render(){
        let contact = this.props.contact;

        if(contact){
            return(
                <a href={ 'https://api.whatsapp.com/send?phone=' + contact.whatsapp} className="wa-float" target="_blank" rel="noopener noreferrer">
                    <i className="ion-social-whatsapp-outline wa-my-float"></i>
                </a>
            );
        }

        return null;
    }
}

export default SocialMediaBtn;
