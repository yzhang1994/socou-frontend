import React, { Component } from 'react'
// import { connect } from 'react-redux'
import CouponGrid from './CouponGrid';
import Friends from './Friends';
import Nav from './Nav';
import CouponTabs from './CouponTabs';
import SendModal from './SendModal';

class App extends Component {
  state = {
    isModalOpen: false,
    tabIndex: 0,
  };

  constructor(props) {
    super(props);
  }

  openModal = (isModalOpen = true) => (e) => {
    this.setState({ isModalOpen })
  };

  handleTabChange = (event, tabIndex) => {
    console.log("tabIndex", tabIndex);
    this.setState({ tabIndex });
  };

  render() {
    const { isModalOpen } = this.state

    let pageContent = null;
    console.log(this.state.tabIndex)
    switch (this.state.tabIndex) {
      case 0:
      case 1:
        pageContent = (<CouponGrid openModal={this.openModal} />);
        break;
      case 2:
        pageContent = (<Friends />);
        break;
    }

    return (
      <div>
        <Nav />
        <CouponTabs onChange={this.handleTabChange} />
        { pageContent }
        <SendModal openModal={this.openModal} isModalOpen={isModalOpen} />
      </div>
    )
  }
}

export default App;
