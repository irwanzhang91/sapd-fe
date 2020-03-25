import React, {Component} from 'react';

import TopBar from './TopBar';

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isOpenSideBar: false,

            isSticky: false
        };

        this.openSideBar = this.openSideBar.bind(this);

        this.listenToScroll = this.listenToScroll.bind(this)
    }

    componentDidMount () {
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll () {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop

      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

      let diff = winScroll / height

      let isSticky = false
      if(diff >= 0.07) {
        isSticky = true
      }

      this.setState({
        isSticky: isSticky
      })
    }

    openSideBar(){
        this.setState({
            isOpenSideBar: !this.state.isOpenSideBar,
        });
    }

    render(){
        return(
            <React.Fragment>
                <header className={ 'header header-transparent header-sticky ' + (this.state.isSticky ? 'is-sticky' : '') }>
                    <TopBar />
                </header>
            </React.Fragment>
        );
    }
}

export default Header;
