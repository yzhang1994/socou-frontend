import React, { Component } from 'react'
// import { connect } from 'react-redux'
import CouponGrid from './CouponGrid';
import Friends from './Friends';
import Nav from './Nav';
import CouponTabs from './CouponTabs';
import SendModal from './SendModal';
import SocouAbi from '../../../static/contracts/Socou.json'
import web3import from 'web3'

const SOCOU_ADDRESS = '0x64938F93D6bAFFA10b7e030c1Cf651b52C79E1FA'

const getWeb3 = () => new web3import(window.web3.currentProvider) 
const getSocouInstance = () => {
  const web3 = getWeb3()
  return new web3.eth.Contract(SocouAbi, SOCOU_ADDRESS)
}

class App extends Component {
  state = {
    coupons: [],
    isModalOpen: false,
    selectedCouponId: null,
    tabIndex: 0,
  };

  async componentDidMount() {
    if (!window.web3) {
      console.error('missing web3')
      return
    }
    console.log('web3 exists!')
    const coupons = await this.getCoupons()
    this.setState({ coupons })
  }

  setSelectedCouponId = (selectedCouponId) => (e) => this.setState({ selectedCouponId })

  // returns merchant, imageUrl, discount
  getCouponSet = async (couponSetIndex) => {
    const socouInstance = getSocouInstance()
    return socouInstance.methods.getCouponSet(couponSetIndex).call();
  }

  getCoupons = async () => {
    const socouInstance = getSocouInstance()
    const couponsLength = await socouInstance.methods.getCouponsLength().call();
    const couponsPromises = []
    for (let i = 0; i < couponsLength; i +=1) {
      couponsPromises.push(socouInstance.methods.getCoupon(i).call())
    }
    const coupons = await Promise.all(couponsPromises)
    const filteredCouponsPromises = coupons.map(async (coupon, i) => {
      const couponSetIndex = coupon[0]
      const holder = coupon[1]
      const usable = coupon[2]
      const used = coupon[3]

      // if (holder !== getWeb3().eth.accounts[0]) return
      const set = await this.getCouponSet(couponSetIndex)
      const merchant = set[0]
      const imageUrl = set[1]
      const discount = set[2]
      return {
        couponId: i,
        discount,
        imageUrl,
        merchant,
        usable,
        used,
      }
    })
    const filteredCoupons = await Promise.all(filteredCouponsPromises)
    return filteredCoupons
  }

  giveCoupon = (receiverAddress) => {
    const { selectedCouponId } = this.state
    console.log('giveCoupon', receiverAddress, selectedCouponId)
    const socouInstance = getSocouInstance()
    return socouInstance.methods.giveCoupon(selectedCouponId, receiverAddress).call();
  }

  useCoupon = () => {
    const { selectedCouponId } = this.state
    console.log('useCoupon', selectedCouponId)
    const socouInstance = getSocouInstance()
    return socouInstance.methods.useCoupon(selectedCouponId).call();
  }

  openModal = (isModalOpen = true) => (e) => {
    if (!isModalOpen) {
      this.setState({ isModalOpen, selectedCouponId: null})
    } else {
      this.setState({ isModalOpen })
    }
  };

  handleTabChange = (event, tabIndex) => {
    this.setState({ tabIndex });
  };

  render() {
    const { coupons, isModalOpen, tabIndex } = this.state
    let pageContent = null;
    switch (tabIndex) {
      case 0:
      case 1:
        pageContent = (
          <CouponGrid
            coupons={coupons}
            openModal={this.openModal}
            setSelectedCouponId={this.setSelectedCouponId}
            tabIndex={tabIndex}
          />);
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
        <SendModal
          action={tabIndex === 0 ? this.giveCoupon : this.useCoupon}
          isModalOpen={isModalOpen}
          openModal={this.openModal}
          tabIndex={tabIndex}
        />
      </div>
    )
  }
}

export default App;
