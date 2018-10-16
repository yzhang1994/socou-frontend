import React, { Component } from 'react'
// import { connect } from 'react-redux'
import CouponGrid from './CouponGrid';
import Nav from './Nav';
import CouponTabs from './CouponTabs';
import SendModal from './SendModal';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <CouponTabs />
        <CouponGrid />
        <SendModal />
      </div>
    )
  }
}

export default App
