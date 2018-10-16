import React, { Component } from 'react'
// import { connect } from 'react-redux'
import CouponGrid from './CouponGrid';
import Nav from './Nav';
import CouponTabs from './CouponTabs';
import SendModal from './SendModal';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }

  openModal = (isModalOpen = true) => (e) => {
    this.setState({ isModalOpen })
  }

  render() {
    const { isModalOpen } = this.state
    return (
      <div>
        <Nav />
        <CouponTabs />
        <CouponGrid openModal={this.openModal}/>
        <SendModal isModalOpen={true} />
      </div>
    )
  }
}

export default App
